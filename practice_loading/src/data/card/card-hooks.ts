import { useMemo } from 'react';
import { ICardHookResponse } from '.';
import { DummyData } from '../api';
import { IGetRoversCuriocityParams } from '../api/rover_curiocity/rover_curiocity-types';

export function useCardRoversCuriocityPhotos(
  params: IGetRoversCuriocityParams
): ICardHookResponse {
  // TODO: change to get data from api
  const data = DummyData.getRoversCuriosityPhotos;
  const cardList = useMemo(() => {
    return data.photos.map((photo) => ({
      id: photo.id,
      image: photo.img_src,
      name: photo.rover.name,
      date: photo.earth_date,
    }));
  }, [params, data]);

  return {
    cardList,
  };
}
