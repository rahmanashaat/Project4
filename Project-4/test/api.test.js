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
});
