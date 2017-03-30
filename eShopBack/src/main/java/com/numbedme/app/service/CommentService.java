package com.numbedme.app.service;

import com.numbedme.app.model.entity.Comment;

import java.util.List;

/**
 * Created by numbed on 3/22/17.
 */
public interface CommentService {
    Comment findById(int id);

    void updateComment(Comment comment);

    void deleteComment(Comment comment);

    void persistComment(Comment comment);

    List<Comment> findAllComments();

    List<Comment> findCommentsOfCustomer(Integer customerId);

    List<Comment> findCommentsByProduct(Integer product);
}
