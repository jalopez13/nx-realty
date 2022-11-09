import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type AtAGlance = {
  __typename?: 'AtAGlance';
  factLabel?: Maybe<Scalars['String']>;
  factValue?: Maybe<Scalars['String']>;
};

export type AttributeSource = {
  __typename?: 'AttributeSource';
  infoString1?: Maybe<Scalars['String']>;
  infoString2?: Maybe<Scalars['String']>;
  infoString3?: Maybe<Scalars['String']>;
};

export type BuyerAgent = {
  __typename?: 'BuyerAgent';
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Photo>;
  profileUrl?: Maybe<Scalars['String']>;
};

export type ContactRecipients = {
  __typename?: 'ContactRecipients';
  agent_reason?: Maybe<Scalars['Int']>;
  badge_typ?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  phone?: Maybe<Phone>;
  rating_average?: Maybe<Scalars['Int']>;
  recent_sales?: Maybe<Scalars['Int']>;
  review_count?: Maybe<Scalars['Int']>;
  zpro?: Maybe<Scalars['String']>;
  zuid?: Maybe<Scalars['String']>;
};

export enum DaysOnSoldInLast {
  Fourteendays = 'FOURTEENDAYS',
  Nintydays = 'NINTYDAYS',
  Onedays = 'ONEDAYS',
  Sevendays = 'SEVENDAYS',
  Sixmonths = 'SIXMONTHS',
  Thirtydays = 'THIRTYDAYS',
  Thirtysixmonths = 'THIRTYSIXMONTHS',
  Twelvemonths = 'TWELVEMONTHS',
  Twentyfourmonths = 'TWENTYFOURMONTHS'
}

export type ListedBy = {
  __typename?: 'ListedBy';
  agent_reason?: Maybe<Scalars['Int']>;
  badge_type?: Maybe<Scalars['String']>;
  business_name?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  rating_average?: Maybe<Scalars['Int']>;
  recent_sales?: Maybe<Scalars['String']>;
  review_count?: Maybe<Scalars['String']>;
  zpro?: Maybe<Scalars['Boolean']>;
  zuid?: Maybe<Scalars['String']>;
};

