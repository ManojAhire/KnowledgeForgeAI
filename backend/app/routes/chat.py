from fastapi import APIRouter
from pydantic import BaseModel

from app.services.gemini_service import ask_gemini
from app.services.document_store import get_document

router = APIRouter()


class ChatRequest(BaseModel):
    question: str


@router.post("/chat")
def chat(request: ChatRequest):

    context = get_document()

    if context == "":
        return {
            "answer": "Please upload a PDF first."
        }

    answer = ask_gemini(
        context,
        request.question
    )

    return {
        "answer": answer
    }