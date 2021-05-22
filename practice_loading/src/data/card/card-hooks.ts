import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';
import { ICard, ICardHookResponse } from '.';
import {
  getRoversCuriosityPhotos,
  IGetRoversCuriocityParams,
} from '../api';
import { refineRoverCuriocityPhotos } from './card-functions';

const ROVER_CURIOCITY_KEY = 'roverCuriocityKey';

export function useCardRoversCuriocityPhotos(
  params: IGetRoversCuriocityParams
): ICardHookResponse {
  const {
    data,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isSuccess,
  } = useInfiniteQuery<ICard[]>(
    [ROVER_CURIOCITY_KEY, params],
    ({ pageParam = params.page ?? 1 }) => {
      return getRoversCuriosityPhotos({ ...params, page: pageParam }).then(
        (res) => refineRoverCuriocityPhotos(res)
      );
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage && lastPage.length > 0) {
          return allPages.length + 1;
        }
        return null;
      },
    }
  );

  const cardList = useMemo(() => {
    if (!data) {
      return [];
    }

    return data.pages.flat();
  }, [data]);

  return {
    cardList,
    isSuccess,
    canFetchMore: hasNextPage,
    isLoading: isLoading || isFetchingNextPage,
    fetchList: fetchNextPage,
  };
}
