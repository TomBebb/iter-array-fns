import { expect, test } from 'vitest'
import ExtIter from './iter'

test('map.empty', () => {
  const iter = new ExtIter([]).map((v) => v != null)
  expect(iter.count()).eq(0)
})
