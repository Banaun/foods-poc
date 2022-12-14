import { useState } from 'react';
import ChooseLayout from './components/ChooseLayout';
import FileUploader from './components/FileUploader';
import OutputField from './components/OutputField';
import HiQLogo from './assets/images/HiQ_logo_black.png';

function App() {
  const [selectedFile, setSelectedFile] = useState();
  const [retrievable, setRetrievable] = useState(false);
  const [chosenLayout, setChosenLayout] = useState([]);

  return (
    <>
      <div className='flex flex-col w-full items-center mt-4 h-12'>
        <h1 className='text-2xl'>Data Visualisation</h1>
        <span className='flex flex-row text-sm mt-1 italic'>
          By: Christopher Danielsson & Emil Mogensen{' '}
          <span className='text-hiqpink-500 font-bold ml-1'>@</span>
          <a href='https://hiq.se/' target='_blank'>
            <img className='w-10 ml-1' src={HiQLogo} alt='HiQ' />
          </a>
        </span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <FileUploader
          selectedFile={selectedFile}
          retrievable={retrievable}
          setSelectedFile={setSelectedFile}
          setRetrievable={setRetrievable}
        />
        <ChooseLayout
          chosenLayout={chosenLayout}
          setChosenLayout={setChosenLayout}
          retrievable={retrievable}
        />
        {chosenLayout.length >= 2 ? (
          <OutputField
            selectedFile={selectedFile}
            retrievable={retrievable}
            layout={chosenLayout}
          />
        ) : chosenLayout.length === 1 ? (
          <span className='mt-2 text-xs'>Add at least two graphics</span>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;
