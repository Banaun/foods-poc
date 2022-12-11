import { Button } from '@material-tailwind/react';
import UploadService from '../services/upload-files-service';

const FileUploader = ({
  selectedFile,
  setSelectedFile,
  retrievable,
  setRetrievable,
  chosenLayout,
}) => {
  function handleChange(e) {
    setSelectedFile(e.target.files[0]);
    setRetrievable(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //Check if user has chosen a file
    if (selectedFile) {
      //Upload the selected file to backend
      UploadService.upload(selectedFile)
        .then((res) => {
          //Update state for retrievable text
          if (res.data.message !== 'Could not upload the file.') {
            setRetrievable(true);
            // alert(res.data.message);
          } else {
            setRetrievable(false);
            alert(res.data.message);
          }
        })
        .catch((res) => {
          console.log(res);
        });
    } else {
      alert('No file chosen!');
    }
    //Clear the input field (just looks better)
    e.target.reset();
  }

  return (
    <div className='flex flex-col justify-center w-[22rem] sm:w-[30rem] mt-6 mb-6'>
      <form className='flex flex-col items-center' onSubmit={handleSubmit}>
        <label
          htmlFor='formFile'
          className='form-label inline-block mb-2 text-xs'
        >
          Upload a file for processing when two graphics or more have been added
        </label>
        <input
          className='form-control block w-full px-3 py-1.5 text-sm text-gray-700 bg-clip-padding border border-solid border-pink-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-pink-800 focus:outline-none disabled:opacity-50'
          id='formFile'
          type='file'
          accept='.rtf, .md, .txt, .file, .xlsx'
          onChange={handleChange}
          disabled={chosenLayout?.length < 2 || !chosenLayout}
        ></input>
        {selectedFile ? (
          <Button
            type='submit'
            color='pink'
            className='mt-4'
            disabled={retrievable}
          >
            Upload
          </Button>
        ) : (
          <></>
        )}
      </form>
      {retrievable ? (
        <p className='mt-4 text-center'>Uploaded file: {selectedFile.name}</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FileUploader;
