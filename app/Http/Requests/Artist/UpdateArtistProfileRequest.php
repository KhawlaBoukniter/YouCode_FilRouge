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
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $this->user()->id,
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'website' => 'nullable|url',
            'instagram' => 'nullable|url',
            'twitter' => 'nullable|url',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Le nom est requis.',
            'email.required' => 'L’email est requis.',
            'email.email' => 'Le format de l’email est invalide.',
            'email.unique' => 'Cet email est déjà utilisé.',
        ];
    }
}
