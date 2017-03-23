package com.numbedme.app.repository.impl;

import com.numbedme.app.model.Comment;
import com.numbedme.app.repository.AbstractRepository;
import com.numbedme.app.repository.CommentRepository;
import org.springframework.stereotype.Repository;

import org.hibernate.Query;
import java.util.List;

/**
 * Created by numbed on 3/22/17.
 */

@Repository
public class CommentRepositoryImpl extends AbstractRepository<Integer, Comment> implements CommentRepository {
    @Override
    public Comment findById(int id) {
        return getByKey(id);
    }

    @Override
    public void updateComment(Comment comment) {
        update(comment);
    }

    @Override
    public void deleteComment(Comment comment) {
        delete(comment);
    }

    @Override
    public void persistComment(Comment comment) {
        persist(comment);
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<Comment> findAllComments() {
        return createEntityCriteria().list();
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<Comment> findCommentsOfCustomer(Integer customerId) {
        Query query = getSession().createQuery("select c from Comment c WHERE c.customer.id = :id");
        query.setParameter("id", customerId);
        return query.list();
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<Comment> findCommentsByProduct(Integer productId) {
        Query query = getSession().createQuery("select c from Comment c WHERE c.product.id = :id");
        query.setParameter("id", productId);
        return query.list();
    }
}
