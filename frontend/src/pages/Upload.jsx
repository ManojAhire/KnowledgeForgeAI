import { useState } from "react";
import UploadBox from "../components/UploadBox";


function Upload() {

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [selectedFile, setSelectedFile] = useState(null);


  const handleUpload = async () => {


    if (!selectedFile) {

      alert("Please select a PDF.");

      return;

    }


    const formData = new FormData();

    formData.append("file", selectedFile);


    try {


      setLoading(true);

      setError(null);


      const response = await fetch(

        "http://127.0.0.1:8000/upload",

        {

          method: "POST",

          body: formData,

        }

      );


      if (!response.ok) {

        throw new Error(
          "Upload failed"
        );

      }


      const data = await response.json();


      console.log(data);


      alert(
        "Document uploaded and analyzed successfully!"
      );


    } catch (error) {


      console.error(error);


      setError(
        "Upload failed. Please try again."
      );


    } finally {


      setLoading(false);


    }

  };


  return (

    <div className="dashboard">


      <h1>
        Upload PDF
      </h1>


      <p>
        Select an industrial document.
      </p>


      <UploadBox
        onFileSelect={setSelectedFile}
      />


      <div className="selected-file">


        <h3>
          Selected File
        </h3>


        <p>

          {selectedFile

            ? selectedFile.name

            : "No file selected"}

        </p>


      </div>


      {error && (

        <p className="upload-error">

          {error}

        </p>

      )}


      <button

        className="upload-b"

        onClick={handleUpload}

        disabled={loading}

      >

        {loading

          ? "Analyzing Document..."

          : "Upload"}

      </button>


    </div>

  );

}


export default Upload;