export enum ROUTES {
  HOME = 'Home',
  DETAILS = 'Details',
}

export const URLS_API = {
  base: 'https://api.artic.edu/api',
  version: 'v1',
  artworks: 'artworks',
  paginate: {
    page: 1,
    limit: 10,
  },
};

export const ARTWORKS_API = `${URLS_API.base}/${URLS_API.version}/${URLS_API.artworks}`;

export const IMAGE_URL = 'https://www.artic.edu/iiif/2/';
export const IMAGE_URL_PARAMS = '/full/843,/0/default.jpg';
