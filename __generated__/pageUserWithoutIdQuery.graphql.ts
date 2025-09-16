/**
 * @generated SignedSource<<7e6985470e67b7bc423744fe72a9166d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pageUserWithoutIdQuery$variables = Record<PropertyKey, never>;
export type pageUserWithoutIdQuery$data = {
  readonly userWithoutId: {
    readonly __typename: "UserWithoutId";
    readonly __id: string;
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"pageUserWithoutId_assignable_UserWithoutId">;
  };
};
export type pageUserWithoutIdQuery = {
  response: pageUserWithoutIdQuery$data;
  variables: pageUserWithoutIdQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pageUserWithoutIdQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserWithoutId",
        "kind": "LinkedField",
        "name": "userWithoutId",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "pageUserWithoutId_assignable_UserWithoutId"
          },
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pageUserWithoutIdQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserWithoutId",
        "kind": "LinkedField",
        "name": "userWithoutId",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6037b93e8cd890a93756cbd0e9347a97",
    "id": null,
    "metadata": {},
    "name": "pageUserWithoutIdQuery",
    "operationKind": "query",
    "text": "query pageUserWithoutIdQuery {\n  userWithoutId {\n    name\n    ...pageUserWithoutId_assignable_UserWithoutId\n  }\n}\n\nfragment pageUserWithoutId_assignable_UserWithoutId on UserWithoutId {\n  __typename\n}\n"
  }
};
})();

(node as any).hash = "a4e039840e6e712b2fd6401191c87162";

export default node;
