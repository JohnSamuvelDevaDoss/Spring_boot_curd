package com.stars;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class SimpleEntityApp2Application {

	public static void main(String[] args) {
		SpringApplication.run(SimpleEntityApp2Application.class, args);
	}
}
