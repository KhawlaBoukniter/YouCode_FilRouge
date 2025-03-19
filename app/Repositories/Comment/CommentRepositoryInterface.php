<?php

namespace App\Repositories\Comment;

interface CommentRepositoryInterface
{
    public function store(array $data);
    public function delete($comment);
}
