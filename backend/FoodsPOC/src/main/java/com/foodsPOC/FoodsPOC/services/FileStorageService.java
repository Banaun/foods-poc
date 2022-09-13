package com.foodsPOC.FoodsPOC.services;

import org.springframework.web.multipart.MultipartFile;

public interface FileStorageService {
    public void init();
    public String save(MultipartFile file);
    public void deleteAll();
}

