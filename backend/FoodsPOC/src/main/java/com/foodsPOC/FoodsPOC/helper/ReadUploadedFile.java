package com.foodsPOC.FoodsPOC.helper;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Iterator;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ReadUploadedFile {
    private String filename;

    public ReadUploadedFile(String filename) {
        this.filename = filename;
    }

    public String readAndReturnXLSX() {
        String fileContents = "";

        try (FileInputStream file = new FileInputStream(new File("uploads/" + this.filename))) {
            Workbook workbook = new XSSFWorkbook(file);
            Sheet sheet = workbook.getSheetAt(0);
            workbook.close();
            Iterator<Row> itr = sheet.iterator();

            while (itr.hasNext()) {
                Row row = itr.next();
                Iterator<Cell> cellIterator = row.cellIterator();

                while (cellIterator.hasNext()) {
                    Cell cell = cellIterator.next();
                    fileContents += cell.getStringCellValue();
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return fileContents;
    }
}
