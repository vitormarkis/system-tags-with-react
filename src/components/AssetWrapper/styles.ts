import styled, { css } from 'styled-components';
import { EditIcon as PencilSquare } from '../../styles/icons';

export const Container = styled.div`
  cursor: pointer;
  margin-block: 12px;
  border-bottom: 1px solid #00000060;
  border-top: 1px solid #ffffff20;
  box-shadow: 0px 0.2rem 4px #00000020;
  border-radius: 12px;
  padding: 12px;

  background-color: #29323a;

  &:nth-child(even) {
    background-color: #212d36;
  }
`;

const iconCSS = css({
  width: '18px',
  height: '18px',
  path: {
    fill: "#7f8891"
  }
});

export const EditIcon = styled(PencilSquare)`
  ${iconCSS}
`;

export const IconHover = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem;
  border-radius: 6px;

  &:hover {
    background-color: #454e56;
    box-shadow: 0 -1px 0 1px #00000015, 0 1px 0 1px #00000015;

    svg > path {
      fill: #fff;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
