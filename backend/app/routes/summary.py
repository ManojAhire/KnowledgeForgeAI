from fastapi import APIRouter
from app.services.analysis_store import get_analysis

router = APIRouter()


@router.get("/summary")
def summary():

    return get_analysis()