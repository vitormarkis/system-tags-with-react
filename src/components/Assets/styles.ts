import styled, { css } from "styled-components";
import { New, Sort } from "../../styles/icons";

export const Container = styled.div`
  background-color: #272727;
  padding: 1rem;
  border-radius: 20px;
  user-select: none;
  flex: 10 1 0;
  height: 100%;
  position: relative;
  z-index: 1;
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

export const GradientLunar = styled.div`
  position: absolute;
  right: 0px;
  top: 0;
  z-index: -5;
  width: 200px;
  height: 520px;
  background: rgb(76, 113, 255);
  background: linear-gradient(
    0deg,
    rgba(76, 113, 255, 1) 0%,
    rgba(0, 206, 255, 1) 22%,
    rgba(0, 61, 255, 1) 48%,
    rgba(65, 244, 255, 1) 75%,
    rgba(91, 46, 255, 1) 100%
  );

  filter: blur(400px);
  /* filter: blur(120px); */
`;

export const GradientSpacial = styled.div`
  position: absolute;
  left: 0px;
  top: 400px;
  z-index: -5;
  width: 200px;
  height: 520px;
  background: rgb(76, 113, 255);
  background: linear-gradient(
    0deg,
    rgba(76, 113, 255, 1) 0%,
    rgba(0, 206, 255, 1) 22%,
    rgba(0, 61, 255, 1) 48%,
    rgba(65, 244, 255, 1) 75%,
    rgba(91, 46, 255, 1) 100%
  );

  filter: blur(320px);
  /* filter: blur(120px); */
`;
