<?php

use App\Http\Controllers\ArtistController;
use App\Http\Controllers\ArtworkController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\ReservationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:api')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::middleware('role:artist')->group(function () {
        Route::post('/artworks', [ArtworkController::class, 'store']);
        Route::put('/artworks/{artwork}', [ArtworkController::class, 'update']);
        Route::delete('/artworks/{artwork}', [ArtworkController::class, 'destroy']);
        Route::get('/my-artworks', [ArtworkController::class, 'myArtworks']);
        Route::get('/my-stats', [ArtworkController::class, 'myStats']);
        Route::put('/my-profile', [ArtistController::class, 'updateProfile']);

        Route::post('/events', [EventController::class, 'store']);
        Route::put('/events/{event}', [EventController::class, 'update']);
        Route::delete('/events/{event}', [EventController::class, 'destroy']);
    });

    Route::middleware('role:visitor')->group(function () {
        Route::get('/artworks/saved', [ArtworkController::class, 'getSavedArtworks']);
        Route::post('/artworks/{artwork}/save', [ArtworkController::class, 'toggleSave']);
        Route::post('/artworks/{artwork}/like', [ArtworkController::class, 'toggleLike']);
        Route::post('/reservations', [ReservationController::class, 'store']);
        Route::get('/my-reservations', [ReservationController::class, 'index']);
        Route::put('/reservations/{reservation}/pay', [ReservationController::class, 'pay']);
        Route::put('/reservations/{reservation}/cancel', [ReservationController::class, 'cancel']);
    });

    Route::get('/artworks', [ArtworkController::class, 'index']);
    Route::get('/artworks/{artwork}', [ArtworkController::class, 'show']);

    Route::get('/artworks/{artwork}/comments', [CommentController::class, 'index']);

    Route::post('/comments', [CommentController::class, 'store']);
    Route::delete('/comments/{comment}', [CommentController::class, 'destroy']);

    Route::post('/me/avatar', [AuthController::class, 'uploadAvatar']);

    Route::get('/events', [EventController::class, 'index']);
    Route::get('/events/{event}', [EventController::class, 'show']);
});
