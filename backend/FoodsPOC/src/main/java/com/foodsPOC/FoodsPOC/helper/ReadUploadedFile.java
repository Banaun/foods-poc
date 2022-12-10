package com.foodsPOC.FoodsPOC.helper;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Iterator;

import org.apache.poi.ss.usermodel.*;
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
                    if (cell != null) {
                        CellType ct = cell.getCellType();
                        if (ct == CellType.NUMERIC) {
                            fileContents += format(cell.getNumericCellValue()+"");
                        } else if (ct == CellType.STRING) {
                            fileContents += format(cell.getStringCellValue());
                        }
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return fileContents;
    }

    public String format(String val){
        String stringVal = String.valueOf(val);
        String[] number = stringVal.split( "[.]" );
        if(number.length>1 && number[1].equalsIgnoreCase("0")){
            return number[0] + ",";
        } else {
            return val + ",";
        }
    }
}
