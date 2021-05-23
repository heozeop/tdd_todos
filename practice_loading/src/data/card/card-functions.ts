import { CardRefinementResultType, ICard } from '.';
import { IImagesNasaCollection } from '../api/images_nasa';
import { IGetRoversCuriocityResponse } from '../api/rover_curiocity/rover_curiocity-types';

export function refineRoverCuriocityPhotos(
  data: IGetRoversCuriocityResponse
): CardRefinementResultType {
  return data.photos.map((photo) => ({
    id: photo.id,
    image: photo.img_src,
    name: photo.rover.name,
    date: photo.earth_date,
  }));
}

export function refineImagesNasaSearch(
  data: IImagesNasaCollection
): CardRefinementResultType {
  if (!data?.collection?.items) {
    return [];
  }

  return data.collection.items
    .map((item) => {
      if (!item.data || !item.links) {
        return null;
      }

      return {
        id: item.data[0].nasa_id,
        image: item.links[0].href,
        name: item.data[0].title,
        date: item.data[0].date_created,
      } as ICard;
    })
    .filter((data) => (data === null ? false : true)) as ICard[];
}
