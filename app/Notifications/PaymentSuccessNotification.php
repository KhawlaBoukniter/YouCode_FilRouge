<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

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

        return (new MailMessage)
            ->subject('Confirmation de paiement')
            ->greeting('Bonjour ' . $notifiable->name)
            ->line("Votre paiement pour l'événement **{$event->title}** a été confirmé.")
            ->line("Nombre de tickets : {$this->reservation->quantity}")
            ->line("Prix total : " . ($ticket->price * $this->reservation->quantity) . " €")
            ->line('Merci pour votre réservation et à bientôt sur ArtSpace !');
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
