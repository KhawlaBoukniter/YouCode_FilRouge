<?php

namespace App\Http\Requests\Artist;

use Illuminate\Foundation\Http\FormRequest;

class UpdateArtistProfileRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'bio' => 'nullable|string|max:1000',
            'user.name' => 'required|string|max:255',
            'user.email' => 'required|email|unique:users,email,' . $this->user()->id,
        ];
    }

    public function messages(): array
    {
        return [
            'user.name.required' => 'Le nom est requis.',
            'user.email.required' => 'L’email est requis.',
            'user.email.email' => 'Le format de l’email est invalide.',
            'user.email.unique' => 'Cet email est déjà utilisé.',
        ];
    }
}
