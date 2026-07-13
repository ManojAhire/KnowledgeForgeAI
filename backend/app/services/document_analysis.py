import json

from app.services.gemini_service import model


def analyze_document(document):

    prompt = f"""
You are an Industrial Documentation Expert.

Analyze this document.

Return ONLY valid JSON.

Do not explain anything.
Do not use markdown.

Return exactly this structure:

{{
    "summary":"",
    "safety":[],
    "maintenance":[],
    "risks":[],
    "keywords":[],
    "machines":[]
}}

Document:

{document}
"""

    response = model.generate_content(prompt)

    text = response.text.strip()

    text = text.replace("```json", "")
    text = text.replace("```", "")
    text = text.strip()

    return json.loads(text)