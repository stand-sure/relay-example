// @flow strict-local

import { connectionDefinitions } from '@adeira/graphql-relay';

import GraphQLLocation from './Location';

const { connectionType: AllLocationsConnection, edgeType: _LocationEdge } = connectionDefinitions({
  nodeType: GraphQLLocation,
});

export const LocationEdge = _LocationEdge;
export default AllLocationsConnection;
