import styled, { css } from 'styled-components';

import { SearchIcon } from '../../styles/icons';

export const Container = styled.div`
  padding: 9px 12px;
  border-radius: 12px;
  background-color: #444;
  border: 1px solid #3d3d3d;
  width: 320px;
  display: flex;
  gap: 0.75rem;

  @media (max-width: 620px) {
    width: 100%
  }
`;

export const Input = styled.input`
  outline: none;
  background-color: transparent;
  border: none;
  ::placeholder {
    color: #aaa;
  font-size: .75rem;
  }
`;

const IconCSS = css({
  width: '16px',
  height: '16px',
  path: {
    fill: '#aaa',
  },
});

export const MagnifyingIcon = styled(SearchIcon)`
  ${IconCSS}
`;
