/**
 * @generated SignedSource<<85cd9723f3afe649f193b25fe1e14532>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type pageUserWithoutIdQuery$variables = Record<PropertyKey, never>;
export type pageUserWithoutIdQuery$data = {
  readonly userWithoutId: {
    readonly name: string;
  };
};
export type pageUserWithoutIdQuery = {
  response: pageUserWithoutIdQuery$data;
  variables: pageUserWithoutIdQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "UserWithoutId",
    "kind": "LinkedField",
    "name": "userWithoutId",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pageUserWithoutIdQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pageUserWithoutIdQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "ba7844f7fe46a670eac9e6b01fecc08c",
    "id": null,
    "metadata": {},
    "name": "pageUserWithoutIdQuery",
    "operationKind": "query",
    "text": "query pageUserWithoutIdQuery {\n  userWithoutId {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "41211a0ca8bbdab362fb6bae4c01dd88";

export default node;
