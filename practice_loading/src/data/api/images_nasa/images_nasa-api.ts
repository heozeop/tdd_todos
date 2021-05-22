import axios from 'axios';
import { IGetImagesNasaCollectionParams } from '.';
import { getQueryParams } from '../../../common/functions';
import { IImagesNasaCollection } from './images_nasa-types';

const BASE_URL = 'https://images-api.nasa.gov';

export async function getImagesNasaSearch(
  params: IGetImagesNasaCollectionParams
): Promise<IImagesNasaCollection> {
  const { data } = await axios.get(
    `${BASE_URL}/search?${getQueryParams({ ...params })}`
  );

  return data;
}
