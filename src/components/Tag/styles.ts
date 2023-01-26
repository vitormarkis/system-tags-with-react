import styled, { css } from 'styled-components';
import { TTag } from '../../constants/data';

import { X } from '../../styles/icons';

export const Container = styled.div<Pick<TTag, 'color'>>`
  padding: 2px 9px;
  border-radius: 6px;
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  gap: 0.25rem;

@media (max-width: 760px) {
  padding: 1px 6px;
}

@media (max-width: 670px) {
  flex-grow: 1;
  justify-content: space-between;
}
`;

export const Span = styled.div`
  font-size: 0.75rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 760px) {
    font-size: 0.75rem;
  }
`;

export const IconWrapper = styled.div`
  padding: 0.25rem;
  border-radius: 99px;
  display: flex;
  align-items: center;
  margin-right: -4px;

  &:hover {
    background-color: #00000020;
  }
`;

const IconCSS = css({
  width: '14px',
  height: '14px',
  path: {
    fill: '#fff',
  },
});

export const CloseIcon = styled(X)`
  ${IconCSS}
`;
