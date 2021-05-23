import axios from 'axios';
import { IGetRoversCuriocityParams } from '.';
import { IGetRoversCuriocityResponse } from './rover_curiocity-types';
import { getQueryParams } from '../../../common/functions';

const BASE_URL =
  'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';
const API_KEY = 'DEMO_KEY';

export async function getRoversCuriosityPhotos(
  params?: IGetRoversCuriocityParams
): Promise<IGetRoversCuriocityResponse> {
  const { data } = await axios.get(
    `${BASE_URL}?${getQueryParams({ ...params, api_key: API_KEY })}`
  );
  return data;
}
