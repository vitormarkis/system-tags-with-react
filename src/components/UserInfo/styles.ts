import styled from "styled-components";
import { TUserGithub } from "../Header";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;

  @media (max-width: 540px) {
    display: none;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1;
  gap: 0.2rem;
  text-align: right;
  white-space: nowrap;

  span {
    font-size: 14px;
    font-weight: 500;
  }
  p {
    font-size: 12px;
    font-weight: 300;
    color: #7F8891;
    font-style: italic;
  }
`;

export const UserAvatar = styled.div<Pick<TUserGithub, "avatar_url">>`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  background-image: url(${({ avatar_url }) => avatar_url});
  background-size: contain;
  border-radius: 50%;
`;
