<?php

use App\Http\Controllers\ArtistController;
use App\Http\Controllers\ArtworkController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/artworks', [ArtworkController::class, 'index']);
Route::get('/artworks/{artwork}', [ArtworkController::class, 'show']);

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
    });
    Route::get('/artworks/{artwork}/comments', [CommentController::class, 'index']);

    Route::post('/comments', [CommentController::class, 'store']);
    Route::delete('/comments/{comment}', [CommentController::class, 'destroy']);
});
