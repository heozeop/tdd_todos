import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';
import { ICard, ICardHookResponse } from '.';
import { getRoversCuriosityPhotos, IGetRoversCuriocityParams } from '../api';
import { IPagenatedParam } from '../api/api-types';
import {
  getImagesNasaSearch,
  IGetImagesNasaCollectionParams,
} from '../api/images_nasa';
import {
  refineRoverCuriocityPhotos,
  refineImagesNasaSearch,
} from './card-functions';

const ROVER_CURIOCITY_KEY = 'roverCuriocityKey';
const NASA_IMAGES_KEY = 'nasaImagesKey';

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

export function useNasaImagesSearch(params: IGetImagesNasaCollectionParams) {
  return useInifiniteCardList({
    fetchKey: NASA_IMAGES_KEY,
    fetchParams: params,
    fetchFunction: (params) =>
      getImagesNasaSearch(params).then((res) => refineImagesNasaSearch(res)),
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
    hasNextPage = false,
    isFetchingNextPage,
    fetchNextPage,
    isSuccess,
  } = useInfiniteQuery<ICard[]>(
    [fetchKey, fetchParams],
    ({ pageParam = fetchParams.page ?? 1 }) => {
      if (pageParam === null) {
        return [];
      }
      return fetchFunction({ ...fetchParams, page: pageParam });
    },
    {
      // 다음 페이지를 받는 방법이 고정적이다.
      // 외부에서 주입할 수 있도록 infinite query의 response 타입을
      // 단순 ICard[]에서 nextPage/prevPage를 가질 수 있는 데이터로 바꿀 필요가 있다.
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
