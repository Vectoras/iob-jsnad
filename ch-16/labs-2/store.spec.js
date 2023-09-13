const store = require("./store");

test("throws for illegal inputs", (next) => {
  expect(() => {
    store().toThrow(Error("input must be a buffer"));
  });

  expect(() => {
    store("").toThrow(Error("input must be a buffer"));
  });

  expect(() => {
    store(0).toThrow(Error("input must be a buffer"));
  });

  expect(() => {
    store([]).toThrow(Error("input must be a buffer"));
  });

  expect(() => {
    store(null).toThrow(Error("input must be a buffer"));
  });

  next();
});

test("works for correct input", (next) => {
  store(Buffer.alloc(1), (err, result) => {
    expect(err).toBe(null);
    expect(result.id.length).toBe(4);
  });

  next();
});
