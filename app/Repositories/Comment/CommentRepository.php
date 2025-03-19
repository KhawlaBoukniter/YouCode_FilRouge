<?php

namespace App\Repositories\Comment;

use App\Models\Comment;

class CommentRepository implements CommentRepositoryInterface
{
    public function store(array $data)
    {
        return Comment::create($data);
    }

    public function delete($comment)
    {
        return $comment->delete();
    }
}
