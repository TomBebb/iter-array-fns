import { expect } from 'vitest'
import { test } from 'vitest'

function isBiggerThan10(element) {
  return element > 10
}

test('multi false', () =>
  expect([2, 5, 8, 1, 4].some(isBiggerThan10)).eq(false))
test('multi true', () => expect([12, 5, 8, 1, 4].some(isBiggerThan10)).eq(true))
