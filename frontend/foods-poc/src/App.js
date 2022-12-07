import { useState } from 'react';
import ChooseLayout from './components/ChooseLayout';

import FileUploader from './components/FileUploader';
import OutputField from './components/OutputField';

function App() {
  const [selectedFile, setSelectedFile] = useState();
  const [retrievable, setRetrievable] = useState(false);
  const [chosenLayout, setChosenLayout] = useState();

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col w-full items-center mt-4'>
        <h1 className='text-2xl'>Data Visualisation</h1>
        <span className='text-sm mt-1'>
          By: Christopher Danielsson & Emil Mogensen @ HiQ
        </span>
      </div>
      <ChooseLayout setChosenLayout={setChosenLayout} />
      {chosenLayout ? (
        <FileUploader
          selectedFile={selectedFile}
          retrievable={retrievable}
          setSelectedFile={setSelectedFile}
          setRetrievable={setRetrievable}
        />
      ) : (
        <></>
      )}
      {retrievable ? (
        <OutputField
          selectedFile={selectedFile}
          retrievable={retrievable}
          setRetrievable={setRetrievable}
          layout={chosenLayout}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
