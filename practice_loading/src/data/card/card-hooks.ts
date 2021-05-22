import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';
import { ICard, ICardHookResponse } from '.';
import { getRoversCuriosityPhotos, IGetRoversCuriocityParams } from '../api';
import { IPagenatedParam } from '../api/api-types';
import { refineRoverCuriocityPhotos } from './card-functions';

const ROVER_CURIOCITY_KEY = 'roverCuriocityKey';

export function useCardRoversCuriocityPhotos(
  params: IGetRoversCuriocityParams
): ICardHookResponse {
  return useInifiniteCardList({
    fetchKey: ROVER_CURIOCITY_KEY,
    fetchParams: params,
    fetchFunction: (params) =>
      getRoversCuriosityPhotos(params).then((res) =>
        refineRoverCuriocityPhotos(res)
      ),
  });
}

interface IUseInfiniteCardListParams<T extends IPagenatedParam> {
  fetchKey: string;
  fetchParams: T;
  fetchFunction: (params: T) => Promise<ICard[]>;
}

export function useInifiniteCardList<T extends IPagenatedParam>(
  params: IUseInfiniteCardListParams<T>
) {
  const { fetchKey, fetchParams, fetchFunction } = params;

  const {
    data,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isSuccess,
  } = useInfiniteQuery<ICard[]>(
    [fetchKey, fetchParams],
    ({ pageParam = fetchParams.page ?? 1 }) => {
      return fetchFunction({ ...fetchParams, page: pageParam });
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
