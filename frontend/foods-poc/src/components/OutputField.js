import React, { useState } from "react";
import ProcessFileService from "../services/process-file-service";
import { ReactComponent as SvgSandwich } from "../assets/images/IKEAfoods-01.svg";
import { ReactComponent as SvgBookcase } from "../assets/images/IKEAfoods-02.svg";

const OutputField = ({ selectedFile, retrievable, setRetrievable }) => {
  const [textArr, setTextArr] = useState([]);

  function processText(e) {
    e.preventDefault();
    //Check if user has uploaded a file
    if (retrievable) {
      //Get the processed text from backend
      ProcessFileService.process(selectedFile.name).then((res) => {
        replaceValuesWithSvg(res.data.message);
        setRetrievable(false);
      });
    } else {
      alert("You need to upload a file first.");
    }
  }

  function replaceValuesWithSvg(retrievedText) {
    //Separate characters into an array
    let textArr = [...retrievedText];
    let tempTextArr = [];

    for (let i = 0; i < textArr.length; i++) {
      if (textArr[i] === "x") {
        tempTextArr.push("x");
      } else if (textArr[i] === "v") {
        tempTextArr.push("v");
      }
    }
    setTextArr([...tempTextArr]);
  }

  function downloadImage() {}

  /*
  const items = textArr.map((item) => (
    <>
      {item === "x" ? (
        <SvgSandwich width="2rem" />
      ) : (
        <SvgBookcase width="2rem" />
      )}
    </>
  ));
  */

  return (
    <div className="output-outer-container">
      <div className="upload-form-button-group">
        <button className="retrieve-text-button" onClick={processText}>
          Retrieve file
        </button>
        <button className="download-image-button" onClick={downloadImage}>
          Download image
        </button>
      </div>
      <div className="output-container">
        <div className="output">
          {textArr.map((item) => {
            if (item === "x") {
              return <SvgSandwich width="3rem" />;
            } else if (item === "v") {
              return <SvgBookcase width="3rem" />;
            } else {
              <></>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default OutputField;
