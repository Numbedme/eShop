package com.numbedme.app.service.impl;

import com.numbedme.app.model.Comment;
import com.numbedme.app.repository.CommentRepository;
import com.numbedme.app.service.CommentService;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by numbed on 3/22/17.
 */

@Service
@Transactional
public class CommentServiceImpl implements CommentService {

    @Autowired
    CommentRepository repository;

    @Override
    public Comment findById(int id) {
        return repository.findById(id);
    }

    @Override
    public void updateComment(Comment comment) {
        repository.updateComment(comment);
    }

    @Override
    public void deleteComment(Comment comment) {
        repository.deleteComment(comment);
    }

    @Override
    public void persistComment(Comment comment) {
        if (comment.getCustomer() != null){
            Hibernate.initialize(comment.getCustomer());
        }
        if (comment.getProduct() != null){
            Hibernate.initialize(comment.getProduct());
        }

        repository.persistComment(comment);
    }

    @Override
    public List<Comment> findAllComments() {
        return repository.findAllComments();
    }

    @Override
    public List<Comment> findCommentsOfCustomer(Integer customerId) {
        return repository.findCommentsOfCustomer(customerId);
    }

    @Override
    public List<Comment> findCommentsByProduct(Integer productId) {
        return repository.findCommentsByProduct(productId);
    }
}
