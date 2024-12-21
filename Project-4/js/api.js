// Function to fetch generic API data
async function fetchData(userInput) {
  const API_URL = `https://api.example.com/data?query=${encodeURIComponent(userInput)}`; // Ensure proper encoding

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`API Error (${response.status}): ${response.statusText}`);
    }

    const data = await response.json();

    // Extract and validate required fields
    const { polarity, confidence, text } = data;
    if (!polarity || !confidence || !text) {
      throw new Error("Missing required fields in the API response.");
    }

    return { polarity, confidence, text };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// Function to fetch data from the MeaningCloud API
async function fetchMeaningCloudData(text) {
  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
  if (!apiKey) {
    console.error("API key is missing. Please add your API key.");
    return null;
  }

  const url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=en&txt=${encodeURIComponent(text)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API Error (${response.status}): ${response.statusText}`);
    }

    const data = await response.json();

    // Validate response structure (example: check for 'score_tag' field)
    if (!data.score_tag) {
      throw new Error("Invalid response format from MeaningCloud API.");
    }

    // Return the processed response
    return data;
  } catch (error) {
    console.error("Error fetching data from MeaningCloud API:", error);
    return null;
  }
}

export { fetchData, fetchMeaningCloudData };
