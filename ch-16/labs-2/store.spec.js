const store = require("./store");

test("throws errors", (done) => {
  store(1, (err, result) => {
    expect(err).toStrictEqual(Error("input must be a buffer"));
  });

  store("1", (err, result) => {
    expect(err).toStrictEqual(Error("input must be a buffer"));
  });

  store(null, (err, result) => {
    expect(err).toStrictEqual(Error("input must be a buffer"));
  });

  store({}, (err, result) => {
    expect(err).toStrictEqual(Error("input must be a buffer"));
  });

  done();
});

test("return correct data", (done) => {
  store(Buffer.alloc(1), (err, result) => {
    expect(err).toBe(null);
    expect(result.id.length).toEqual(4);
  });

  done();
});
