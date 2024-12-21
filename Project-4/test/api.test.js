import { fetchData } from "../js/api";

test("fetchData returns correct structure", async () => {
  const mockData = { polarity: "positive", confidence: 0.9, text: "Test text" };

  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockData),
    })
  );

  const result = await fetchData("test");
  expect(result).toEqual(mockData);

  // Test for error handling (example)
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
    })
  );

  try {
    await fetchData("test");
  } catch (error) {
    expect(error).toBeTruthy(); // Expect an error to be thrown
  }
});
// Assuming you have a function 'add(a, b)' in your JS file

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});