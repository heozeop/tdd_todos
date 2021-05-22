import { IGetRoversCuriocityResponse } from '../api/rover_curiocity/rover_curiocity-types';
export function refineRoverCuriocityPhotos(data: IGetRoversCuriocityResponse) {
  return data.photos.map((photo) => ({
    id: photo.id,
    image: photo.img_src,
    name: photo.rover.name,
    date: photo.earth_date,
  }));
}
