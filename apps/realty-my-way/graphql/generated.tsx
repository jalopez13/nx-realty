import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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

export type PropertiesParams = {
  home_type: Scalars['String'];
  location: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
  status_type?: InputMaybe<PropertiesParamsStatusType>;
};

export enum PropertiesParamsStatusType {
  ForRent = 'ForRent',
  ForSale = 'ForSale',
  RecentlySold = 'RecentlySold'
}

export type PropertiesResults = {
  __typename?: 'PropertiesResults';
  props: Array<Maybe<PropertiesType>>;
  resultsPerPage: Scalars['Int'];
  totalPages: Scalars['Int'];
  totalResultCount: Scalars['Int'];
};

export type PropertiesType = {
  __typename?: 'PropertiesType';
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

export type PropertyAssetsResults = {
  __typename?: 'PropertyAssetsResults';
  images: Array<Maybe<Scalars['String']>>;
};

export type PropertyResults = {
  __typename?: 'PropertyResults';
  annualHomeownersInsurance: Scalars['Int'];
  bathrooms: Scalars['Int'];
  bedrooms: Scalars['Int'];
  city: Scalars['String'];
  country: Scalars['String'];
  currency: Scalars['String'];
  datePosted: Scalars['String'];
  dateSold: Scalars['String'];
  description: Scalars['String'];
  homeStatus: Scalars['String'];
  homeType: Scalars['String'];
  imgSrc: Scalars['String'];
  isListedByOwner: Scalars['Boolean'];
  latitude: Scalars['Float'];
  livingArea: Scalars['Int'];
  livingAreaUnits: Scalars['String'];
  livingAreaValue: Scalars['Int'];
  longitude: Scalars['Float'];
  monthlyHoaFee: Scalars['Int'];
  price: Scalars['Int'];
  propertyTaxRate: Scalars['Float'];
  propertyTypeDimension: Scalars['String'];
  rentZestimate: Scalars['Int'];
  state: Scalars['String'];
  streetAddress: Scalars['String'];
  timeOnZillow: Scalars['String'];
  timeZone: Scalars['String'];
  yearBuilt: Scalars['Int'];
  zipcode: Scalars['String'];
  zpid: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  properties?: Maybe<PropertiesResults>;
  property?: Maybe<PropertyResults>;
  property_assets?: Maybe<PropertyAssetsResults>;
};


export type QueryPropertiesArgs = {
  params?: InputMaybe<PropertiesParams>;
};


export type QueryPropertyArgs = {
  zpid: Scalars['String'];
};


export type QueryProperty_AssetsArgs = {
  zpid: Scalars['String'];
};

export type PropertiesQueryVariables = Exact<{
  params?: InputMaybe<PropertiesParams>;
}>;


export type PropertiesQuery = { __typename?: 'Query', properties?: { __typename?: 'PropertiesResults', resultsPerPage: number, totalResultCount: number, totalPages: number, props: Array<{ __typename?: 'PropertiesType', bathrooms?: number | null, listingDateTime?: number | null, propertyType?: string | null, latitude?: number | null, price?: number | null, listingStatus?: string | null, zpid?: string | null, longitude?: number | null, livingArea?: number | null, address?: string | null, bedrooms?: number | null, imgSrc?: string | null, country?: string | null, currency?: string | null, daysOnZillow?: number | null, hasImage?: boolean | null } | null> } | null };

export type Property_AssetsQueryVariables = Exact<{
  zpid: Scalars['String'];
}>;


export type Property_AssetsQuery = { __typename?: 'Query', property_assets?: { __typename?: 'PropertyAssetsResults', images: Array<string | null> } | null };

export type PropertyQueryVariables = Exact<{
  zpid: Scalars['String'];
}>;


export type PropertyQuery = { __typename?: 'Query', property?: { __typename?: 'PropertyResults', zpid: number, streetAddress: string, city: string, state: string, zipcode: string, country: string, currency: string, imgSrc: string, propertyTaxRate: number, latitude: number, longitude: number, timeOnZillow: string, livingAreaValue: number, isListedByOwner: boolean, propertyTypeDimension: string, timeZone: string, homeType: string, livingAreaUnits: string, livingArea: number, bathrooms: number, bedrooms: number, annualHomeownersInsurance: number, rentZestimate: number, yearBuilt: number, dateSold: string, price: number, description: string, homeStatus: string, datePosted: string, monthlyHoaFee: number } | null };


export const PropertiesDocument = gql`
    query Properties($params: PropertiesParams) {
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
    query Property_assets($zpid: String!) {
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
    query Property($zpid: String!) {
  property(zpid: $zpid) {
    zpid
    streetAddress
    city
    state
    zipcode
    country
    currency
    imgSrc
    propertyTaxRate
    latitude
    longitude
    timeOnZillow
    livingAreaValue
    isListedByOwner
    propertyTypeDimension
    timeZone
    homeType
    livingAreaUnits
    livingArea
    bathrooms
    bedrooms
    annualHomeownersInsurance
    rentZestimate
    yearBuilt
    dateSold
    price
    description
    homeStatus
    datePosted
    monthlyHoaFee
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