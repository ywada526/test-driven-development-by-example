import { triangle } from './triangle'

describe('when equilateral triangle', () => {
  it('returns 1', () => {
    expect(triangle(3, 3, 3)).toBe(1)
  })
})

describe('when isosceles triangle', () => {
  it('returns 2', () => {
    expect(triangle(3, 3, 4)).toBe(2)
    expect(triangle(3, 4, 3)).toBe(2)
    expect(triangle(4, 3, 3)).toBe(2)
  })
})

describe('when scalene triangle', () => {
  it('returns 3', () => {
    expect(triangle(3, 4, 5)).toBe(3)
  })
})

describe('when not triangle', () => {
  it('raise error', () => {
    expect(() => triangle(3, 3, 6)).toThrow('not triangle')
    expect(() => triangle(3, 3, 0)).toThrow('not triangle')
    expect(() => triangle(3, 3, -1)).toThrow('not triangle')
  })
})
