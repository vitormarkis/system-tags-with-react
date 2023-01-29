import styled from "styled-components";

export const Container = styled.div`
  width: max(270px, min(400px, 33vw));
  /* flex: 1 1 auto; */
  position: relative;
  z-index: 1;

  > h1 {
    height: 2000px;
    background-color: magenta;
  }
  
  @media (max-width: 620px) {
    width: unset;
  }
`;

export const Sticky = styled.div`
  background-color: var(--bg-container);
  padding: 1rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;
