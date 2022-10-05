import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  # Properties

  type PropertyType {
    zpid: String
    bathrooms: Int
    bedrooms: Int
    longitude: Float
    listingDateTime: Float
    propertyType: String
    latitude: Float
    price: Int
    listingStatus: String
    livingArea: Int
    address: String
    imgSrc: String
    country: String
    currency: String
    daysOnZillow: Int
    hasImage: Boolean
  }

  type Properties {
    props: [PropertyType]
    resultsPerPage: Int
    totalResultCount: Int
    totalPages: Int
  }

  enum PropertiesParamsStatusType {
    ForSale
    ForRent
    RecentlySold
  }

  enum DaysOnSoldInLast {
    ONEDAYS
    SEVENDAYS
    FOURTEENDAYS
    THIRTYDAYS
    NINTYDAYS
    SIXMONTHS
    TWELVEMONTHS
    TWENTYFOURMONTHS
    THIRTYSIXMONTHS
  }

  input PropertiesParams {
    # REQUIRED: Location details, address, county, neighborhood or Zip code.
    location: String!
    page: Int
    # status_type: PropertiesParamsStatusType
    #OPTIONAL: house_type: Property type comma-separated or empty for all types:
    # Multi-family
    # Apartments
    # Houses
    # Manufactured
    # Condos
    # LotsLand
    # Townhomes
    home_type: String!
    #OPTIONAL: sort: For status_type = ForSale OR RecentlySold are available:
    # Homes_for_You
    # Price_High_Low
    # Price_Low_High
    # Newest
    # Bedrooms
    # Bathrooms
    # Square_Feet
    # Lot_Size

    # default Homes_for_You

    # For status_type = ForRent are available:
    # Verified_Source
    # Payment_High_Low
    # Payment_Low_High
    # Newest
    # Bedrooms
    # Bathrooms
    # Square_Feet
    # Lot_Size

    # default Verified_Source
    sort: String
    # OPTIONAL: If status_type = ForSale OR RecentlySold you can filter by min price.
    minPrice: Int
    # OPTIONAL: If status_type = ForSale OR RecentlySold you can filter by max price.
    maxPrice: Int
    # OPTIONAL: If status_type = ForRent you can filter by min rent price.
    rentMinPrice: Int
    # OPTIONAL: If status_type = ForRent you can filter by max rent price.
    rentMaxPrice: Int
    # OPTIONAL: Bathrooms min count
    bathsMin: Int
    # OPTIONAl: Bathrooms max count
    bathsMax: Int
    # OPTIONAL: Bedrooms min count
    bedsMin: Int
    #OPTIONAL: Bedrooms max count
    bedsMax: Int
    # OPTIONAL Square Feet max value.
    sqftMin: Int
    # OPTIONAL: Square Feet max value.
    sqftMax: Int
    # OPTIONAL: Year Built min value.
    buildYearMin: Int
    # OPTIONAL: Year Built max value.
    buildYearMax: Int
    # OPTIONAL: Days on Z. Use with status_type='ForSale' or status_type='ForRent'
    # daysOn: DaysOnSoldInLast
    # OPTIONAL: 'Sold In Last' on Z. Use with status_type='RecentlySold'.
    # soldInLast: DaysOnSoldInLast
    # OPTIONAL: Basement filter. Set it to 1 if needed.
    isBasementFinished: Int
    # OPTIONAL: Basement filter. Set it to 1 if needed.
    isBasementUnfinished: Int
    # OPTIONAL: Pending & Under Contract filter. Set it to 1 if needed.
    isPendingUnderContract: Int
    # OPTIONAL: Coming Soon listings are homes that will soon be on the market.. Set it to 1 if needed.
    isComingSoon: Int
    # OPTIONAL: If set to 1, the results will only include data from the Other Listings tab.
    otherListings: Int
    # OPTIONAL: New Construction filter. Set it to 1 if you only need properties with New Construction status.
    isNewConstruction: Int
    # OPTIONAL: Filter with keywords.
    keywords: String
  }

  # Property

  type ListingProvider {
    enhancedVideoURL: String
    showNoContactInfoMessage: Boolean
    postingGroupName: String
    isZRMSourceText: Boolean
    showLogos: Boolean
    disclaimerText: String
    sourceText: String
    title: String
    postingWebsiteURL: String
    agentLicenseInt: Int
    postingWebsiteLinkText: String
    enhancedDescriptionText: String
    agentName: String
  }

  type Phone {
    prefix: String
    areacode: String
    Int: String
  }

  type ContactRecipients {
    agent_reason: Int
    zpro: String
    recent_sales: Int
    review_count: Int
    display_name: String
    zuid: String
    rating_average: Int
    badge_typ: String
    phone: Phone
    image_url: String
  }

  type AtAGlance {
    factLabel: String
    factValue: String
  }

  type ResoFacts {
    hasAttachedProperty: Boolean
    frontageType: String
    poolFeatures: String
    flooring: [String]
    accessibilityFeatures: String
    hasGarage: Boolean
    hasPetsAllowed: Boolean
    bodyType: String
    topography: String
    landLeaseExpirationDate: String
    hasAdditionalParcels: Boolean
    waterViewYN: String
    atAGlanceFacts: [AtAGlance]!
    offerReviewDate: String
    aboveGradeFinishedArea: String
  }

  type MortgageRates {
    arm5Rate: Float
    fifteenYearFixedRate: Float
    thirtyYearFixedRate: Float
  }

  type Photo {
    url: String
  }

  type Address {
    city: String
    state: String
    streetAddress: String
    zipcode: String
  }

  type NearbyHomes {
    miniCardPhotos: [Photo]
    zpid: Int
    longitude: Float
    address: Address
    price: Int
    homeType: String
    homeStatus: String
    currency: String
    latitude: Float
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
    priceChangeRate: Float
    date: String
    source: String
    postingIsRental: Boolean
    time: Float
    sellerAgent: SellerAgent
    showCountyLink: Boolean
    attributeSource: AttributeSource
    pricePerSquareFoot: Int
    buyerAgent: BuyerAgent
    event: String
    price: Int
  }

  type School {
    link: String
    rating: Int
    totalCount: Int
    distance: Float
    assigned: Boolean
    name: String
    studentsPerTeacher: Int
    isAssigned: Boolean
    size: Int
    level: String
    grades: String
    type: String
  }

  type ListedBy {
    agent_reason: Int
    zpro: Boolean
    recent_sales: String
    review_count: String
    display_name: String
    badge_type: String
    business_name: String
    rating_average: Int
    phone: String
    zuid: String
    image_url: String
  }

  type Property {
    listingProvider: ListingProvider
    propertyTaxRate: Float
    contact_recipients: [ContactRecipients]!
    solarPotential: String
    longitude: Float
    countyFIPS: String
    cityId: Int
    timeOnZillow: String
    url: String
    zestimate: String
    imgSrc: String
    zpid: Int
    zipcode: Int
    livingAreaValue: Int
    zestimateLowPercent: Int
    isListedByOwner: Boolean
    propertyTypeDimension: String
    resoFacts: ResoFacts
    streetAddress: String
    county: String
    timeZone: String
    homeType: String
    livingAreaUnits: String
    livingArea: Int
    bathrooms: Int
    annualHomeownersInsurance: Int
    state: String
    rentZestimate: Int
    yearBuilt: Int
    dateSold: String
    price: Int
    description: String
    mortgageRates: MortgageRates
    homeStatus: String
    latitude: Float
    datePosted: String
    bedrooms: Int
    nearbyHomes: [NearbyHomes]
    monthlyHoaFee: Int
    priceHistory: [PriceHistory]
    schools: [School]!
    address: Address
    city: String
    country: String
    currency: String
    listed_by: ListedBy
  }

  # Property Images and videos
  type PropertyAssets {
    images: [String]!
  }

  # Properties by coordinates
  input PropertiesByCoordinatesParams {
    lat: Float!
    long: Float!
    d: String
    includeSold: String
  }

  type PropertyByCoordinatesProperty {
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

  type PropertyByCoordinates {
    property: PropertyByCoordinatesProperty
  }

  type PropertiesByLocationMetaData {
    city: String
    country: String
    county: String
    lat: Float
    lng: Float
    regionId: String
    regionType: String
    score: Float
    state: String
  }

  # properties by location
  type PropertiesbyLocationProperty {
    display: String
    metaData: PropertiesByLocationMetaData
  }

  type PropertiesByLocation {
    resultType: String!
    results: [PropertiesbyLocationProperty]
  }

  # properties similar for sale
  type PropertySimilarForSale {
    bathrooms: Int
    bedrooms: Int
    miniCardPhotos: [Photo]
    zpid: Int
    longitude: Float
    address: Address
    latitude: Float
    livingArea: Int
    homeType: String
    livingAreaUnits: String
    currency: String
    price: Int
  }

  # properties similar recently sold
  type PropertySimilarRecentlySold {
    dateSold: Int
    bedrooms: Int
    homeStatus: String
    latitude: Float
    miniCardPhotos: [Photo]
    zpid: Int
    longitude: Float
    bathrooms: Int
    address: Address
    livingArea: Int
    livingAreaUnits: String
    homeType: String
    currency: String
    lastSoldPrice: Int
    price: Int
  }

  type Query {
    property(zpid: String!): Property
    properties(params: PropertiesParams): Properties
    property_assets(zpid: String!): PropertyAssets
    properties_by_coordinates(
      params: PropertiesByCoordinatesParams
    ): [PropertyByCoordinates]!
    properties_by_location(q: String!): PropertiesByLocation
    properties_similar_for_sale(zpid: String!): [PropertySimilarForSale]!
    properties_similar_recently_sold(
      zpid: String!
    ): [PropertySimilarRecentlySold]!
  }
`;
