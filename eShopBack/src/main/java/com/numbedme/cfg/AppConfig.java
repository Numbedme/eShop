package com.numbedme.cfg;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.*;

import org.springframework.core.env.Environment;
import org.springframework.mail.MailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.util.Properties;


/**
 * Created by User on 15.02.2017.
 */

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.numbedme.app.*")
@Import({DataConfig.class})
@PropertySource(value = {"classpath:application.properties"})
public class AppConfig extends WebMvcConfigurerAdapter {

    @Autowired
    Environment environment;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/*")
                .allowedOrigins("http://localhost")
                .allowedMethods("*")
                .allowedHeaders("*");

    }

    @Bean
    public MailSender mailSender(){
        JavaMailSenderImpl sender = new JavaMailSenderImpl();
        sender.setHost(environment.getProperty("smtp.host"));
        sender.setPort(Integer.parseInt(environment.getProperty("smtp.port")));
        sender.setUsername(environment.getProperty("smtp.username"));
        sender.setPassword(environment.getProperty("smtp.password"));

        Properties properties = new Properties();
        properties.put("mail.transport.protocol", "smtp");
        properties.put("mail.smtp.auth", true);
        properties.put("mail.smtp.starttls.enable", true);
        properties.put("mail.debug", true);
        sender.setJavaMailProperties(properties);

        return sender;
    }


}