export type ListingProvider = {
  __typename?: 'ListingProvider';
  agentLicenseInt?: Maybe<Scalars['Int']>;
  agentName?: Maybe<Scalars['String']>;
  disclaimerText?: Maybe<Scalars['String']>;
  enhancedDescriptionText?: Maybe<Scalars['String']>;
  enhancedVideoURL?: Maybe<Scalars['String']>;
  isZRMSourceText?: Maybe<Scalars['Boolean']>;
  postingGroupName?: Maybe<Scalars['String']>;
  postingWebsiteLinkText?: Maybe<Scalars['String']>;
  postingWebsiteURL?: Maybe<Scalars['String']>;
  showLogos?: Maybe<Scalars['Boolean']>;
  showNoContactInfoMessage?: Maybe<Scalars['Boolean']>;
  sourceText?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type MortgageRates = {
  __typename?: 'MortgageRates';
  arm5Rate?: Maybe<Scalars['Float']>;
  fifteenYearFixedRate?: Maybe<Scalars['Float']>;
  thirtyYearFixedRate?: Maybe<Scalars['Float']>;
};

export type NearbyHomes = {
  __typename?: 'NearbyHomes';
  address?: Maybe<Address>;
  currency?: Maybe<Scalars['String']>;
  homeStatus?: Maybe<Scalars['String']>;
  homeType?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  miniCardPhotos?: Maybe<Array<Maybe<Photo>>>;
  price?: Maybe<Scalars['Int']>;
  zpid?: Maybe<Scalars['Int']>;
};

export type Phone = {
  __typename?: 'Phone';
  Int?: Maybe<Scalars['String']>;
  areacode?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
};

export type Photo = {
  __typename?: 'Photo';
  url?: Maybe<Scalars['String']>;
};

export type PriceHistory = {
  __typename?: 'PriceHistory';
  attributeSource?: Maybe<AttributeSource>;
  buyerAgent?: Maybe<BuyerAgent>;
  date?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  postingIsRental?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Int']>;
  priceChangeRate?: Maybe<Scalars['Float']>;
  pricePerSquareFoot?: Maybe<Scalars['Int']>;
  sellerAgent?: Maybe<SellerAgent>;
  showCountyLink?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['Float']>;
};

export type Properties = {
  __typename?: 'Properties';
  props?: Maybe<Array<Maybe<PropertyType>>>;
  resultsPerPage?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
  totalResultCount?: Maybe<Scalars['Int']>;
};

export type PropertiesByCoordinatesParams = {
  d?: InputMaybe<Scalars['String']>;
  includeSold?: InputMaybe<Scalars['String']>;
  lat: Scalars['Float'];
  long: Scalars['Float'];
};

export type PropertiesByLocation = {
  __typename?: 'PropertiesByLocation';
  resultType: Scalars['String'];
  results?: Maybe<Array<Maybe<PropertiesbyLocationProperty>>>;
};

export type PropertiesByLocationMetaData = {
  __typename?: 'PropertiesByLocationMetaData';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  regionId?: Maybe<Scalars['String']>;
  regionType?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['String']>;
};

export type PropertiesParams = {
  bathsMax?: InputMaybe<Scalars['Int']>;
  bathsMin?: InputMaybe<Scalars['Int']>;
  bedsMax?: InputMaybe<Scalars['Int']>;
  bedsMin?: InputMaybe<Scalars['Int']>;
  buildYearMax?: InputMaybe<Scalars['Int']>;
  buildYearMin?: InputMaybe<Scalars['Int']>;
  home_type: Scalars['String'];
  isBasementFinished?: InputMaybe<Scalars['Int']>;
  isBasementUnfinished?: InputMaybe<Scalars['Int']>;
  isComingSoon?: InputMaybe<Scalars['Int']>;
  isNewConstruction?: InputMaybe<Scalars['Int']>;
  isPendingUnderContract?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
  location: Scalars['String'];
  maxPrice?: InputMaybe<Scalars['Int']>;
  minPrice?: InputMaybe<Scalars['Int']>;
  otherListings?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  rentMaxPrice?: InputMaybe<Scalars['Int']>;
  rentMinPrice?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  sqftMax?: InputMaybe<Scalars['Int']>;
  sqftMin?: InputMaybe<Scalars['Int']>;
};

export enum PropertiesParamsStatusType {
  ForRent = 'ForRent',
  ForSale = 'ForSale',
  RecentlySold = 'RecentlySold'
}

export type PropertiesbyLocationProperty = {
  __typename?: 'PropertiesbyLocationProperty';
  display?: Maybe<Scalars['String']>;
  metaData?: Maybe<PropertiesByLocationMetaData>;
};

export type Property = {
  __typename?: 'Property';
  address?: Maybe<Address>;
  annualHomeownersInsurance?: Maybe<Scalars['Int']>;
  bathrooms?: Maybe<Scalars['Int']>;
  bedrooms?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['Int']>;
  contact_recipients: Array<Maybe<ContactRecipients>>;
  country?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  countyFIPS?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  datePosted?: Maybe<Scalars['String']>;
  dateSold?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  homeStatus?: Maybe<Scalars['String']>;
  homeType?: Maybe<Scalars['String']>;
  imgSrc?: Maybe<Scalars['String']>;
  isListedByOwner?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['Float']>;
  listed_by?: Maybe<ListedBy>;
  listingProvider?: Maybe<ListingProvider>;
  livingArea?: Maybe<Scalars['Int']>;
  livingAreaUnits?: Maybe<Scalars['String']>;
  livingAreaValue?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Float']>;
  monthlyHoaFee?: Maybe<Scalars['Int']>;
  mortgageRates?: Maybe<MortgageRates>;
  nearbyHomes?: Maybe<Array<Maybe<NearbyHomes>>>;
  price?: Maybe<Scalars['Int']>;
  priceHistory?: Maybe<Array<Maybe<PriceHistory>>>;
  propertyTaxRate?: Maybe<Scalars['Float']>;
  propertyTypeDimension?: Maybe<Scalars['String']>;
  rentZestimate?: Maybe<Scalars['Int']>;
  resoFacts?: Maybe<ResoFacts>;
  schools: Array<Maybe<School>>;
  solarPotential?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  timeOnZillow?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  yearBuilt?: Maybe<Scalars['Int']>;
  zestimate?: Maybe<Scalars['String']>;
  zestimateLowPercent?: Maybe<Scalars['Int']>;
  zipcode?: Maybe<Scalars['Int']>;
  zpid?: Maybe<Scalars['Int']>;
};

export type PropertyAssets = {
  __typename?: 'PropertyAssets';
  images: Array<Maybe<Scalars['String']>>;
};

export type PropertyByCoordinates = {
  __typename?: 'PropertyByCoordinates';
  property?: Maybe<PropertyByCoordinatesProperty>;
};

export type PropertyByCoordinatesProperty = {
  __typename?: 'PropertyByCoordinatesProperty';
  address?: Maybe<Address>;
  bathrooms?: Maybe<Scalars['Int']>;
  bedrooms?: Maybe<Scalars['Int']>;
  homeStatus?: Maybe<Scalars['String']>;
  homeType?: Maybe<Scalars['String']>;
  imgSrc?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  livingArea?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Int']>;
  zpid?: Maybe<Scalars['String']>;
};

export type PropertySimilarForSale = {
  __typename?: 'PropertySimilarForSale';
  address?: Maybe<Address>;
  bathrooms?: Maybe<Scalars['Int']>;
  bedrooms?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  homeType?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  livingArea?: Maybe<Scalars['Int']>;
  livingAreaUnits?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  miniCardPhotos?: Maybe<Array<Maybe<Photo>>>;
  price?: Maybe<Scalars['Int']>;
  zpid?: Maybe<Scalars['Int']>;
};

export type PropertySimilarRecentlySold = {
  __typename?: 'PropertySimilarRecentlySold';
  address?: Maybe<Address>;
  bathrooms?: Maybe<Scalars['Int']>;
  bedrooms?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  dateSold?: Maybe<Scalars['Int']>;
  homeStatus?: Maybe<Scalars['String']>;
  homeType?: Maybe<Scalars['String']>;
  lastSoldPrice?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Float']>;
  livingArea?: Maybe<Scalars['Int']>;
  livingAreaUnits?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  miniCardPhotos?: Maybe<Array<Maybe<Photo>>>;
  price?: Maybe<Scalars['Int']>;
  zpid?: Maybe<Scalars['Int']>;
};

export type PropertyType = {
  __typename?: 'PropertyType';
  address?: Maybe<Scalars['String']>;
  bathrooms?: Maybe<Scalars['Int']>;
  bedrooms?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  daysOnZillow?: Maybe<Scalars['Int']>;
  hasImage?: Maybe<Scalars['Boolean']>;
  imgSrc?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  listingDateTime?: Maybe<Scalars['Float']>;
  listingStatus?: Maybe<Scalars['String']>;
  livingArea?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Int']>;
  propertyType?: Maybe<Scalars['String']>;
  zpid?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  properties?: Maybe<Properties>;
  properties_by_coordinates: Array<Maybe<PropertyByCoordinates>>;
  properties_by_location?: Maybe<PropertiesByLocation>;
  properties_similar_for_sale: Array<Maybe<PropertySimilarForSale>>;
  properties_similar_recently_sold: Array<Maybe<PropertySimilarRecentlySold>>;
  property?: Maybe<Property>;
  property_assets?: Maybe<PropertyAssets>;
};


export type QueryPropertiesArgs = {
  params?: InputMaybe<PropertiesParams>;
};


export type QueryProperties_By_CoordinatesArgs = {
  params?: InputMaybe<PropertiesByCoordinatesParams>;
};


export type QueryProperties_By_LocationArgs = {
  q: Scalars['String'];
};


export type QueryProperties_Similar_For_SaleArgs = {
  zpid: Scalars['String'];
};


export type QueryProperties_Similar_Recently_SoldArgs = {
  zpid: Scalars['String'];
};


export type QueryPropertyArgs = {
  zpid: Scalars['String'];
};


export type QueryProperty_AssetsArgs = {
  zpid: Scalars['String'];
};

export type ResoFacts = {
  __typename?: 'ResoFacts';
  aboveGradeFinishedArea?: Maybe<Scalars['String']>;
  accessibilityFeatures?: Maybe<Scalars['String']>;
  atAGlanceFacts: Array<Maybe<AtAGlance>>;
  bodyType?: Maybe<Scalars['String']>;
  flooring?: Maybe<Array<Maybe<Scalars['String']>>>;
  frontageType?: Maybe<Scalars['String']>;
  hasAdditionalParcels?: Maybe<Scalars['Boolean']>;
  hasAttachedProperty?: Maybe<Scalars['Boolean']>;
  hasGarage?: Maybe<Scalars['Boolean']>;
  hasPetsAllowed?: Maybe<Scalars['Boolean']>;
  landLeaseExpirationDate?: Maybe<Scalars['String']>;
  offerReviewDate?: Maybe<Scalars['String']>;
  poolFeatures?: Maybe<Scalars['String']>;
  topography?: Maybe<Scalars['String']>;
  waterViewYN?: Maybe<Scalars['String']>;
};

export type School = {
  __typename?: 'School';
  assigned?: Maybe<Scalars['Boolean']>;
  distance?: Maybe<Scalars['Float']>;
  grades?: Maybe<Scalars['String']>;
  isAssigned?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  studentsPerTeacher?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type SellerAgent = {
  __typename?: 'SellerAgent';
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Photo>;
  profileUrl?: Maybe<Scalars['String']>;
};

export type Properties_By_CoordinatesQueryVariables = Exact<{
  params?: InputMaybe<PropertiesByCoordinatesParams>;
}>;


export type Properties_By_CoordinatesQuery = { __typename?: 'Query', properties_by_coordinates: Array<{ __typename?: 'PropertyByCoordinates', property?: { __typename?: 'PropertyByCoordinatesProperty', bathrooms?: number | null, bedrooms?: number | null, zpid?: string | null, longitude?: number | null, latitude?: number | null, livingArea?: number | null, homeType?: string | null, homeStatus?: string | null, imgSrc?: string | null, price?: number | null, address?: { __typename?: 'Address', city?: string | null, state?: string | null, streetAddress?: string | null, zipcode?: string | null } | null } | null } | null> };

export type Properties_By_LocationQueryVariables = Exact<{
  q: Scalars['String'];
}>;


export type Properties_By_LocationQuery = { __typename?: 'Query', properties_by_location?: { __typename?: 'PropertiesByLocation', resultType: string, results?: Array<{ __typename?: 'PropertiesbyLocationProperty', display?: string | null, metaData?: { __typename?: 'PropertiesByLocationMetaData', city?: string | null, country?: string | null, county?: string | null, lat?: number | null, lng?: number | null, regionId?: string | null, regionType?: string | null, score?: number | null, state?: string | null } | null } | null> | null } | null };

export type Properties_Similar_For_SaleQueryVariables = Exact<{
  zpid: Scalars['String'];
}>;


export type Properties_Similar_For_SaleQuery = { __typename?: 'Query', properties_similar_for_sale: Array<{ __typename?: 'PropertySimilarForSale', bathrooms?: number | null, bedrooms?: number | null, zpid?: number | null, longitude?: number | null, latitude?: number | null, livingArea?: number | null, homeType?: string | null, livingAreaUnits?: string | null, currency?: string | null, price?: number | null, miniCardPhotos?: Array<{ __typename?: 'Photo', url?: string | null } | null> | null, address?: { __typename?: 'Address', city?: string | null, state?: string | null, streetAddress?: string | null, zipcode?: string | null } | null } | null> };

export type Properties_Similar_Recently_SoldQueryVariables = Exact<{
  zpid: Scalars['String'];
}>;


export type Properties_Similar_Recently_SoldQuery = { __typename?: 'Query', properties_similar_recently_sold: Array<{ __typename?: 'PropertySimilarRecentlySold', dateSold?: number | null, bedrooms?: number | null, homeStatus?: string | null, latitude?: number | null, zpid?: number | null, longitude?: number | null, bathrooms?: number | null, livingArea?: number | null, livingAreaUnits?: string | null, homeType?: string | null, currency?: string | null, lastSoldPrice?: number | null, price?: number | null, miniCardPhotos?: Array<{ __typename?: 'Photo', url?: string | null } | null> | null, address?: { __typename?: 'Address', city?: string | null, state?: string | null, streetAddress?: string | null, zipcode?: string | null } | null } | null> };

export type PropertiesQueryVariables = Exact<{
  params?: InputMaybe<PropertiesParams>;
}>;


export type PropertiesQuery = { __typename?: 'Query', properties?: { __typename?: 'Properties', resultsPerPage?: number | null, totalResultCount?: number | null, totalPages?: number | null, props?: Array<{ __typename?: 'PropertyType', bathrooms?: number | null, listingDateTime?: number | null, propertyType?: string | null, latitude?: number | null, price?: number | null, listingStatus?: string | null, zpid?: string | null, longitude?: number | null, livingArea?: number | null, address?: string | null, bedrooms?: number | null, imgSrc?: string | null, country?: string | null, currency?: string | null, daysOnZillow?: number | null, hasImage?: boolean | null } | null> | null } | null };

export type Property_AssetsQueryVariables = Exact<{
  zpid: Scalars['String'];
}>;


export type Property_AssetsQuery = { __typename?: 'Query', property_assets?: { __typename?: 'PropertyAssets', images: Array<string | null> } | null };

export type PropertyQueryVariables = Exact<{
  zpid: Scalars['String'];
}>;


export type PropertyQuery = { __typename?: 'Query', property?: { __typename?: 'Property', propertyTaxRate?: number | null, solarPotential?: string | null, longitude?: number | null, countyFIPS?: string | null, cityId?: number | null, timeOnZillow?: string | null, url?: string | null, zestimate?: string | null, imgSrc?: string | null, zpid?: number | null, zipcode?: number | null, livingAreaValue?: number | null, zestimateLowPercent?: number | null, isListedByOwner?: boolean | null, propertyTypeDimension?: string | null, streetAddress?: string | null, county?: string | null, timeZone?: string | null, homeType?: string | null, livingAreaUnits?: string | null, livingArea?: number | null, bathrooms?: number | null, annualHomeownersInsurance?: number | null, state?: string | null, rentZestimate?: number | null, yearBuilt?: number | null, dateSold?: string | null, price?: number | null, description?: string | null, homeStatus?: string | null, latitude?: number | null, datePosted?: string | null, bedrooms?: number | null, monthlyHoaFee?: number | null, city?: string | null, country?: string | null, currency?: string | null, listingProvider?: { __typename?: 'ListingProvider', enhancedVideoURL?: string | null, showNoContactInfoMessage?: boolean | null, postingGroupName?: string | null, isZRMSourceText?: boolean | null, showLogos?: boolean | null, disclaimerText?: string | null, sourceText?: string | null, title?: string | null, postingWebsiteURL?: string | null, agentLicenseInt?: number | null, postingWebsiteLinkText?: string | null, enhancedDescriptionText?: string | null, agentName?: string | null } | null, contact_recipients: Array<{ __typename?: 'ContactRecipients', agent_reason?: number | null, zpro?: string | null, recent_sales?: number | null, review_count?: number | null, display_name?: string | null, zuid?: string | null, rating_average?: number | null, badge_typ?: string | null, image_url?: string | null, phone?: { __typename?: 'Phone', prefix?: string | null, areacode?: string | null, Int?: string | null } | null } | null>, resoFacts?: { __typename?: 'ResoFacts', hasAttachedProperty?: boolean | null, frontageType?: string | null, poolFeatures?: string | null, flooring?: Array<string | null> | null, accessibilityFeatures?: string | null, hasGarage?: boolean | null, hasPetsAllowed?: boolean | null, bodyType?: string | null, topography?: string | null, landLeaseExpirationDate?: string | null, hasAdditionalParcels?: boolean | null, waterViewYN?: string | null, offerReviewDate?: string | null, aboveGradeFinishedArea?: string | null, atAGlanceFacts: Array<{ __typename?: 'AtAGlance', factLabel?: string | null, factValue?: string | null } | null> } | null, mortgageRates?: { __typename?: 'MortgageRates', arm5Rate?: number | null, fifteenYearFixedRate?: number | null, thirtyYearFixedRate?: number | null } | null, nearbyHomes?: Array<{ __typename?: 'NearbyHomes', zpid?: number | null, longitude?: number | null, price?: number | null, homeType?: string | null, homeStatus?: string | null, currency?: string | null, latitude?: number | null, miniCardPhotos?: Array<{ __typename?: 'Photo', url?: string | null } | null> | null, address?: { __typename?: 'Address', city?: string | null, state?: string | null, streetAddress?: string | null, zipcode?: string | null } | null } | null> | null, priceHistory?: Array<{ __typename?: 'PriceHistory', priceChangeRate?: number | null, date?: string | null, source?: string | null, postingIsRental?: boolean | null, time?: number | null, showCountyLink?: boolean | null, pricePerSquareFoot?: number | null, event?: string | null, price?: number | null, sellerAgent?: { __typename?: 'SellerAgent', name?: string | null, profileUrl?: string | null, photo?: { __typename?: 'Photo', url?: string | null } | null } | null, attributeSource?: { __typename?: 'AttributeSource', infoString2?: string | null, infoString3?: string | null, infoString1?: string | null } | null, buyerAgent?: { __typename?: 'BuyerAgent', name?: string | null, profileUrl?: string | null, photo?: { __typename?: 'Photo', url?: string | null } | null } | null } | null> | null, schools: Array<{ __typename?: 'School', link?: string | null, rating?: number | null, totalCount?: number | null, distance?: number | null, assigned?: boolean | null, name?: string | null, studentsPerTeacher?: number | null, isAssigned?: boolean | null, size?: number | null, level?: string | null, grades?: string | null, type?: string | null } | null>, address?: { __typename?: 'Address', city?: string | null, state?: string | null, streetAddress?: string | null, zipcode?: string | null } | null, listed_by?: { __typename?: 'ListedBy', agent_reason?: number | null, zpro?: boolean | null, recent_sales?: string | null, review_count?: string | null, display_name?: string | null, badge_type?: string | null, business_name?: string | null, rating_average?: number | null, phone?: string | null, zuid?: string | null, image_url?: string | null } | null } | null };


export const Properties_By_CoordinatesDocument = gql`
    query properties_by_coordinates($params: PropertiesByCoordinatesParams) {
  properties_by_coordinates(params: $params) {
    property {
      bathrooms
      bedrooms
      zpid
      longitude
      address {
        city
        state
        streetAddress
        zipcode
      }
      latitude
      livingArea
      homeType
      homeStatus
      imgSrc
      price
    }
  }
}
    `;

/**
 * __useProperties_By_CoordinatesQuery__
 *
 * To run a query within a React component, call `useProperties_By_CoordinatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProperties_By_CoordinatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProperties_By_CoordinatesQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useProperties_By_CoordinatesQuery(baseOptions?: Apollo.QueryHookOptions<Properties_By_CoordinatesQuery, Properties_By_CoordinatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Properties_By_CoordinatesQuery, Properties_By_CoordinatesQueryVariables>(Properties_By_CoordinatesDocument, options);
      }
export function useProperties_By_CoordinatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Properties_By_CoordinatesQuery, Properties_By_CoordinatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Properties_By_CoordinatesQuery, Properties_By_CoordinatesQueryVariables>(Properties_By_CoordinatesDocument, options);
        }
export type Properties_By_CoordinatesQueryHookResult = ReturnType<typeof useProperties_By_CoordinatesQuery>;
export type Properties_By_CoordinatesLazyQueryHookResult = ReturnType<typeof useProperties_By_CoordinatesLazyQuery>;
export type Properties_By_CoordinatesQueryResult = Apollo.QueryResult<Properties_By_CoordinatesQuery, Properties_By_CoordinatesQueryVariables>;
export const Properties_By_LocationDocument = gql`
    query properties_by_location($q: String!) {
  properties_by_location(q: $q) {
    resultType
    results {
      display
      metaData {
        city
        country
        county
        lat
        lng
        regionId
        regionType
        score
        state
      }
    }
  }
}
    `;

/**
 * __useProperties_By_LocationQuery__
 *
 * To run a query within a React component, call `useProperties_By_LocationQuery` and pass it any options that fit your needs.
 * When your component renders, `useProperties_By_LocationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProperties_By_LocationQuery({
 *   variables: {
 *      q: // value for 'q'
 *   },
 * });
 */
export function useProperties_By_LocationQuery(baseOptions: Apollo.QueryHookOptions<Properties_By_LocationQuery, Properties_By_LocationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Properties_By_LocationQuery, Properties_By_LocationQueryVariables>(Properties_By_LocationDocument, options);
      }
export function useProperties_By_LocationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Properties_By_LocationQuery, Properties_By_LocationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Properties_By_LocationQuery, Properties_By_LocationQueryVariables>(Properties_By_LocationDocument, options);
        }
export type Properties_By_LocationQueryHookResult = ReturnType<typeof useProperties_By_LocationQuery>;
export type Properties_By_LocationLazyQueryHookResult = ReturnType<typeof useProperties_By_LocationLazyQuery>;
export type Properties_By_LocationQueryResult = Apollo.QueryResult<Properties_By_LocationQuery, Properties_By_LocationQueryVariables>;
export const Properties_Similar_For_SaleDocument = gql`
    query properties_similar_for_sale($zpid: String!) {
  properties_similar_for_sale(zpid: $zpid) {
    bathrooms
    bedrooms
    miniCardPhotos {
      url
    }
    zpid
    longitude
    address {
      city
      state
      streetAddress
      zipcode
    }
    latitude
    livingArea
    homeType
    livingAreaUnits
    currency
    price
  }
}
    `;

/**
 * __useProperties_Similar_For_SaleQuery__
 *
 * To run a query within a React component, call `useProperties_Similar_For_SaleQuery` and pass it any options that fit your needs.
 * When your component renders, `useProperties_Similar_For_SaleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProperties_Similar_For_SaleQuery({
 *   variables: {
 *      zpid: // value for 'zpid'
 *   },
 * });
 */
export function useProperties_Similar_For_SaleQuery(baseOptions: Apollo.QueryHookOptions<Properties_Similar_For_SaleQuery, Properties_Similar_For_SaleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Properties_Similar_For_SaleQuery, Properties_Similar_For_SaleQueryVariables>(Properties_Similar_For_SaleDocument, options);
      }
export function useProperties_Similar_For_SaleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Properties_Similar_For_SaleQuery, Properties_Similar_For_SaleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Properties_Similar_For_SaleQuery, Properties_Similar_For_SaleQueryVariables>(Properties_Similar_For_SaleDocument, options);
        }
