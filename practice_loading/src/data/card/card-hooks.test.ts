import { renderHook, act } from '@testing-library/react-hooks';
import { ICard } from '.';
import { useCardRoversCuriocityPhotos } from './card-hooks';

test('should convert NASA data to refined data structure', () => {
  const { result } = renderHook(() => useCardRoversCuriocityPhotos());

  act(() => {
    result.current.cardList;
  });

  expect(
    result.current.cardList.filter((card): card is ICard => {
      return (card as ICard).id !== undefined;
    }).length
  ).toBe(result.current.cardList.length);
});
