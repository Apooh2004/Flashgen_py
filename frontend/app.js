async function uploadPDF() {
  const fileInput = document.getElementById("pdfFile");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a PDF file.");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  try {
    console.log("Uploading PDF...");
    const response = await fetch("http://127.0.0.1:8000/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Flashcards received:", result);

    const cardsDiv = document.getElementById("cards");
    cardsDiv.innerHTML = "";

    result.flashcards.forEach((card) => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<strong>Q:</strong> ${card.question}<br><strong>A:</strong> <span style='display:none;'>${card.answer}</span>`;
      div.onclick = function () {
        const answer = this.querySelector("span");
        answer.style.display = answer.style.display === "none" ? "inline" : "none";
      };
      cardsDiv.appendChild(div);
    });

  } catch (error) {
    console.error("Error uploading or parsing PDF:", error);
    alert("Upload failed or backend not responding. Check console.");
  }
}