export type Properties_Similar_For_SaleQueryHookResult = ReturnType<typeof useProperties_Similar_For_SaleQuery>;
export type Properties_Similar_For_SaleLazyQueryHookResult = ReturnType<typeof useProperties_Similar_For_SaleLazyQuery>;
export type Properties_Similar_For_SaleQueryResult = Apollo.QueryResult<Properties_Similar_For_SaleQuery, Properties_Similar_For_SaleQueryVariables>;
export const Properties_Similar_Recently_SoldDocument = gql`
    query properties_similar_recently_sold($zpid: String!) {
  properties_similar_recently_sold(zpid: $zpid) {
    dateSold
    bedrooms
    homeStatus
    latitude
    miniCardPhotos {
      url
    }
    zpid
    longitude
    bathrooms
    address {
      city
      state
      streetAddress
      zipcode
    }
    livingArea
    livingAreaUnits
    homeType
    currency
    lastSoldPrice
    price
  }
}
    `;

/**
 * __useProperties_Similar_Recently_SoldQuery__
 *
 * To run a query within a React component, call `useProperties_Similar_Recently_SoldQuery` and pass it any options that fit your needs.
 * When your component renders, `useProperties_Similar_Recently_SoldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProperties_Similar_Recently_SoldQuery({
 *   variables: {
 *      zpid: // value for 'zpid'
 *   },
 * });
 */
