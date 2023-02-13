import styled, { css } from "styled-components";
import { New, Sort } from "../../styles/icons";

export const Container = styled.div`
  background-color: var(--bg-container);
  padding: 1rem;
  border-radius: 20px;
  user-select: none;
  flex: 10 1 0;
  height: 100%;
  width: 100%;
`;

export const IconHover = styled.div`
  padding: 0.35rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 0.3rem;

  &.new-asset:hover {
    background-color: #4daa57;
    box-shadow: 0 -1px 0 1px #00000015, 0 1px 0 1px #00000015;

    svg > path {
      fill: #fff;
    }
  }

  &.sort-asset:hover {
    background-color: #345995;
    box-shadow: 0 -1px 0 1px #00000015, 0 1px 0 1px #00000015;

    svg > path {
      fill: #fff;
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;

  &.new-asset:hover {
  }
`;

const IconCSS = css({
  width: "20px",
  height: "20px",
  path: {
    fill: "#7f8891",
  },
});

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewAssetIcon = styled(New)`
  ${IconCSS}
`;

export const SortIcon = styled(Sort)`
  ${IconCSS}
`;
