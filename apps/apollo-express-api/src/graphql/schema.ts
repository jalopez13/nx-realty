import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Listing {
    propertyType: String!
    address: String!
    imgSrc: String!
    price: Int!
    bedrooms: Int!
    listingStatus: String!
    zpid: String!
    daysOnZillow: Int!
    bathrooms: Int!
    livingArea: Int!
    country: String!
    currency: String!
    lotAreaUnit: String!
    hasImage: Boolean!
  }

  # Queries
  type Query {
    getListings: [Listing]!
  }

  # Mutations

  type Mutations {
    # ...
  }
`;
