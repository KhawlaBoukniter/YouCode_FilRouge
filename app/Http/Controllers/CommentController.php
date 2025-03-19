<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Models\Artwork;
use App\Models\Comment;
use App\Services\Comment\CommentServiceInterface;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    protected $commentService;

    public function __construct(CommentServiceInterface $commentService)
    {
        $this->commentService = $commentService;
    }

    public function index(Artwork $artwork)
    {
        $comments = $artwork->comments()->with('user:id,name')->latest()->get();

        return response()->json([
            'artwork_id' => $artwork->id,
            'comments' => $comments
        ]);
    }

    public function store(CommentRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = Auth::id();

        $comment = $this->commentService->store($data);

        return response()->json([
            'message' => 'Commentaire ajouté avec succès',
            'comment' => $comment
        ], 201);
    }

    public function destroy(Comment $comment)
    {
        if ($comment->user_id !== Auth::id()) {
            return response()->json(['message' => 'Non autorisé.'], 403);
        }

        $this->commentService->delete($comment);

        return response()->json(['message' => 'Commentaire supprimé avec succès']);
    }
}
