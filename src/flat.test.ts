import ExtIter from './iter'
import { expect, test } from 'vitest'
const flat = (iter: Iterable<unknown>): Iterable<unknown> =>
  // @ts-expect-error iter
  Array.from(new ExtIter(iter).flat().iter)

test('flat([])', () => expect(flat([])).toStrictEqual([]))
test('flat(["hello"])', () => expect(flat(['hello'])).toStrictEqual(['hello']))
test("flat('hello', ['flat', 'world')", () =>
  expect(flat(['hello', ['flat', 'world']])).toStrictEqual([
    'hello',
    'flat',
    'world',
  ]))

test("flat(['hello', ['flat', 'world'], 'extra'])", () =>
  expect(flat(['hello', ['flat', 'world'], 'extra'])).toStrictEqual([
    'hello',
    'flat',
    'world',
    'extra',
  ]))
