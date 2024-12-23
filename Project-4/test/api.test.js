import { fetchData } from "../dist/node_module/src/client/js/api";

// Mocking the fetchData function to test API response handling
test("fetchData returns correct structure", async () => {
  const mockData = { polarity: "positive", confidence: 0.9, text: "Test text" };

  // Mock the global fetch method to simulate API response
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockData),
    })
  );

  // Test: Successful API response
  const result = await fetchData("test");
  expect(result).toEqual(mockData);

  // Test: API error response
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
    })
  );

  // Catching and validating the error thrown by fetchData
  await expect(fetchData("test")).rejects.toThrow(
    "Error: API Error (500): Internal Server Error"
  );
});

// Test for the 'add' function
// Assuming you have a function 'add(a, b)' in your JS file
function add(a, b) {
  return a + b;
}

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});
