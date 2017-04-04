package com.numbedme.app.controller;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

/**
 * Created by numbed on 4/4/17.
 */
@RestController("/images")
public class ImageController {

    private File file = new File("/home/numbed/Documents/file");

    @RequestMapping(method = RequestMethod.POST)
    public void postFile(@RequestBody() MultipartFile file) throws IOException {
        file.transferTo(this.file);
        this.file.getParentFile().mkdirs();
        this.file.createNewFile();
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<InputStreamResource> getFile() throws IOException {
        return ResponseEntity.ok()
                .contentLength(file.length())
                .contentType(MediaType.parseMediaType(Files.probeContentType(Paths.get(file.toURI()))))
                .body(new InputStreamResource(new FileInputStream(file)));
    }
}