<?php

namespace App\Services\Comment;

interface CommentServiceInterface
{
    public function store(array $data);
    public function delete($comment);
}
