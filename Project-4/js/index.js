import { fetchData } from "./api";
import "../styles/main.scss";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("data-form");
  const outputDiv = document.getElementById("output");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const userInput = document.getElementById("user-input").value;

    if (userInput) {
      const result = await fetchData(userInput);
      if (result) {
        outputDiv.innerHTML = `
          <p><strong>Polarity:</strong> ${result.polarity}</p>
          <p><strong>Confidence:</strong> ${result.confidence}</p>
          <p><strong>Text:</strong> ${result.text}</p>
        `;
      } else {
        outputDiv.textContent = "Error fetching data. Try again!";
      }
    }
  });
});
