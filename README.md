# 📄 FlashGen - Flashcard Generator from PDF (FastAPI + JS)

FlashGen is a simple and intuitive web app that allows users to upload a PDF containing question-answer pairs (formatted with `Q:` and `A:`), and generates interactive flashcards from it.

---

## 🔧 Tech Stack

- **Backend**: Python, FastAPI, Uvicorn, PyPDF2
- **Frontend**: HTML, CSS, JavaScript
- **Document Parsing**: Regex-based Q&A extractor
- **Dev Tools**: VS Code, Live Server, Browser DevTools

---

## 📂 Project Structure
Flashgen/
├── backend/
│ ├── main.py
│ ├── requirements.txt
│ └── venv/ (not pushed to GitHub)
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── app.js
├── README.md

## 📦 Setup Instructions

### ✅ Backend (Python FastAPI)

1. Open terminal and navigate to the backend folder:
   cd backend
   python -m venv venv
2. Create and activate virtual environment:
   .\venv\Scripts\activate  # Windows
   # or
   source venv/bin/activate  # macOS/Linux
3. Install Dependencies:
   pip install -r requirements.txt
4. Run the backend server:
   uvicorn main:app --reload

Visit: http://127.0.0.1:8000/docs to test the API.

### 🌐 Frontend (Live Server)
1. Open index.html in your browser or with Live Server from VS Code.

2. Upload a properly formatted PDF:

   Q: What is AI?
   A: Artificial Intelligence

   Q: What is Java?
   A: A programming language.

3. Click "Generate Flashcards" to see interactive cards.

🚀 Features
📄 Upload PDFs with Q/A content

🔍 Extract flashcards dynamically

✨ Interactive flashcards (click to reveal answers)

⚡ Fast and lightweight UI
