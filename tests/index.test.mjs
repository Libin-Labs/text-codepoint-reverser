import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('reverses ASCII', () => {
  assert.equal(api.reverseCodePoints('abcd'), 'dcba');
});
test('keeps emoji surrogate pair', () => {
  assert.equal(api.reverseCodePoints('A😀B'), 'B😀A');
});
test('returns empty string', () => {
  assert.equal(api.reverseCodePoints(''), '');
});
test('handles one code point', () => {
  assert.equal(api.reverseCodePoints('😀'), '😀');
});
test('reverses combining code points', () => {
  assert.equal(api.reverseCodePoints('é'), '́e');
});
test('rejects non-string input', () => {
  assert.throws(() => api.reverseCodePoints(0), TypeError);
});
