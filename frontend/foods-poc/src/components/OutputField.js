import React, { useEffect, useState } from 'react';
import ProcessFileService from '../services/process-file-service';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import { Button } from '@material-tailwind/react';

const OutputField = ({ selectedFile, retrievable, layout }) => {
  const [textArr, setTextArr] = useState([]);
  const [identifiers, setIdentifiers] = useState();
  const [loading, setLoading] = useState(false);
  const [fileRetrieved, setFileRetrieved] = useState(false);

  let totalIncome = 0;

  useEffect(() => {
    if (layout) {
      const identifiersTemp = [];
      for (let graphic in layout) {
        identifiersTemp.push(layout[graphic].id);
      }
      setIdentifiers(identifiersTemp);
    }
  }, [layout]);

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
      alert('You need to upload a file first.');
    }
  }

  function replaceValuesWithSvg(retrievedText) {
    //Separate characters into an array
    let textArr = [...retrievedText];
    let tempTextArr = [];

    for (let i = 0; i <= 519; i++) {
      if (identifiers.includes(textArr[i])) {
        tempTextArr.push(textArr[i]);
      }
    }
    setTextArr([...tempTextArr]);
  }

  async function downloadImage(e) {
    //Download in A3 format (420mm x 297mm / 4961px x 3508px)
    e.preventDefault();

    const outputElement = document.getElementById('a3');

    const canvas = await html2canvas(outputElement);
    const dataURL = canvas.toDataURL('image/png');

    downloadjs(dataURL, 'foodspoc.png', 'image/png');
  }

  return (
    <>
      <div className='flex justify-center mb-6'>
        <div className='flex flex-col items-center bg-white min-w-[30rem] max-w-[70rem] border border-solid border-blue-500'>
          <div className='flex flex-row justify-between mt-4'>
            <Button
              className='m-1'
              onClick={processText}
              disabled={fileRetrieved}
            >
              Retrieve file
            </Button>
            {fileRetrieved && layout.length >= 2 ? (
              <Button className='m-1' onClick={downloadImage}>
                Download image
              </Button>
            ) : (
              <></>
            )}
          </div>
          <div className='mt-4 max-w-[90%] whitespace-pre-line break-normal'>
            {loading ? (
              <div className='loader mb-6'></div>
            ) : layout.length >= 2 ? (
              <>
                <div className='flex flex-row flex-wrap justify-center'>
                  {textArr.map((item) => {
                    for (let graphic in layout) {
                      if (item === layout[graphic].id) {
                        totalIncome += parseInt(layout[graphic].price);
                        return (
                          <img
                            className='w-[52px] h-auto object-cover'
                            src={require(`../assets/images/${layout[graphic].icon}.png`)}
                            alt='icon'
                          />
                        );
                      }
                    }
                  })}
                </div>
                {fileRetrieved && layout.length >= 2 ? (
                  <div className='flex flex-row w-full h-20 justify-between items-center'>
                    <div className='flex flex-row items-center'>
                      {layout.map((graphic) => {
                        return (
                          <>
                            <img
                              className='w-[40px]'
                              src={require(`../assets/images/${graphic.icon}.png`)}
                              alt='icon'
                            />
                            <span className='text-xl mr-4'>
                              {`= ${graphic.id}`}
                            </span>
                          </>
                        );
                      })}
                    </div>
                    <div>
                      <span className='text-xl'>{`Accumulated income: ${totalIncome}kr`}</span>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <p className='mb-6'>Please select at least two graphics!</p>
            )}
          </div>
        </div>
      </div>
      {fileRetrieved && layout.length >= 2 ? (
        <>
          <h1 className='text-3xl'>A3 Preview</h1>
          <div
            id='a3'
            className='flex justify-center items-center w-[3508px] h-[4961px] mb-40 break-normal border border-solid border-blue-500'
          >
            <div className='max-w-[90%] h-full mt-[38rem]'>
              <div className='flex flex-row flex-wrap justify-center w-[3040px] max-h-[4500px]'>
                {textArr.map((item) => {
                  for (let graphic in layout) {
                    if (item === layout[graphic].id) {
                      return (
                        <img
                          className='w-[160px] h-auto'
                          src={require(`../assets/images/${layout[graphic].icon}.png`)}
                          alt='icon'
                        />
                      );
                    }
                  }
                })}
              </div>
              <div className='flex flex-row w-full h-[20rem] justify-between items-center'>
                <div className='flex flex-row items-center'>
                  {layout.map((graphic) => {
                    return (
                      <>
                        <img
                          className='w-[120px]'
                          src={require(`../assets/images/${graphic.icon}.png`)}
                          alt='icon'
                        />
                        <span className='text-[3rem] mr-4'>
                          {`= ${graphic.id}`}
                        </span>
                      </>
                    );
                  })}
                </div>
                <div>
                  <span className='text-[3rem]'>{`Accumulated income: ${totalIncome}kr`}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default OutputField;
