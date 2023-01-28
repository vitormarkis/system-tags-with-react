import React, { useEffect, useState } from "react";
import { USER } from "../../constants/api";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import UserInfo from "../UserInfo";

import { Container, Content } from "./styles";

export interface TUserGithub {
  name: string;
  login: string;
  avatar_url: string;
}

const tempUser: TUserGithub = {
  avatar_url: "https://avatars.githubusercontent.com/u/121525239?v=4",
  login: 'vitormarkis',
  name: 'Vitor Markis'
}

const Header: React.FC = () => {
  const [userData, setUserData] = useState<TUserGithub>();

  useEffect(() => {
    // fetch(`https://api.github.com/users/${USER}`).then((res) =>
    //   res.json().then((data) => {
    //     console.log(data);
    //     setUserData(data);
    //   })
    // );
  }, []);

  return (
    <Container>
      <Content>
        <Logo />
        <SearchBar placeholder="Procure tags por aqui..." />
        {/* {userData && <UserInfo {...tempUser} />} */}
        <UserInfo {...tempUser} />
      </Content>
    </Container>
  );
};

export default Header;
