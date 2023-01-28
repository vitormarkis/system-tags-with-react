import styled from "styled-components";

export const Container = styled.div`
  min-width: max(270px, 37vw);
  flex: 1 1 auto;
  height: 100%;
  position: relative;
  z-index: 1;

  @media (max-width: 400px) {
    min-width: unset;
  }
`;

export const Sticky = styled.div`
  background-color: #272727;
  padding: 1rem;
  border-radius: 20px;
  position: sticky;
  display: flex;
  flex-direction: column;
`;

export const GradientLunar = styled.div`
  position: absolute;
  right: 0px;
  top: 0;
  z-index: -5;
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
`;
