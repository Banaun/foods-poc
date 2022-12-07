import { Button, Input } from '@material-tailwind/react';
import UploadService from '../services/upload-files-service';

const FileUploader = ({
  selectedFile,
  setSelectedFile,
  retrievable,
  setRetrievable,
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
          console.log(res);
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
    <div className='flex justify-center'>
      <div className='flex flex-col justify-center w-[22rem] sm:w-[30rem] shadow-md mt-6'>
        <form
          className='flex flex-col items-center p-6'
          onSubmit={handleSubmit}
        >
          <label
            htmlFor='formFile'
            className='form-label inline-block mb-2 text-sm'
          >
            Upload a file
          </label>
          <input
            className='form-control block w-full px-3 py-1.5 text-sm text-gray-700 bg-clip-padding border border-solid border-blue-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-800 focus:outline-none'
            id='formFile'
            type='file'
            accept='.rtf, .md, .txt, .file, .xlsx'
            onChange={handleChange}
          ></input>
          {selectedFile ? (
            <Button type='submit' className='mt-4'>
              Upload
            </Button>
          ) : (
            <></>
          )}
        </form>
        {retrievable ? (
          <p className='mt-4'>Uploaded file: {selectedFile.name}</p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
