<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;
use Stripe\Checkout\Session;
use Stripe\Stripe;

class PaymentController extends Controller
{
    public function checkout(Reservation $reservation)
    {
        if ($reservation->user_id !== Auth::id()) {
            return response()->json(['message' => 'Action non autorisée.'], 403);
        }

        $ticket = $reservation->ticket;

        if ($ticket->type === 'free' || $ticket->price === null || $ticket->price == 0) {
            return response()->json(['message' => 'Ce ticket est gratuit, aucun paiement requis.'], 400);
        }

        Stripe::setApiKey(config('services.stripe.secret'));

        try {
            $session = Session::create([
                'payment_method_types' => ['card'],
                'line_items' => [[
                    'price_data' => [
                        'currency' => 'eur',
                        'unit_amount' => (int)($ticket->price * 100),
                        'product_data' => [
                            'name' => $ticket->event->title,
                        ],
                    ],
                    'quantity' => $reservation->quantity,
                ]],
                'mode' => 'payment',
                'success_url' => URL::to('/checkout/success?session_id={CHECKOUT_SESSION_ID}'),
                'cancel_url' => URL::to('/checkout/cancel'),
            ]);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erreur Stripe : ' . $e->getMessage()], 500);
        }

        $reservation->stripe_session_id = $session->id;
        $reservation->save();

        return response()->json([
            'url' => $session->url
        ]);
    }

    public function handleSuccess()
    {
        $sessionId = request('session_id');

        if (! $sessionId) {
            return response()->json(['message' => 'Session manquante.'], 400);
        }

        $reservation = Reservation::where('stripe_session_id', $sessionId)->first();

        if (! $reservation) {
            return response()->json(['message' => 'Réservation introuvable.'], 404);
        }

        if ($reservation->status !== 'paid') {
            $reservation->status = 'paid';
            $reservation->save();
        }

        return response()->json([
            'message' => 'Paiement réussie.',
            'reservation' => $reservation
        ]);
    }
}
