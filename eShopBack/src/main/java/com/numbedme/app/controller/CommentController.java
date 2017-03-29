package com.numbedme.app.controller;

import com.numbedme.app.model.entity.Comment;
import com.numbedme.app.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by numbed on 3/22/17.
 */

@RestController()
@RequestMapping(value = "/comments")
public class CommentController {

    @Autowired
    private CommentService service;

    @RequestMapping(method = GET)
    public List<Comment> getAllComments(){
        return service.findAllComments();
    }

    @RequestMapping(method = GET, value = "/user/{id}")
    public List<Comment> getCustomersComments(@PathVariable("id") Integer id){
        return service.findCommentsOfCustomer(id);
    }

    @RequestMapping(method = GET, value = "/product/{id}")
    public List<Comment> getProductsComments(@PathVariable("id") Integer id){
        return service.findCommentsByProduct(id);
    }

    @RequestMapping(method = POST)
    public void addComment(@RequestBody Comment comment) {
        service.persistComment(comment);
    }

    @RequestMapping(method = DELETE, value = "/{id}")
    public void addComment(@PathVariable("id") Integer id) {
        service.deleteComment(service.findById(id));
    }

}
