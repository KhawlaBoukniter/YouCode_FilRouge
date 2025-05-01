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
            'description' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:10240',
            'price' => 'required|numeric|min:0'
        ];
    }
}
