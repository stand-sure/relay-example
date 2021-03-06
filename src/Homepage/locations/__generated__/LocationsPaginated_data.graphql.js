/**
 * @flow
 */

/* eslint-disable */

import type { ReaderFragment } from 'relay-runtime';
type Location_location$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type LocationsPaginated_data$ref: FragmentReference;
declare export opaque type LocationsPaginated_data$fragmentType: LocationsPaginated_data$ref;
export type LocationsPaginated_data = {|
  +incrementalPagination2: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: Location_location$ref,
      |}
    |}>
  |},
  +$refType: LocationsPaginated_data$ref,
|};
export type LocationsPaginated_data$data = LocationsPaginated_data;
export type LocationsPaginated_data$key = {
  +$data?: LocationsPaginated_data$data,
  +$fragmentRefs: LocationsPaginated_data$ref,
  ...
};


const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": 20,
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after",
      "type": "String"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "after",
        "direction": "forward",
        "path": [
          "incrementalPagination2"
        ]
      }
    ]
  },
  "name": "LocationsPaginated_data",
  "selections": [
    {
      "alias": "incrementalPagination2",
      "args": null,
      "concreteType": "LocationConnection",
      "kind": "LinkedField",
      "name": "__locations_incrementalPagination2_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "LocationEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Location",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Location_location"
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RootQuery"
};
// prettier-ignore
(node: any).hash = 'cceec4a644df5b78c9fe14ec4e2c156c';
export default node;
