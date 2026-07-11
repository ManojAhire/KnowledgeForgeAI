import {useState} from "react";
import UploadBox from "../components/UploadBox";


function Upload() {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleUpload = async () => {

  if (!selectedFile) {
    alert("Please select a PDF.");
    return;
  }

  const formData = new FormData();

  formData.append("file", selectedFile);

  try {

    const response = await fetch(
      "http://127.0.0.1:8000/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    console.log(data);

    alert(data.message);

  } catch (error) {

    console.error(error);

    alert("Upload failed.");

  }

};
    

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
                {selectedFile ? selectedFile.name : "No file selected"}
            </p>

        </div>

        <button className="upload-b" onClick={handleUpload}>
            Upload
        </button>
        
    </div>
  );
}

export default Upload;  