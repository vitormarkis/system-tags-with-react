import styled from "styled-components";

export const Layout = styled.div`
  background-color: #0F0F0F;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const GradientLunar = styled.div`
  position: absolute;
  right: 0px;
  top: 0;
  z-index: 1;
  width: 200px;
  height: 520px;
  background: rgb(76, 113, 255);
  background: linear-gradient(
    0deg,
    rgba(76, 113, 255, 1) 0%,
    rgba(0, 206, 255, 1) 22%,
    rgba(0, 61, 255, 1) 48%,
    rgba(65, 244, 255, 1) 75%,
    rgba(91, 46, 255, 1) 100%
  );

  filter: blur(400px);
  /* filter: blur(120px); */
`;

export const GradientSpacial = styled.div`
  position: fixed;
  left: -200px;
  top: 400px;
  z-index: 3;
  width: 200px;
  height: 520px;
  background: rgb(76, 113, 255);
  background: linear-gradient(
    0deg,
    rgba(76, 113, 255, 1) 0%,
    rgba(0, 206, 255, 1) 22%,
    rgba(0, 61, 255, 1) 48%,
    rgba(65, 244, 255, 1) 75%,
    rgba(91, 46, 255, 1) 100%
  );

  filter: blur(300px);
  /* filter: blur(120px); */
`;
