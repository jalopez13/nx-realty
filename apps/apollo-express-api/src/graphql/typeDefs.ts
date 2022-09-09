import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type CardPhotos {
    url: String
  }

  type Address {
    city: String
    state: String
    streetAddress: String
    zipcode: String
  }

  type NearByHomes {
    miniCardPhotos: [CardPhotos]
    zpid: Int
    longitude: Float
    address: Address
    price: Int
    homeType: String
    homeStatus: String
    currency: String
    latitude: Float
  }

  type Photo {
    url: String
  }

  type SellerAgent {
    name: String
    photo: Photo
    profileUrl: String
  }

  type AttributeSource {
    infoString2: String
    infoString3: String
    infoString1: String
  }

  type BuyerAgent {
    name: String
    photo: Photo
    profileUrl: String
  }

  type PriceHistory {
    priceChangeRate: Int
    date: String
    source: String
    postingIsRental: Boolean
    time: Int
    sellerAgent: SellerAgent
    showCountyLink: Boolean
    attributeSource: AttributeSource
    pricePerSquareFoot: Int
    buyerAgent: BuyerAgent
    event: String
    price: Int
  }

  type Schools {
    link: String
    rating: Int
    totalCount: Int
    distance: Float
    name: String
    studentsPerTeacher: Int
    isAssigned: Boolean
    size: Int
    level: String
    grades: String
    type: String
  }

  type Phone {
    prefix: String
    areacode: String
    number: String
  }

  type ListedBy {
    agent_reason: Int
    zpro: Boolean
    recent_sales: Int
    review_count: Int
    display_name: String
    badge_type: String
    business_name: String
    rating_average: Int
    phone: Phone
    zuid: String
    image_url: String
  }

  type ContactRecipient {
    agent_reason: Int
    zpro: String
    recent_sales: Int
    review_count: Int
    display_name: String
    zuid: String
    rating_average: Int
    badge_type: String
    phone: Phone
    image_url: String
  }

  type AtAGlanceFacts {
    factLabel: String
    factValue: String
  }

  type Mortgages {
    arm5Rate: Float
    fifteenYearFixedRate: Float
    thirtyYearFixedRate: Float
  }

  type ResoFacts {
    hasAttachedProperty: Boolean
    flooring: [String]
    foundationDetails: [String]!
    hasGarage: Boolean
    atAGlanceFacts: [AtAGlanceFacts]!
    cityRegion: String
    inclusions: [String]
    hasFireplace: Boolean
    zoningDescription: String
    garageSpaces: Int
    elevationUnits: String
    mainLevelBedrooms: Int
    lotSize: String
    livingArea: String
    listingTerms: String
    associationFee: String
    hasHomeWarranty: Boolean
    bedrooms: Int
    architecturalStyle: String
    structureType: String
    interiorFeatures: [String]!
    lotFeatures: [String]
    roofType: String
    appliances: [String]!
    daysOnZillow: Int
    bathroomsHalf: Int
    canRaiseHorses: Boolean
    communityFeatures: [String]!
    hasOpenParking: Boolean
    yearBuilt: Int
    irrigationWaterRightsYN: Boolean
    bathroomsFull: Int
    subdivisionName: String
    windowFeatures: [String]!
    heating: [String]!
    hasCooling: Boolean
    hoaFee: String
    basementYN: Boolean
    specialListingConditions: String
    taxAnnualAmount: Int
    parking: Int
    cooling: [String]!
    levels: String
    waterView: String
    hasAttachedGarage: Boolean
    bathrooms: Int
    homeType: String
    bathroomsThreeQuarter: Int
    hasSpa: Boolean
    parcelNumber: String
    hasHeating: Boolean
    otherEquipment: [String]
    parkingFeatures: [String]!
    buildingArea: String
    furnished: Boolean
    highSchoolDistrict: String
    propertyCondition: String
    utilities: [String]
    greenEnergyEfficient: [String]
    isNewConstruction: Boolean
    hasLandLease: Boolean
    pricePerSquareFoot: Int
    hasCarport: Boolean
    streetAddress: String
    stateId: Int
    countyId: Int
    timeZone: String
    livingAreaUnits: String
    annualHomeownersInsurance: Int
    state: String
    rentZestimate: Int
    brokerageName: String
    dateSold: String
    price: Int
    pageViewCount: Int
    description: String
    mortgageRates: Mortgages
    homeStatus: String
    latitude: Float
    datePosted: String
    nearbyHomes: [NearByHomes]
    monthlyHoaFee: Int
    priceHistory: [PriceHistory]
    favoriteCount: Int
    schools: [Schools]
    mlsid: String
    address: Address
    city: String
    country: String
    currency: String
    listed_by: ListedBy
  }

  type Property {
    bathrooms: Int
    bedrooms: Int
    zpid: String
    longitude: Float
    address: Address
    latitude: Float
    livingArea: Int
    homeType: String
    homeStatus: String
    imgSrc: String
    price: Int
  }

  type PropertyItem {
    property: Property
  }

  type Listing {
    propertyType: String
    lotAreaValue: Int
    address: String
    imgSrc: String
    price: Int
    bedrooms: Int
    longitude: Float
    latitude: Float
    listingStatus: String
    zpid: String
    daysOnZillow: Int
    bathrooms: Int
    livingArea: Int
    country: String
    currency: String
    lotAreaUnit: String
    hasImage: Boolean
  }

  type ListingDetails {
    zpid: Int
    zipcode: String
    timeOnZillow: String
    imgSrc: String
    homeType: String
    streetAddress: String
    livingAreaUnits: String
    livingArea: Int
    bathrooms: Int
    bedrooms: Int
    annualHomeownersInsurance: Int
    state: String
    rentZestimate: Int
    yearBuilt: Int
    price: Int
    description: String
    homeStatus: String
    datePosted: String
    nearbyHomes: [NearByHomes]
    monthlyHoaFee: Int
    favoriteCount: Int
    schools: [Schools]!
    address: Address
    country: String
    currency: String
    listed_by: ListedBy
    propertyTaxRate: Float
    contact_recipients: ContactRecipient
    longitude: Float
    isListedByOwner: Boolean
    resoFacts: ResoFacts
  }

  type Query {
    getListings(location: String!): [Listing]!
    getListingDetails(zpid: Int!): ListingDetails!
    getListingAssets(zpid: Int!): [String]!
    getListingByCoordinates(
      lat: Float!
      long: Float!
      d: Int
      includeSold: Boolean
    ): [PropertyItem]!
  }
`;

// FIX ME: NEED TO ADD DAYSON AND SOLDINLAST ENUMS
// daysOn: enum
// soldInLast: enum - getListingAssets(zpid: Int!): [String]!
// onMarketDate: Int <- error
