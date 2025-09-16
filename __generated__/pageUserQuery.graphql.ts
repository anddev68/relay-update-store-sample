/**
 * @generated SignedSource<<6cf7d7d4a1b34ce14e721dba3d16aeb3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type pageUserQuery$variables = Record<PropertyKey, never>;
export type pageUserQuery$data = {
  readonly user: {
    readonly name: string;
  };
};
export type pageUserQuery = {
  response: pageUserQuery$data;
  variables: pageUserQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pageUserQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v0/*: any*/)
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
    "name": "pageUserQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3e0dbc4c5de9542ce1e2996fdc8e88b0",
    "id": null,
    "metadata": {},
    "name": "pageUserQuery",
    "operationKind": "query",
    "text": "query pageUserQuery {\n  user {\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "815216132da4c90488317cceb7c57c75";

export default node;
