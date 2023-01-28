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