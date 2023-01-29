import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  height: 100%;
  padding-inline: 1rem;
  align-items: flex-start;
  position: relative;
  z-index: 2;

  @media (max-width: 620px) {
    flex-direction: column;
    .input-form-sticky {
      width: 100%;
      position: static!important;
    }
  }
`;
