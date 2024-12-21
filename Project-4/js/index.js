// Import necessary modules (replace with appropriate paths if you're using Webpack or similar)
import "../styles/main.scss";

// Define the fetchData function to interact with the API
async function fetchData(inputText) {
  try {
    const response = await fetch("https://your-api-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: inputText }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data; // Ensure the structure matches { polarity, confidence, text }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// Main script that runs after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("data-form");
  const outputDiv = document.getElementById("output");

  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent page refresh

    const userInput = document.getElementById("user-input").value;

    // Validate user input
    if (!userInput.trim()) {
      outputDiv.textContent = "Input cannot be empty.";
      outputDiv.style.color = "red";
      return;
    }

    // Fetch data from API
    outputDiv.textContent = "Processing..."; // Show a loading message
    outputDiv.style.color = "black";

    const result = await fetchData(userInput);

    // Display results or an error message
    if (result) {
      outputDiv.innerHTML = `
        <p><strong>Polarity:</strong> ${result.polarity}</p>
        <p><strong>Confidence:</strong> ${result.confidence}</p>
        <p><strong>Text:</strong> ${result.text}</p>
      `;
      outputDiv.style.color = "green";
    } else {
      outputDiv.textContent = "Error fetching data. Please try again!";
      outputDiv.style.color = "red";
    }
  });
});
