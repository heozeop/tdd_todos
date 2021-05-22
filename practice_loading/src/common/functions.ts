export function getPixelIfNumber(x?: string | number) {
  if (typeof x === 'number') {
    return `${Math.trunc(x)}px`;
  }

  return x;
}

export function getQueryParams(x?: { [key: string]: any }) {
  if (!x) {
    return '';
  }

  return Object.entries(x)
    .map(([key, value]) => {
      return `${key}=${value}`;
    })
    .join('&');
}
