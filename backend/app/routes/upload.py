from fastapi import APIRouter, UploadFile, File
import shutil
import os

from app.services.pdf_service import extract_text_from_pdf
from app.services.chunk_service import chunk_text
from app.services.document_store import save_document
from app.services.document_analysis import analyze_document
from app.services.analysis_store import save_analysis

router = APIRouter()

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    pdf_data = extract_text_from_pdf(file_path)

    save_document(pdf_data["text"])

    chunks = chunk_text(pdf_data["text"])

    analysis = analyze_document(pdf_data["text"])

    save_analysis(analysis)

    return {
        "filename": file.filename,
        "pages": pdf_data["pages"],
        "total_chunks": len(chunks),
        "message": "PDF uploaded and analyzed successfully"
    }