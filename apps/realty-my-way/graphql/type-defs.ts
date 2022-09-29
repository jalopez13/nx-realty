import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  # Properties

  type PropertiesType {
    bathrooms: Int
    listingDateTime: Float
    propertyType: String
    latitude: Float
    price: Int
    listingStatus: String
    zpid: String
    longitude: Float
    livingArea: Int
    address: String
    bedrooms: Int
    imgSrc: String
    country: String
    currency: String
    daysOnZillow: Int
    hasImage: Boolean
  }

  enum PropertiesParamsStatusType {
    ForSale
    ForRent
    RecentlySold
  }

  input PropertiesParams {
    location: String!
    home_type: String!
    page: Int
    status_type: PropertiesParamsStatusType
  }

  type PropertiesResults {
    props: [PropertiesType]!
    resultsPerPage: Int!
    totalResultCount: Int!
    totalPages: Int!
  }

  # Property

  type PropertyResults {
    zpid: Int!
    streetAddress: String!
    city: String!
    state: String!
    zipcode: String!
    country: String!
    currency: String!
    imgSrc: String!
    propertyTaxRate: Float!
    latitude: Float!
    longitude: Float!
    timeOnZillow: String!
    livingAreaValue: Int!
    isListedByOwner: Boolean!
    propertyTypeDimension: String!
    timeZone: String!
    homeType: String!
    livingAreaUnits: String!
    livingArea: Int!
    bathrooms: Int!
    bedrooms: Int!
    annualHomeownersInsurance: Int!
    rentZestimate: Int!
    yearBuilt: Int!
    dateSold: String!
    price: Int!
    description: String!
    homeStatus: String!
    datePosted: String!
    monthlyHoaFee: Int!
  }

  # Property Images and videos
  type PropertyAssetsResults {
    images: [String]!
  }

  type Query {
    properties(params: PropertiesParams): PropertiesResults
    property(zpid: String!): PropertyResults
    property_assets(zpid: String!): PropertyAssetsResults
  }
`;
