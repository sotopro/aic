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
