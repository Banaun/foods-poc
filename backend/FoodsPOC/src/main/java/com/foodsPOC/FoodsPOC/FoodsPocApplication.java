package com.foodsPOC.FoodsPOC;

import javax.annotation.Resource;

import com.foodsPOC.FoodsPOC.services.FileStorageService;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FoodsPocApplication implements CommandLineRunner {

	@Resource
	FileStorageService storageService;
	public static void main(String[] args) {
		SpringApplication.run(FoodsPocApplication.class, args);
	}

	//When starting application, delete uploads folder, then initialize clean folders
	@Override
	public void run(String... arg) throws Exception {
		storageService.deleteAll();
		storageService.init();
	}

}
