import { fibonacci } from './fibonacci'

describe('fibonacci', () => {
  const cases = [
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [8, 21],
  ]
  cases.forEach((c) => {
    describe(`when ${c[0]} is given`, () => {
      it(`returns ${c[1]}`, () => {
        expect(fibonacci(c[0])).toBe(c[1])
      })
    })
  })
})
