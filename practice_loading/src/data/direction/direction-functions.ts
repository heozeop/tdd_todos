import { EDirections } from '.';

export function isHorizontal(direction: EDirections) {
  return direction === EDirections.LEFT || direction === EDirections.RIGHT;
}
