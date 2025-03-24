<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TicketRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'event_id' => 'required|exists:events,id',
            'quantity' => 'required|integer|min:1',
            'type' => 'required|in:vip,standard,free',
            'price' => 'nullable|numeric|min:0',
            'description' => 'nullable|string',
            'status' => 'required|in:available,paid,cancelled'
        ];
    }

    public function messages(): array
    {
        return [
            'event_id.required' => "L'événement est requis.",
            'event_id.exists' => "L'événement n'existe pas.",
            'quantity.required' => "La quantité doit etre un nombre entier",
            'quantity.min' => 'Au moin 1 ticket doit etre entrée',
            'type.required' => "Le type de ticket est requis.",
            'type.in' => "Le type de ticket doit être vip, standard ou free.",
            'price.numeric' => "Le prix doit être un nombre.",
            'status.in' => "Le statut doit être disponible, payé ou annulé.",
        ];
    }
}
