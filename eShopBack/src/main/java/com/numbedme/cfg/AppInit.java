package com.numbedme.cfg;

import com.numbedme.app.filter.CORSFilter;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

import javax.servlet.*;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;


/**
 * Created by User on 15.02.2017.
 */

public class AppInit extends AbstractAnnotationConfigDispatcherServletInitializer {

    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class<?>[] {AppConfig.class};
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class<?>[0];
    }

    @Override
    protected String[] getServletMappings() {
        return new String[] {"/"};
    }

    @Override
    protected Filter[] getServletFilters() {
        return new Filter[]{ new CORSFilter()};

    }

    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {
        super.onStartup(servletContext);

        InputStream input = getClass().getClassLoader().getResourceAsStream("application.properties");
        Properties props = new Properties();

        try {
            props.load(input);
        } catch (IOException e) {
            e.printStackTrace();
        }
        servletContext.setInitParameter("spring.profiles.active", props.getProperty("spring.profiles.active"));
    }
}
