export function reverseCodePoints(value: string): string {
  if (typeof value !== 'string') throw new TypeError('Expected text');
  return Array.from(value).reverse().join('');
}
