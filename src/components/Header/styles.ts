import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(300px) brightness(0.6);
  flex: 0 1 50px;
  background-color: transparent;
  border-bottom: 1px solid #656565;
  padding: 0.5rem 0;

  @media (max-width: 400px) {
    padding: 1rem 0;
  }
`;

export const Content = styled.div`
  padding-inline: 1rem;
  width: 100%;
  max-width: 1280px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 400px) {
    flex-direction: column;

    gap: 0.5rem;
  }
`;
