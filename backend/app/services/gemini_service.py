import os

from dotenv import load_dotenv

import google.generativeai as genai

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.5-flash")


def ask_gemini(context, question):

    prompt = f"""
You are an Industrial Knowledge Assistant.

Answer ONLY using the information below.

If the answer is not present, reply:
"I could not find this information in the uploaded document."

Document:

{context}

Question:

{question}
"""

    response = model.generate_content(prompt)

    return response.text