export interface IGetImagesNasaCollectionParams {
  q?: string;
  media_type?: 'image' | 'audio' | 'video';
  page?: number;
  title?: string;
}

export interface IImagesNasaCollection {
  collection?: {
    href?: string;
    metadata?: {
      total_hits?: number;
    };
    version?: string;
    links?: IImagesNasaLink[];
    items?: IImagesNasaItem[];
  };
}

interface IImagesNasaLink {
  href?: string;
  rel?: 'next' | 'prev';
  prompt?: string;
}

interface IImagesNasaItem {
  data?: IImagesNasaItemsData[];
  links?: IImagesNasaItemsLink[];
}

interface IImagesNasaItemsData {
  keywords?: string[];
  description?: string;
  location?: string;
  photographer?: string;
  title?: string;
  nasa_id?: string;
  center?: string;
  media_type?: string;
  date_created?: string;
  album?: string[];
}

interface IImagesNasaItemsLink {
  href?: string;
  rel?: string;
  render?: string;
}
