async function fetchData(userInput) {
    const API_URL = `https://api.example.com/data?query=${userInput}`;
  
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }
      const data = await response.json();
  
      // Extract required data points
      return {
        polarity: data.polarity,
        confidence: data.confidence,
        text: data.text,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }
  
  export { fetchData };
  