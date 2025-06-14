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
  const flipContainer = document.createElement("div");
  flipContainer.className = "flip-card";

  flipContainer.innerHTML = `
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <strong>Q:</strong> ${card.question}
      </div>
      <div class="flip-card-back">
        <strong>A:</strong> ${card.answer}
      </div>
    </div>
  `;

  // Flip on click
  flipContainer.addEventListener("click", () => {
    flipContainer.classList.toggle("flipped");
  });

  cardsDiv.appendChild(flipContainer);
});


  } catch (error) {
    console.error("Error uploading or parsing PDF:", error);
    alert("Upload failed or backend not responding. Check console.");
  }
}
