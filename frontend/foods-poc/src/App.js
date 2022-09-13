import { useState } from "react";

import FileUploader from "./components/FileUploader";
import OutputField from "./components/OutputField";

function App() {
  const [selectedFile, setSelectedFile] = useState();
  const [retrievable, setRetrievable] = useState(false);

  return (
    <div className="main-container">
      <div>
        <h1>IKEA Foods PoC</h1>
        <h3>Blablabla bla bla</h3>
      </div>
      <FileUploader
        selectedFile={selectedFile}
        retrievable={retrievable}
        setSelectedFile={setSelectedFile}
        setRetrievable={setRetrievable}
      />
      <OutputField
        selectedFile={selectedFile}
        retrievable={retrievable}
        setRetrievable={setRetrievable}
      />
    </div>
  );
}

export default App;
