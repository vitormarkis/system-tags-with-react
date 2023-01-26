import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  height: 100%;
  padding-inline: 1rem;

  @media (max-width: 620px) {
    flex-direction: column;
  }

`;
