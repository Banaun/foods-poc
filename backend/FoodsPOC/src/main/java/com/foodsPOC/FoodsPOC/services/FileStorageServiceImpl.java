package com.foodsPOC.FoodsPOC.services;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileStorageServiceImpl implements FileStorageService {
    private final Path uploads = Paths.get("uploads");

    //Allowed file types
    private final List<String> contentTypes = Arrays.asList(
        "application/rtf", 
        "text/plain", 
        "application/octet-stream", 
        "application/msword", 
        "application/vnd.ms-excel", 
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    //Initialize storage and create uploads and tempfiles folders
    @Override
    public void init() {
        try {
            Files.createDirectory(uploads);
            //Files.createDirectory(temp);
        } catch (IOException e) {
            throw new RuntimeException("Could not initialize folder for upload!");
        }
    }
    @Override
    public String save(MultipartFile file) {
        String message = "";
        //Get content type from file
        String fileContentType = file.getContentType();
        //Check if file is allowed
        if(contentTypes.contains(fileContentType)) {
            try {
                if(Files.exists(this.uploads.resolve(file.getOriginalFilename()))) {
                    message = file.getOriginalFilename() + " already exists.";
                } else {
                    Files.copy(file.getInputStream(), this.uploads.resolve(file.getOriginalFilename()));
                    message = "Uploaded the file successfully: " + file.getOriginalFilename();
                }
            } catch (Exception e) {
                message = "Could not upload the file.";
            }
        } else {
            message = "This content-type is not allowed: " + fileContentType;
        }
        return message;
    }
    @Override
    public void deleteAll() {
        FileSystemUtils.deleteRecursively(uploads.toFile());
    }
}
