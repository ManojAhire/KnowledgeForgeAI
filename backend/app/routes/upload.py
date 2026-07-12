from fastapi import APIRouter, UploadFile, File
import shutil
import os

from app.services.pdf_service import extract_text_from_pdf
from app.services.chunk_service import chunk_text

router = APIRouter()

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    pdf_data = extract_text_from_pdf(file_path)

    chunks = chunk_text(pdf_data["text"])

    return {

        "filename": file.filename,

        "pages": pdf_data["pages"],

        "total_chunks": len(chunks),

        "first_chunk": chunks[0] if chunks else "",

        "message": "PDF uploaded successfully"

    }