import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';
import { ICardHookResponse } from '.';
import {
  getRoversCuriosityPhotos,
  IGetRoversCuriocityParams,
  IGetRoversCuriocityResponse,
} from '../api';

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
  } = useInfiniteQuery<IGetRoversCuriocityResponse>(
    [ROVER_CURIOCITY_KEY, params],
    ({ pageParam = params.page ?? 1 }) => {
      return getRoversCuriosityPhotos({ ...params, page: pageParam });
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        console.log(lastPage, allPages);
        if (lastPage && lastPage.photos.length > 0) {
          return allPages.length + 1;
        }
        return null;
      },
    }
  );

  const cardList = useMemo(() => {
    console.log(data);
    if (!data) {
      return [];
    }

    return data.pages.flatMap((page) =>
      page.photos.map((photo) => ({
        id: photo.id,
        image: photo.img_src,
        name: photo.rover.name,
        date: photo.earth_date,
      }))
    );
  }, [data]);

  return {
    cardList,
    isSuccess,
    canFetchMore: hasNextPage,
    isLoading: isLoading || isFetchingNextPage,
    fetchList: fetchNextPage,
  };
}
