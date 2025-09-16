"use client";

import { useLazyLoadQuery, useMutation } from "react-relay";
import { graphql } from "relay-runtime";
import { useState } from "react";
import { pageUpdateUserMutation } from "../../../__generated__/pageUpdateUserMutation.graphql";
import { pageUserQuery } from "../../../__generated__/pageUserQuery.graphql";

const query = graphql`
  query pageUserQuery {
    user {
      name
    }
  }
`;

const updateUserMutation = graphql`
  mutation pageUpdateUserMutation($name: String!) {
    updateUser(name: $name) {
      query {
        user {
          name
        }
      }
    }
  }
`;

export default function Home() {
  const data = useLazyLoadQuery<pageUserQuery>(query, {});
  const [userName, setUserName] = useState("");
  const [updateUser] = useMutation<pageUpdateUserMutation>(updateUserMutation);
  const onClicUpdateUser = () => {
    updateUser({
      variables: { name: userName },
    });
  };

  return (
    <div>
      <div>user: {data.user.name}</div>
      <div>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <button type="button" onClick={onClicUpdateUser}>
          変更
        </button>
      </div>
    </div>
  );
}
