const store = require("./store");

test("throws errors", async () => {
  await expect(store("1")).rejects.toStrictEqual(Error("input must be a buffer"));

  await expect(store(1)).rejects.toStrictEqual(Error("input must be a buffer"));

  await expect(store(null)).rejects.toStrictEqual(Error("input must be a buffer"));

  await expect(store({})).rejects.toStrictEqual(Error("input must be a buffer"));
});

test("returns correct data", async () => {
  const r1 = await store(Buffer.alloc(1));
  expect(r1).toEqual(expect.objectContaining({ id: expect.any(String) }));
  expect(r1.id.length).toEqual(4);
});
