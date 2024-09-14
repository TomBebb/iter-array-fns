import { test } from 'vitest'
import map from './map'
import { expect } from 'vitest'

test('map.empty', () => {
  const res = [...map([], (v) => v)]
  expect(res.length).eq(0)
})
