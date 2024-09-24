import rawFlat from './flat'
import { expect, test } from 'vitest'

function flat<T>(iter: Iterable<Iterable<T>>): T[] {
  return Array.from(rawFlat<T>(iter))
}

test('flat([])', () => expect(flat([])).toStrictEqual([]))
test('flat(["hello"])', () =>
  expect(flat([['hello']])).toStrictEqual(['hello']))
test("flat('hello', ['flat', 'world')", () =>
  expect(flat([['hello'], ['flat', 'world']])).toStrictEqual([
    'hello',
    'flat',
    'world',
  ]))

test("flat([['hello'], ['flat', 'world'], ['extra']])", () =>
  expect(flat([['hello'], ['flat', 'world'], ['extra']])).toStrictEqual([
    'hello',
    'flat',
    'world',
    'extra',
  ]))
