import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import { useAppContext } from "../../contexts/appContext";
import { generateFormTitle } from "../../utils/generateFormTitle";
import AssetForm from "../AssetForm";
import SectionName from "../SectionName";

import { Container, Sticky } from "./styles";

const AssetInput: React.FC = () => {
  const { appContext } = useAppContext();
  const [formTitle, setFormTitle] = useState<React.ReactElement | null>();

  useEffect(() => {
    if (appContext === null) return;
    setFormTitle(generateFormTitle[appContext]);
  }, [appContext]);
  return (
    <>
      {appContext !== null && (
        <StickyBox className="input-form-sticky" offsetTop={69}>
          <Container>
            <Sticky>
              {formTitle && <SectionName>{formTitle}</SectionName>}
              <AssetForm />
            </Sticky>
          </Container>
        </StickyBox>
      )}
    </>
  );
};

export default AssetInput;
