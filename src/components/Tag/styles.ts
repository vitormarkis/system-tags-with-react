import styled from 'styled-components';
import { TTags } from '../AssetList';

export const Container = styled.div<Pick<TTags, 'color'>>`
  padding: 2px 9px;
  border-radius: 6px;
  background-color: ${props => props.color};
`;

export const Span = styled.div`
font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
