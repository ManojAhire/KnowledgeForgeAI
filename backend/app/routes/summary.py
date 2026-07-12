from fastapi import APIRouter

from app.services.document_store import get_document
from app.services.summary_service import generate_summary

router = APIRouter()


@router.get("/summary")
def summary():

    document = get_document()

    if document == "":

        return {
            "message": "Upload PDF first."
        }

    summary = generate_summary(document)

    return summary