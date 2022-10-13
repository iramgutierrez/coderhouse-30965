import {
  assertEquals,
  assertStrictEquals
} from 'https://deno.land/std@0.159.0/testing/asserts.ts'


Deno.test('example', (): void => {
  assertEquals('world', 'world')
  assertEquals({ hello: 'world'}, { hello: 'world' })
})

Deno.test('isStrictlyEqual', (): void => {
  const a = {}
  const b = a
  assertStrictEquals(a, b)
})

Deno.test('isNotStrictlyEqual', (): void => {
  const a = {}
  const b = {}
  assertStrictEquals(a, b)
})