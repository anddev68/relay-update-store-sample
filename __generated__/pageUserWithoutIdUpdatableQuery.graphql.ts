/**
 * @generated SignedSource<<2a674d57ebb0ca3e482087c523d00cba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteUpdatableQuery } from 'relay-runtime';
export type pageUserWithoutIdUpdatableQuery$variables = Record<PropertyKey, never>;
export type pageUserWithoutIdUpdatableQuery$data = {
  get userWithoutId(): {
    name: string;
  };
  set userWithoutId(value: null | undefined);
};
export type pageUserWithoutIdUpdatableQuery = {
  response: pageUserWithoutIdUpdatableQuery$data;
  variables: pageUserWithoutIdUpdatableQuery$variables;
};

const node: ConcreteUpdatableQuery = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pageUserWithoutIdUpdatableQuery",
    "selections": [
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
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "UpdatableQuery"
};

(node as any).hash = "bb5ba57f0aca3636dace05223fb19c12";

export default node;
