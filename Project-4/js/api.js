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
  async function fetchMeaningCloudData(text) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=en&txt=${text}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      // Process the data from the response
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }