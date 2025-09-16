"use client";

import { useLazyLoadQuery, useMutation } from "react-relay";
import { graphql } from "relay-runtime";
import { useState } from "react";
import { pageUserWithoutIdQuery } from "../../../__generated__/pageUserWithoutIdQuery.graphql";
import { pageUpdateUserWithoutIdMutation } from "../../../__generated__/pageUpdateUserWithoutIdMutation.graphql";
import { pageUserWithoutIdUpdatableQuery } from "../../../__generated__/pageUserWithoutIdUpdatableQuery.graphql";

/*
const assinableFragment = graphql`
  fragment pageUserWithoutId_assignable_UserWithoutId on UserWithoutId
  @assignable {
    __typename
  }
`;
*/

const updatableQuery = graphql`
  query pageUserWithoutIdUpdatableQuery @updatable {
    userWithoutId {
      name
      # ...pageUserWithoutId_assignable_UserWithoutId
    }
  }
`;

const query = graphql`
  query pageUserWithoutIdQuery {
    userWithoutId {
      name
      # ...pageUserWithoutId_assignable_UserWithoutId
    }
  }
`;

const updateUserWithoutIdMutation = graphql`
  mutation pageUpdateUserWithoutIdMutation($name: String!) {
    updateUserWithoutId(name: $name) {
      query {
        userWithoutId {
          name
          # ...pageUserWithoutId_assignable_UserWithoutId
        }
      }
    }
  }
`;

export default function Home() {
  const data = useLazyLoadQuery<pageUserWithoutIdQuery>(query, {});
  const [userWithoutIdName, setUserWithoutIdName] = useState("");
  const [updateUserWithoutId] = useMutation<pageUpdateUserWithoutIdMutation>(
    updateUserWithoutIdMutation
  );

  const onClickUpdateUserWithoutId = () => {
    updateUserWithoutId({
      variables: { name: userWithoutIdName },
      updater: (store, response) => {
        const { updatableData } =
          store.readUpdatableQuery<pageUserWithoutIdUpdatableQuery>(
            updatableQuery,
            {}
          );
        if (response) {
          updatableData.userWithoutId.name =
            response.updateUserWithoutId.query.userWithoutId.name;
        }
      },
    });
  };

  return (
    <div>
      <div>userWithoutId: {data.userWithoutId.name}</div>
      <div>
        <input
          type="text"
          value={userWithoutIdName}
          onChange={(e) => setUserWithoutIdName(e.target.value)}
        ></input>
        <button type="button" onClick={onClickUpdateUserWithoutId}>
          変更
        </button>
      </div>
    </div>
  );
}
