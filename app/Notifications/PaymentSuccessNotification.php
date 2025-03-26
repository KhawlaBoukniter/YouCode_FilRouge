<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Storage;

class PaymentSuccessNotification extends Notification
{
    use Queueable;

    public $reservation;

    /**
     * Create a new notification instance.
     */
    public function __construct($reservation)
    {
        $this->reservation = $reservation;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        $ticket = $this->reservation->ticket;
        $event = $ticket->event;
        $qrPath = $this->reservation->qr_code_path;

        $qrData = $qrPath && Storage::disk('public')->exists($qrPath) ? base64_encode(Storage::disk('public')->get($qrPath)) : null;

        $mail =  (new MailMessage)
            ->subject('Confirmation de paiement')
            ->greeting('Bonjour ' . $notifiable->name)
            ->line("Votre paiement pour l'événement **{$event->title}** a été confirmé.")
            ->line("Nombre de tickets : {$this->reservation->quantity}")
            ->line("Prix total : " . ($ticket->price * $this->reservation->quantity) . " €")
            ->line('Veuillez présenter le QR code ci-dessous à l’entrée de l’événement :');

        if ($qrData) {
            $mail->line('<img src="data:image/png;base64,' . $qrData . '" style="max-width: 300px;">');
        }

        $mail->line('Merci pour votre réservation et à bientôt sur ArtSpace !');

        return $mail->markdown('mail::message', ['slot' => $mail->introLines]);
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
