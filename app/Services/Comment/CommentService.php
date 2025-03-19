<?php

namespace App\Services\Comment;

use App\Repositories\Comment\CommentRepositoryInterface;

class CommentService implements CommentServiceInterface
{
    protected $commentRepo;

    public function __construct(CommentRepositoryInterface $commentRepo)
    {
        $this->commentRepo = $commentRepo;
    }

    public function store(array $data)
    {
        return $this->commentRepo->store($data);
    }

    public function delete($comment)
    {
        return $this->commentRepo->delete($comment);
    }
}
