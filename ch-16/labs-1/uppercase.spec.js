const uppercase = require("./uppercase");

test("throws error", () => {
  expect(() => {
    uppercase(1);
  }).toThrow(Error("input must be a string"));
  expect(() => {
    uppercase(null);
  }).toThrow(Error("input must be a string"));
  expect(() => {
    uppercase([]);
  }).toThrow(Error("input must be a string"));
  expect(() => {
    uppercase({});
  }).toThrow(Error("input must be a string"));
  expect(() => {
    uppercase();
  }).toThrow(Error("input must be a string"));
});

test("returns uppercase string", () => {
  expect(uppercase("string")).toBe("STRING");
  expect(uppercase("StRiNg")).toBe("STRING");
  expect(uppercase("STRING")).toBe("STRING");
});
