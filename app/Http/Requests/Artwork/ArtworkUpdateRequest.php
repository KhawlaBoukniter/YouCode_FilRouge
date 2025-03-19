<?php

namespace App\Http\Requests\Artwork;

use Illuminate\Foundation\Http\FormRequest;

class ArtworkUpdateRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'image' => 'sometimes|url'
        ];
    }
}
