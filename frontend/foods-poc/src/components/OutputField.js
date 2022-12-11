import React, { useEffect, useState } from 'react';
import ProcessFileService from '../services/process-file-service';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import { Button } from '@material-tailwind/react';

const OutputField = ({ selectedFile, retrievable, layout }) => {
  const [textArr, setTextArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fileRetrieved, setFileRetrieved] = useState(false);
  const [retrievedText, setRetrievedText] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  let identifiers = [];
  let totalIncome = 0;

  useEffect(() => {
    if (layout) {
      identifiers = [];
      for (let graphic in layout) {
        identifiers.push(layout[graphic].id);
      }
      if (retrievedText) {
        totalIncome = 0;
        replaceValuesWithSvg(retrievedText);
      }
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
        if (res.status === 200) {
          setRetrievedText(res.data.message);
          replaceValuesWithSvg(res.data.message);
          setErrorMsg('');
          setLoading(false);
          setFileRetrieved(true);
        } else {
          setErrorMsg('Could not process the file');
          setLoading(false);
          setFileRetrieved(false);
          setRetrievedText('');
        }
      });
    } else {
      alert('You need to upload a file first.');
    }
  }

  function replaceValuesWithSvg(text) {
    //Separate items into an array
    const itemArr = text.split(',');
    let tempItemArr = [];

    for (let i = 0; i < itemArr.length; i++) {
      if (identifiers.includes(itemArr[i])) {
        tempItemArr.push(itemArr[i]);
      }
    }

    if (tempItemArr.length > 513) {
      tempItemArr = tempItemArr.slice(0, 513);
    }
    setTextArr([...tempItemArr]);
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
      <div className='flex flex-col items-center justify-center mt-6 mb-20'>
        <div className='flex flex-row justify-between mb-2'>
          <button
            className='m-1 text-white bg-hiqpink-500 hover:bg-hiqpink-500 focus:outline-none rounded-lg text-sm px-4 py-2 text-center disabled:bg-hiqpink-100'
            onClick={processText}
            disabled={fileRetrieved || layout.length < 2}
          >
            Process file
          </button>
          {fileRetrieved && layout.length >= 2 ? (
            <button
              className='m-1 text-white bg-hiqpink-500 hover:bg-hiqpink-500 focus:outline-none rounded-lg text-sm px-4 py-2 text-center disabled:bg-hiqpink-100'
              onClick={downloadImage}
            >
              Download image
            </button>
          ) : (
            <></>
          )}
        </div>
        {loading ? (
          <div role='status'>
            <svg
              aria-hidden='true'
              class='mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
              viewBox='0 0 100 101'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                fill='currentColor'
              />
              <path
                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                fill='currentFill'
              />
            </svg>
            <span class='sr-only'>Loading...</span>
          </div>
        ) : textArr.length > 0 && layout.length >= 2 ? (
          <>
            <div className='flex flex-col items-center bg-white min-w-[30rem] max-w-[70rem] border border-solid border-pink-500'>
              <div className='mt-16 max-w-[90%] whitespace-pre-line break-normal'>
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
              </div>

              {fileRetrieved && layout.length >= 2 ? (
                <div className='flex flex-row w-full h-20 justify-between items-center'>
                  <div className='flex flex-row items-center ml-[4.2rem]'>
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
                    <span className='text-xl mr-[4.5rem]'>{`Accumulated income: ${totalIncome}kr`}</span>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      {fileRetrieved && layout.length >= 2 && textArr.length > 0 ? (
        <>
          <h1 className='text-3xl'>A3 Preview</h1>
          <div
            id='a3'
            className='flex justify-center items-center w-[3508px] h-[4961px] mb-40 break-normal border border-solid border-pink-500'
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
