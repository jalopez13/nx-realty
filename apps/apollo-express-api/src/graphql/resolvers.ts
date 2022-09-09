import axios from 'axios';

export interface IGetListings {
  zipcode: number;
  propertyTypeDimension: string;
  streetAddress: string;
  imgSrc: string;
  price: number;
  bedrooms: number;
  homeStatus: number;
  zpid: string;
  bathrooms: number;
  livingArea: number;
  livingAreaUnits: string;
}

export interface IGetListing {
  zpid: number;
}

export const resolvers = {
  Query: {
    getListings: async (_, args: IGetListings) => {
      return await getData(
        args,
        `${process.env.LISTING_API_HOST_URL}/propertyExtendedSearch`
      );
    },
    getListingDetails: async (_, args: IGetListing) => {
      return await getData(
        args,
        `${process.env.LISTING_API_HOST_URL}/property`
      );
    },
    getListingAssets: async (_, args: IGetListing) => {
      return await getData(args, `${process.env.LISTING_API_HOST_URL}/images`);
    },
    getListingByCoordinates: async (_, args: IGetListing) => {
      return await getData(
        args,
        `${process.env.LISTING_API_HOST_URL}/propertyByCoordinates`
      );
    },
  },
};

const getData = async (args, queryPath) => {
  const options = {
    method: 'GET',
    params: {
      ...args,
    },
    headers: {
      'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
      'X-RapidAPI-Host': `${process.env.RAPID_API_HOST}`,
    },
  };

  try {
    const { data } = await axios.get(`${queryPath}`, options);

    if (data.props) {
      return data.props;
    }

    if (data.images) {
      return data.images;
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};
