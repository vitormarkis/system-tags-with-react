import styled, { css } from 'styled-components';
import {
  DeleteIcon as RoundedX,
  EditIcon as PencilSquare,
  AddIcon as RoundedPlus
} from '../../styles/icons';

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
    fill: '#7f8891',
  },
});

export const EditIcon = styled(PencilSquare)`
  ${iconCSS}
`;

export const AddIcon = styled(RoundedPlus)`
${iconCSS}
  width: 17px;
height: 17px;
`

export const DeleteIcon = styled(RoundedX)`
  ${iconCSS}
  width: 17px;
height: 17px;

  
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

&.delete-tag:hover {
  background-color: #FB4D3D;
  box-shadow: 0 -1px 0 1px #00000015, 0 1px 0 1px #00000015;

  svg > path {
    fill: #fff;
  }
}

&.add-tag:hover {
  background-color: #345995;
  box-shadow: 0 -1px 0 1px #00000015, 0 1px 0 1px #00000015;

  svg > path {
    fill: #fff;
  }
}
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  transform: translateY(-4px);
`;
