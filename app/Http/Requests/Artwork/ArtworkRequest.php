<?php

namespace App\Http\Requests\Artwork;

use Illuminate\Foundation\Http\FormRequest;

class ArtworkRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'required|url'
        ];
    }
}
