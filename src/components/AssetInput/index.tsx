import React, { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/appContext";
import { generateFormTitle } from "../../utils/generateFormTitle";
import AssetForm from "../AssetForm";
import SectionName from "../SectionName";

import { Container, GradientLunar, Sticky } from "./styles";

const AssetInput: React.FC = () => {
  const { appContext } = useAppContext();
  const [formTitle, setFormTitle] = useState<React.ReactElement | null>();

  useEffect(() => {
    if(appContext === null) return
    setFormTitle(generateFormTitle[appContext])
  }, [appContext]);
  return (
    <>
      {appContext !== null && (
        <Container>
          <GradientLunar />
          <Sticky>
            {formTitle && <SectionName>{formTitle}</SectionName>}
            <AssetForm />
          </Sticky>
        </Container>
      )}
    </>
  );
};

export default AssetInput;
