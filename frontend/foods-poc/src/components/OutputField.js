import React, { useState } from "react";
import ProcessFileService from "../services/process-file-service";

const OutputField = ({selectedFile, retrievable, setRetrievable}) => {
    const [text, setText] = useState();
    const [loading, setLoading] = useState(false);

    function processText(e) {
        e.preventDefault();
        //Check if user has uploaded a file
        if (retrievable) {
            //Set loading to true (for big files)
            setLoading(true);
            //Get the processed text from backend
            ProcessFileService.process(selectedFile.name).then((res) => {
            setText(res.data.message);
            setRetrievable(false);
            setLoading(false);
            });
        } else {
            alert("You need to upload a file first.");
        }
    }

    function downloadImage() {
        console.log("Downloading...")
    }

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
                {loading ? (
                    <div className="loader"></div>
                ) : (
                    <p className="output">{text}</p>
                )}
            </div>
        </div>
    );
}

export default OutputField;
