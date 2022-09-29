import { fetchProperties, fetchProperty, fetchPropertyAssets } from './utils';

export const resolvers = {
  Query: {
    property: (_parent, args, _ctx) => fetchProperty(args),
    properties: (_parent, args, _ctx) => fetchProperties(args),
    property_assets: (_parent, args, _ctx) => fetchPropertyAssets(args),
  },
};
