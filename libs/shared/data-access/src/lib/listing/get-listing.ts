import Axios from './axios-listing';

export const GetListing = (zpid: number) => Axios({ zpid });
