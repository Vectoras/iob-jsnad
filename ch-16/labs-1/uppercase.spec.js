const uppercase = require("./uppercase");

test("failes for the wrong types", () => {
  expect(() => uppercase([])).toThrow(Error("input must be a string"));
  expect(() => uppercase(2)).toThrow(Error("input must be a string"));
  expect(() => uppercase(null)).toThrow(Error("input must be a string"));
  expect(() => uppercase()).toThrow(Error("input must be a string"));
});

test("correctly processes strings", () => {
  expect(uppercase("test")).toBe("TEST");
  expect(uppercase("tEsT")).toBe("TEST");
  expect(uppercase("TEST")).toBe("TEST");
});
