/**
 * @generated SignedSource<<e2b2f7e020ebd32a61e925b64b6c56c0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pageUpdateUserWithoutIdMutation$variables = {
  name: string;
};
export type pageUpdateUserWithoutIdMutation$data = {
  readonly updateUserWithoutId: {
    readonly query: {
      readonly userWithoutId: {
        readonly __typename: "UserWithoutId";
        readonly __id: string;
        readonly name: string;
        readonly " $fragmentSpreads": FragmentRefs<"pageUserWithoutId_assignable_UserWithoutId">;
      };
    };
  };
};
export type pageUpdateUserWithoutIdMutation = {
  response: pageUpdateUserWithoutIdMutation$data;
  variables: pageUpdateUserWithoutIdMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "pageUpdateUserWithoutIdMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateSettingsPayload",
        "kind": "LinkedField",
        "name": "updateUserWithoutId",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Query",
            "kind": "LinkedField",
            "name": "query",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserWithoutId",
                "kind": "LinkedField",
                "name": "userWithoutId",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "pageUserWithoutId_assignable_UserWithoutId"
                  },
                  (v3/*: any*/),
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
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pageUpdateUserWithoutIdMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateSettingsPayload",
        "kind": "LinkedField",
        "name": "updateUserWithoutId",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Query",
            "kind": "LinkedField",
            "name": "query",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserWithoutId",
                "kind": "LinkedField",
                "name": "userWithoutId",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ea98a6c16ccecdb3eb36eea79497702e",
    "id": null,
    "metadata": {},
    "name": "pageUpdateUserWithoutIdMutation",
    "operationKind": "mutation",
    "text": "mutation pageUpdateUserWithoutIdMutation(\n  $name: String!\n) {\n  updateUserWithoutId(name: $name) {\n    query {\n      userWithoutId {\n        name\n        ...pageUserWithoutId_assignable_UserWithoutId\n      }\n    }\n  }\n}\n\nfragment pageUserWithoutId_assignable_UserWithoutId on UserWithoutId {\n  __typename\n}\n"
  }
};
})();

(node as any).hash = "3685dec58e07696318534db99972bc7f";

export default node;
