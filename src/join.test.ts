import ExtIter from './iter'
import { expect, test } from 'vitest'
const join = (iter: Iterable<unknown>, sep?: string): string =>
  new ExtIter(iter).join(sep)

test('empty iter, empty sep', () => expect(join([], '')).eq(''))
test('empty iter, basic sep', () => expect(join([], 'a')).eq(''))
test('single iter, empty sep', () => expect(join(['hello'], '')).eq('hello'))
test('single iter, basic sep', () => expect(join(['hello'], 'a')).eq('hello'))

test('multi iter, empty sep', () =>
  expect(join(['hello', 'world'], '')).eq('helloworld'))
test('multi iter, basic sep', () =>
  expect(join(['hello', 'world'], ' ')).eq('hello world'))
