// Function to evaluate an article using NLP
async function evaluateArticle(articleText) {
  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
  const apiUrl = `https://api.meaningcloud.com/sentiment-2.1`;

  const params = new URLSearchParams();
  params.append("key", apiKey);
  params.append("txt", articleText);
  params.append("lang", "en");

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    if (!response.ok) {
      throw new Error(`API Error (${response.status}): ${response.statusText}`);
    }

    const data = await response.json();
    if (data && data.status && data.status.code === "0") {
      return {
        polarity: data.score_tag || "N/A",
        confidence: data.confidence || "N/A",
        subjectivity: data.subjectivity || "N/A",
        irony: data.irony || "N/A",
        text: articleText,
      };
    } else {
      throw new Error(`API Error: ${data.status.msg}`);
    }
  } catch (error) {
    console.error("Error evaluating article:", error);
    return null;
  }
}

// Event listener for form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("data-form");
  const outputDiv = document.getElementById("output");

  if (!form || !outputDiv) {
    console.error("Required elements are missing in the DOM!");
    return;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const articleText = document.getElementById("user-input").value;

    if (articleText.trim() === "") {
      outputDiv.textContent = "Please enter an article to evaluate.";
      outputDiv.style.color = "red";
      return;
    }

    outputDiv.textContent = "Evaluating the article...";
    outputDiv.style.color = "black";

    const result = await evaluateArticle(articleText);

    if (result) {
      outputDiv.innerHTML = `
        <p><strong>Polarity:</strong> ${result.polarity}</p>
        <p><strong>Confidence:</strong> ${result.confidence}</p>
        <p><strong>Subjectivity:</strong> ${result.subjectivity}</p>
        <p><strong>Irony:</strong> ${result.irony}</p>
        <p><strong>Text:</strong> ${result.text}</p>
      `;
      outputDiv.style.color = "green";
    } else {
      outputDiv.textContent = "Failed to evaluate the article. Please try again.";
      outputDiv.style.color = "red";
    }
  });
});