export function useProperties_Similar_Recently_SoldQuery(baseOptions: Apollo.QueryHookOptions<Properties_Similar_Recently_SoldQuery, Properties_Similar_Recently_SoldQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Properties_Similar_Recently_SoldQuery, Properties_Similar_Recently_SoldQueryVariables>(Properties_Similar_Recently_SoldDocument, options);
      }
export function useProperties_Similar_Recently_SoldLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Properties_Similar_Recently_SoldQuery, Properties_Similar_Recently_SoldQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Properties_Similar_Recently_SoldQuery, Properties_Similar_Recently_SoldQueryVariables>(Properties_Similar_Recently_SoldDocument, options);
        }
export type Properties_Similar_Recently_SoldQueryHookResult = ReturnType<typeof useProperties_Similar_Recently_SoldQuery>;
export type Properties_Similar_Recently_SoldLazyQueryHookResult = ReturnType<typeof useProperties_Similar_Recently_SoldLazyQuery>;
export type Properties_Similar_Recently_SoldQueryResult = Apollo.QueryResult<Properties_Similar_Recently_SoldQuery, Properties_Similar_Recently_SoldQueryVariables>;
export const PropertiesDocument = gql`
    query properties($params: PropertiesParams) {
  properties(params: $params) {
    props {
      bathrooms
      listingDateTime
      propertyType
      latitude
      price
      listingStatus
      zpid
      longitude
      livingArea
      address
      bedrooms
      imgSrc
      country
      currency
      daysOnZillow
      hasImage
    }
    resultsPerPage
    totalResultCount
    totalPages
  }
}
    `;

