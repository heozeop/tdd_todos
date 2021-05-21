import { renderHook, act } from '@testing-library/react-hooks';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ICard } from '.';
import { useCardRoversCuriocityPhotos } from './card-hooks';
import React from 'react';

test('should convert NASA data to refined data structure', async () => {
  const queryClient = new QueryClient();
  const wrapper = (props: { children: ReactNode }) => {
    return (
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    );
  };

  const { result, waitFor } = renderHook(
    () => useCardRoversCuriocityPhotos({ sol: 1 }),
    {
      wrapper,
    }
  );

  await waitFor(() => result.current.isSuccess);

  expect(
    result.current.cardList.filter((card): card is ICard => {
      return (card as ICard).id !== undefined;
    }).length
  ).toBe(result.current.cardList.length);
});
