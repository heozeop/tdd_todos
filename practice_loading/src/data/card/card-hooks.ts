import { useCallback, useMemo } from 'react';
import { useMutation, useQuery } from 'react-query';
import { ICardHookResponse } from '.';
import { DummyData } from '../api';
import {
  IGetRoversCuriocityParams,
  IGetRoversCuriocityResponse,
} from '../api/rover_curiocity/rover_curiocity-types';

const ROVER_CURIOCITY_KEY = 'roverCuriocityKey';

export function useCardRoversCuriocityPhotos(
  params: IGetRoversCuriocityParams
): ICardHookResponse {
  // TODO: change to get data from api

  const { data, isSuccess } = useQuery(ROVER_CURIOCITY_KEY, () => {
    return DummyData.getRoversCuriosityPhotos;
  });

  const cardList = useMemo(() => {
    if (!data) {
      return [];
    }

    return data.photos.map((photo) => ({
      id: photo.id,
      image: photo.img_src,
      name: photo.rover.name,
      date: photo.earth_date,
    }));
  }, [data]);

  return {
    cardList,
    isSuccess,
  };
}