/**
 * __usePropertiesQuery__
 *
 * To run a query within a React component, call `usePropertiesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePropertiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePropertiesQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function usePropertiesQuery(baseOptions?: Apollo.QueryHookOptions<PropertiesQuery, PropertiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PropertiesQuery, PropertiesQueryVariables>(PropertiesDocument, options);
      }
export function usePropertiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PropertiesQuery, PropertiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PropertiesQuery, PropertiesQueryVariables>(PropertiesDocument, options);
        }
export type PropertiesQueryHookResult = ReturnType<typeof usePropertiesQuery>;
export type PropertiesLazyQueryHookResult = ReturnType<typeof usePropertiesLazyQuery>;
export type PropertiesQueryResult = Apollo.QueryResult<PropertiesQuery, PropertiesQueryVariables>;
export const Property_AssetsDocument = gql`
    query property_assets($zpid: String!) {
  property_assets(zpid: $zpid) {
    images
  }
}
    `;

/**
 * __useProperty_AssetsQuery__
 *
 * To run a query within a React component, call `useProperty_AssetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProperty_AssetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProperty_AssetsQuery({
 *   variables: {
 *      zpid: // value for 'zpid'
 *   },
 * });
 */
export function useProperty_AssetsQuery(baseOptions: Apollo.QueryHookOptions<Property_AssetsQuery, Property_AssetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Property_AssetsQuery, Property_AssetsQueryVariables>(Property_AssetsDocument, options);
      }
