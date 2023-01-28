import React from "react";
import { TUserGithub } from "../Header";

import { Container, Texts, UserAvatar } from "./styles";

const UserInfo: React.FC<TUserGithub> = (props) => {
  return (
    <Container>
      <Texts>
        <span>{props?.name}</span>
        <p>{props?.login}</p>
      </Texts>
      <UserAvatar avatar_url={props.avatar_url} />
    </Container>
  );
};

export default UserInfo;
