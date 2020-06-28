/* eslint-env jest */
import asyncWrapper from '../build/index'

test('Resolves with a error as null and data as object', async function () {
  const { data, error } = await asyncWrapper(Promise.resolve({}))
  expect(data).toBeTruthy()
  expect(error).toBeNull()
})

test('Rejects with a data as null and error as object', async function () {
  const { data, error } = await asyncWrapper(Promise.reject(Error()))
  expect(error).toBeTruthy()
  expect(data).toBeNull()
})

test('Resolve with an array of promises', async function () {
  const { data, error } = await asyncWrapper([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
  expect(data).toBeTruthy()
  expect(error).toBeNull()
  expect(data).toHaveLength(3)
  expect(data).toEqual(expect.arrayContaining([1, 2, 3]))
})
