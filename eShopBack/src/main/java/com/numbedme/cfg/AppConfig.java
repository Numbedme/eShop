package com.numbedme.cfg;


import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


/**
 * Created by User on 15.02.2017.
 */

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.numbedme.app.*")
@Import({DataConfig.class})
public class AppConfig extends WebMvcConfigurerAdapter {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/*")
                .allowedOrigins("http://localhost")
                .allowedMethods("*")
                .allowedHeaders("*");

    }
}

