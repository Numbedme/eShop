package com.numbedme.app.repository;

import com.numbedme.app.model.Comment;
import com.numbedme.app.model.Customer;
import com.numbedme.app.model.Product;

import java.util.List;

/**
 * Created by numbed on 3/22/17.
 */
public interface CommentRepository {

    Comment findById(int id);

    void updateComment(Comment comment);

    void deleteComment(Comment comment);

    void persistComment(Comment comment);

    List<Comment> findAllComments();

    List<Comment> findCommentsOfCustomer(Integer customerId);

    List<Comment> findCommentsByProduct(Integer productId);
}
