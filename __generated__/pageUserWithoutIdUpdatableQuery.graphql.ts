/**
 * @generated SignedSource<<7efc7b1835e95539aeaf464d3e9c17fe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteUpdatableQuery } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pageUserWithoutIdUpdatableQuery$variables = Record<PropertyKey, never>;
export type pageUserWithoutIdUpdatableQuery$data = {
  get userWithoutId(): {
    name: string;
  };
  set userWithoutId(value: {
    readonly __typename: "UserWithoutId";
    readonly __id: string;
    readonly " $fragmentSpreads": FragmentRefs<"pageUserWithoutId_assignable_UserWithoutId">;
  } | null | undefined);
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
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "pageUserWithoutId_assignable_UserWithoutId"
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

(node as any).hash = "907e511f9757f94dacb5584637687158";

export default node;
