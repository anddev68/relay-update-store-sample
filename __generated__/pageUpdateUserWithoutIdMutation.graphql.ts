/**
 * @generated SignedSource<<c35b4478edd63c8cf828f0b45c4cdf14>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type pageUpdateUserWithoutIdMutation$variables = {
  name: string;
};
export type pageUpdateUserWithoutIdMutation$data = {
  readonly updateUserWithoutId: {
    readonly query: {
      readonly userWithoutId: {
        readonly name: string;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
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
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "pageUpdateUserWithoutIdMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pageUpdateUserWithoutIdMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "caa527e041eeb4172c72a55364ece59f",
    "id": null,
    "metadata": {},
    "name": "pageUpdateUserWithoutIdMutation",
    "operationKind": "mutation",
    "text": "mutation pageUpdateUserWithoutIdMutation(\n  $name: String!\n) {\n  updateUserWithoutId(name: $name) {\n    query {\n      userWithoutId {\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2939cb44bd3f11415841d86345a1d889";

export default node;
