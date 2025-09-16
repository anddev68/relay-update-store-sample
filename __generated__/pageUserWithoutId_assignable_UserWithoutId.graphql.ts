/**
 * @generated SignedSource<<d268cdc0567fb065fa82486a12d8fbbe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { FragmentRefs } from "relay-runtime";

const node: any = {};

(node as any).hash = "7cb5b424578b008f3b738bc33bdf9e85";

export default node;

export function validate(value: {
  readonly __typename: string;
  readonly __id: string;
  readonly " $fragmentSpreads": pageUserWithoutId_assignable_UserWithoutId$fragmentType;
}): false | {
  readonly __typename: "UserWithoutId";
  readonly __id: string;
  readonly " $fragmentSpreads": pageUserWithoutId_assignable_UserWithoutId$fragmentType;
} {
  return value.__typename === 'UserWithoutId' ? value : false;
}
