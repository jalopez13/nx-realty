import {
  fetchProperties,
  fetchPropertiesByCoordinates,
  fetchPropertiesByLocation,
  fetchPropertiesSimilar,
  fetchProperty,
  fetchPropertyAssets,
} from './utils';

export const resolvers = {
  Query: {
    property: (_parent, args, _ctx) => fetchProperty(args),
    properties: (_parent, args, _ctx) => fetchProperties(args),
    property_assets: (_parent, args, _ctx) => fetchPropertyAssets(args),
    properties_by_coordinates: (_parent, args, _ctx) =>
      fetchPropertiesByCoordinates(args),
    properties_by_location: (_parent, args, _ctx) =>
      fetchPropertiesByLocation(args),
    properties_similar: (_parent, args, _ctx) => fetchPropertiesSimilar(args),
  },
};
