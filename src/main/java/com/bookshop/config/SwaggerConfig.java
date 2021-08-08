package com.bookshop.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
//http://localhost:8081/v2/api-docs (url for swagger)
//http://localhost:8081/swagger-ui.html for ui
public class SwaggerConfig {

    @Bean
    public Docket allApi() {

        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.bookshop.controller"))
                .paths(PathSelectors.regex("/.*"))
                .build();
    }
}
