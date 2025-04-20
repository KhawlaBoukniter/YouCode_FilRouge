<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artwork extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'image',
        'artist_id',
        'price',
    ];

    public function artist()
    {
        return $this->belongsTo(Artist::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function likes()
    {
        return $this->belongsToMany(User::class, 'likes')->withTimestamps();
    }

    public function getLikesCountAttribute()
    {
        return $this->likes()->count();
    }

    public function buyers()
    {
        return $this->belongsToMany(User::class, 'artwork_user')
            ->withPivot('price', 'purchased_at')
            ->withTimestamps();
    }
}
