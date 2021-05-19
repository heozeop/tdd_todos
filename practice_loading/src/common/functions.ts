export function getPixelIfNumber(x?: string | number) {
  if (typeof x === 'number') {
    return `${Math.trunc(x)}px`;
  }

  return x;
}
