import asyncWrapper from "../src/index";

test("Resolves with a error as null and data as object", async function() {
    const { data, error } = await asyncWrapper(Promise.resolve({}));
    expect(data).toBeTruthy();
    expect(error).toBeNull();
});

test("Rejects with a data as null and error as object", async function() {
    const { data, error } = await asyncWrapper(Promise.reject({}));
    expect(error).toBeTruthy();
    expect(data).toBeNull();
});

test("Resolve with an array of promises", async function() {
    const { data, error } = await asyncWrapper([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]);
    const expected = [1, 2, 3];
    expect(data).toBeTruthy();
    expect(error).toBeNull();
    expect(data.length).toBeGreaterThan(1);
    expect(data).toEqual(expect.arrayContaining(expected));
});
