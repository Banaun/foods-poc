package com.foodsPOC.FoodsPOC.controller;

import com.foodsPOC.FoodsPOC.helper.ConvertToImage;
//import com.foodsPOC.FoodsPOC.helper.MostRepeatedWord;
import com.foodsPOC.FoodsPOC.message.ResponseMessage;
import com.foodsPOC.FoodsPOC.services.FileStorageService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

@Controller
@CrossOrigin("http://localhost:3000")
public class FileController {

    @Autowired
    FileStorageService storageService;

    //Endpoint for uploading file
    @PostMapping("/upload")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file) {
        String message = storageService.save(file);
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
    }

    @GetMapping("/hej")
    @ResponseBody
    public String foo() {
        return "hej";
    }

    //Endpoint for processing the file
    @GetMapping("/process/{filename:.+}")
    @ResponseBody
    public ResponseEntity<ResponseMessage> getProcessedFile(@PathVariable String filename) {
        String message = "";
        try {
            //MostRepeatedWord mostRepeatedWord = new MostRepeatedWord(filename);
            //message = mostRepeatedWord.countWords();
            ConvertToImage convertToImage = new ConvertToImage(filename);
            message = convertToImage.readFile();
        } catch (Exception e) {
            message = "Could not process the file.";
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
    }
}