export function useProperty_AssetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Property_AssetsQuery, Property_AssetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Property_AssetsQuery, Property_AssetsQueryVariables>(Property_AssetsDocument, options);
        }
export type Property_AssetsQueryHookResult = ReturnType<typeof useProperty_AssetsQuery>;
export type Property_AssetsLazyQueryHookResult = ReturnType<typeof useProperty_AssetsLazyQuery>;
export type Property_AssetsQueryResult = Apollo.QueryResult<Property_AssetsQuery, Property_AssetsQueryVariables>;
export const PropertyDocument = gql`
    query property($zpid: String!) {
  property(zpid: $zpid) {
    listingProvider {
      enhancedVideoURL
      showNoContactInfoMessage
      postingGroupName
      isZRMSourceText
      showLogos
      disclaimerText
      sourceText
      title
      postingWebsiteURL
      agentLicenseInt
      postingWebsiteLinkText
      enhancedDescriptionText
      agentName
    }
    propertyTaxRate
    contact_recipients {
      agent_reason
      zpro
      recent_sales
      review_count
      display_name
      zuid
      rating_average
      badge_typ
      phone {
        prefix
        areacode
        Int
      }
      image_url
    }
    solarPotential
    longitude
    countyFIPS
    cityId
    timeOnZillow
    url
    zestimate
    imgSrc
    zpid
    zipcode
    livingAreaValue
    zestimateLowPercent
    isListedByOwner
    propertyTypeDimension
    resoFacts {
      hasAttachedProperty
      frontageType
      poolFeatures
      flooring
      accessibilityFeatures
      hasGarage
      hasPetsAllowed
      bodyType
      topography
      landLeaseExpirationDate
      hasAdditionalParcels
      waterViewYN
      atAGlanceFacts {
        factLabel
        factValue
      }
      offerReviewDate
      aboveGradeFinishedArea
    }
    streetAddress
    county
    timeZone
    homeType
    livingAreaUnits
    livingArea
    bathrooms
    annualHomeownersInsurance
    state
    rentZestimate
    yearBuilt
    dateSold
    price
    description
    mortgageRates {
      arm5Rate
      fifteenYearFixedRate
      thirtyYearFixedRate
    }
    homeStatus
    latitude
    datePosted
    bedrooms
    nearbyHomes {
      miniCardPhotos {
        url
      }
      zpid
      longitude
      address {
        city
        state
        streetAddress
        zipcode
      }
      price
      homeType
      homeStatus
      currency
      latitude
    }
    monthlyHoaFee
    priceHistory {
      priceChangeRate
      date
      source
      postingIsRental
      time
      sellerAgent {
        name
        photo {
          url
        }
        profileUrl
      }
      showCountyLink
      attributeSource {
        infoString2
        infoString3
        infoString1
      }
      pricePerSquareFoot
      buyerAgent {
        name
        photo {
          url
        }
        profileUrl
      }
      event
      price
    }
    schools {
      link
      rating
      totalCount
      distance
      assigned
      name
      studentsPerTeacher
      isAssigned
      size
      level
      grades
      type
    }
    address {
      city
      state
      streetAddress
      zipcode
    }
    city
    country
    currency
    listed_by {
      agent_reason
      zpro
      recent_sales
      review_count
      display_name
      badge_type
      business_name
      rating_average
      phone
      zuid
      image_url
    }
  }
}
    `;

/**
 * __usePropertyQuery__
 *
 * To run a query within a React component, call `usePropertyQuery` and pass it any options that fit your needs.
 * When your component renders, `usePropertyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePropertyQuery({
 *   variables: {
 *      zpid: // value for 'zpid'
 *   },
 * });
 */
export function usePropertyQuery(baseOptions: Apollo.QueryHookOptions<PropertyQuery, PropertyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PropertyQuery, PropertyQueryVariables>(PropertyDocument, options);
      }
export function usePropertyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PropertyQuery, PropertyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PropertyQuery, PropertyQueryVariables>(PropertyDocument, options);
        }
export type PropertyQueryHookResult = ReturnType<typeof usePropertyQuery>;
export type PropertyLazyQueryHookResult = ReturnType<typeof usePropertyLazyQuery>;
export type PropertyQueryResult = Apollo.QueryResult<PropertyQuery, PropertyQueryVariables>;