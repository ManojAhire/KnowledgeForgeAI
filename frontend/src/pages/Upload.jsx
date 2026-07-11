import {useState} from "react";
import UploadBox from "../components/UploadBox";



function Upload() {

    const [SelectedFile, setSelectedFile] = useState(null);



  return (
    <div className="dashboard" >
        <h1>Upload PDF</h1>
        <p>
            Select an industrial document.
        </p>
        <UploadBox onFileSelect={setSelectedFile} />

        <div className="selected-file">
            <h3>Selected File</h3>

            <p>
                {SelectedFile ? SelectedFile.name : "No file selected"}
            </p>

        </div>

        <button className="upload-b">
            Upload
        </button>
        
    </div>
  );
}

export default Upload;  