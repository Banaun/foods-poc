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
    <div className='upload-outer-container'>
      <div className='upload-container'>
        <form className='upload-form' onSubmit={handleSubmit}>
          <input
            type='file'
            accept='.rtf, .md, .txt, .file, .xlsx'
            onChange={handleChange}
          />
          {selectedFile ? <button type='submit'>Upload</button> : <></>}
        </form>
        {retrievable ? <p>Uploaded file: {selectedFile.name}</p> : <></>}
      </div>
    </div>
  );
};

export default FileUploader;
