import { IPagenatedParam } from '../api-types';

export const API_KEY = 'DEMO_KEY';

export interface IRoversCuriocityPhoto {
  id: number;
  sol: number;
  camera: IRoversCuriocityCamera;
  img_src: string;
  earth_date: string;
  rover: IRoversCuriocityRover;
}

interface IRoversCuriocityCamera {
  id: 26;
  name: 'NAVCAM';
  rover_id: 5;
  full_name: 'Navigation Camera';
}

interface IRoversCuriocityRover {
  id: 5;
  name: 'Curiosity';
  landing_date: '2012-08-06';
  launch_date: '2011-11-26';
  status: 'active';
}

export interface IGetRoversCuriocityParams extends IPagenatedParam {
  sol: number;
}

export interface IGetRoversCuriocityResponse {
  photos: IRoversCuriocityPhoto[];
}
