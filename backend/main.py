from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from PyPDF2 import PdfReader
from typing import List
import io
import re

app = FastAPI()

# Allow frontend calls (CORS policy)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "FlashGen is running!"}

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    contents = await file.read()
    reader = PdfReader(io.BytesIO(contents))
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"

    flashcards = extract_flashcards(text)
    return {"flashcards": flashcards}

def extract_flashcards(text: str) -> List[dict]:
    flashcards = []
    pattern = re.compile(r"Q:\s*(.*?)\s*A:\s*(.*?)(?=(\nQ:|$))", re.DOTALL)
    matches = pattern.findall(text)
    for match in matches:
        question = match[0].strip().replace("\n", " ")
        answer = match[1].strip().replace("\n", " ")
        flashcards.append({"question": question, "answer": answer})
    return flashcards