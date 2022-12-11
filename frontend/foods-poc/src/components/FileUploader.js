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
          console.log(res);
          //Update state for retrievable text
          if (res.status === 200) {
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
    <div className='flex flex-col justify-center w-[22rem] sm:w-[30rem] mt-10'>
      <form className='flex flex-col items-center' onSubmit={handleSubmit}>
        <label
          htmlFor='formFile'
          className='form-label inline-block mb-2 text-xs'
        >
          Start by uploading a file for processing, see example for file
          structure{' '}
          <a
            className='text-hiqpink-500'
            href='/example/example.png'
            target='_blank'
          >
            here
          </a>
        </label>
        <input
          className='block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer rounded-lg bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
          id='formFile'
          type='file'
          accept='.rtf, .md, .txt, .file, .xlsx'
          onChange={handleChange}
        />
        {selectedFile ? (
          <button
            type='submit'
            className='mt-2 text-white bg-hiqpink-500 hover:bg-hiqpink-500 focus:outline-none rounded-lg text-sm px-4 py-2 text-center disabled:bg-hiqpink-100'
            disabled={retrievable}
          >
            Upload
          </button>
        ) : (
          <></>
        )}
      </form>
      {retrievable ? (
        <p className='mt-2 text-center text-sm'>
          Uploaded file: {selectedFile.name}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FileUploader;
