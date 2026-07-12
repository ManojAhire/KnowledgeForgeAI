import json

from app.services.gemini_service import model


def generate_summary(document):

    prompt = f"""
You are an Industrial Documentation Expert.

Analyze this document.

Return ONLY valid JSON.

Do not use markdown.
Do not use ```json.
Do not explain anything.

JSON format:

{{
    "summary":"",
    "safety":[],
    "maintenance":[],
    "risks":[]
}}

Document:

{document}
"""

    response = model.generate_content(prompt)

    text = response.text.strip()

    # Remove markdown if Gemini still returns it
    text = text.replace("```json", "")
    text = text.replace("```", "")
    text = text.strip()

    return json.loads(text)