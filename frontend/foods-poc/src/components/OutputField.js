import React, { useState } from "react";
import ProcessFileService from "../services/process-file-service";
//import { ReactComponent as SvgSandwich } from "../assets/images/IKEAfoods-01.svg";
//import { ReactComponent as SvgBookcase } from "../assets/images/IKEAfoods-02.svg";
import PngSandwich from "../assets/images/IKEAfoods-01.png";
import PngBookcase from "../assets/images/IKEAfoods-02.png";
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

const OutputField = ({ selectedFile, retrievable, setRetrievable }) => {
  const [textArr, setTextArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fileRetrieved, setFileRetrieved] = useState(false)

  function processText(e) {
    e.preventDefault();
    //Check if user has uploaded a file
    if (retrievable) {
      //Set loading to true (for big files)
      setLoading(true);
      //Get the processed text from backend
      ProcessFileService.process(selectedFile.name).then((res) => {
        replaceValuesWithSvg(res.data.message);
        setLoading(false);
        setFileRetrieved(true);
      });
    } else {
      alert("You need to upload a file first.");
    }
  }

  function replaceValuesWithSvg(retrievedText) {
    //Separate characters into an array
    let textArr = [...retrievedText];
    let tempTextArr = [];

    for (let i = 0; i <= 519; i++) {
      if (textArr[i] === "x") {
        tempTextArr.push("x");
      } else if (textArr[i] === "v") {
        tempTextArr.push("v");
      }
    }
    setTextArr([...tempTextArr]);
  }

  async function downloadImage(e) {
    //Download in A3 format (420mm x 297mm / 4961px x 3508px)
    e.preventDefault();

    const outputElement = document.querySelector('.a3-output-container');

    const canvas = await html2canvas(outputElement);
    const dataURL = canvas.toDataURL('image/png');

    downloadjs(dataURL, 'download.png', 'image/png');
  }

  return (
    <>
    <div className="output-flex-container">
      <div className="output-outer-container">
        <div className="upload-form-button-group">
          <button className="retrieve-text-button" onClick={processText}>
            Retrieve file
          </button>
          {fileRetrieved
          ?
            <button className="download-image-button" onClick={downloadImage}>
              Download image
            </button>
          :
            <></>
          }
        </div>
        <div className="output-container">
          {loading ? (
            <div className="loader"></div>
          ) : (
            <div className="output">
            {/*
            <SvgSandwich width="3rem" />
            <SvgSandwich width="3rem" />
            <SvgSandwich width="3rem" />
            <SvgSandwich width="3rem" />
            <SvgSandwich width="3rem" />
            <SvgSandwich width="3rem" />
            */}
              {textArr.map((item) => {
                if (item === "x") {
                  //return <SvgSandwich width="3rem" />;
                  return <img src={PngSandwich} alt="Sandwich" />
                } else if (item === "v") {
                  //return <SvgBookcase width="3rem" />;
                  return <img src={PngBookcase} alt="Bookcase" />
                } else {
                  return <></>;
                }
              })}
            </div>
          )}
        </div>
      </div>
    </div>
    {fileRetrieved 
    ?
    <>
      <h1 className="preview-text">A3 Preview</h1>
      <div className="a3-preview-container">
        <div className="a3-output-container">
          <div className="a3-output">
          {textArr.map((item) => {
            if (item === "x") {
              //return <SvgSandwich width="3rem" />;
              return <img src={PngSandwich} alt="Sandwich" />
            } else if (item === "v") {
              //return <SvgBookcase width="3rem" />;
              return <img src={PngBookcase} alt="Bookcase" />
            } else {
              return <></>;
            }
          })}
          </div>
        </div>
      </div>
    </>
    :
      <></>
    }
    </>
  );
};

export default OutputField;
