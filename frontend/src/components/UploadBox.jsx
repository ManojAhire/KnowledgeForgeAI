import {FileText} from "lucide-react"; 

function UploadBox({ onFileSelect }) {
  return (
    <div className="upload-box">
        <label htmlFor="pdf-upload" className="upload-label" >
            <FileText className="upload-icon" /><span>Choose the pdf file</span>
        </label>


      <input
        id="pdf-upload"
        type="file"
        accept=".pdf"
        onChange={(e) => onFileSelect(e.target.files[0])}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default UploadBox;