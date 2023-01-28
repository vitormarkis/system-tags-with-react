import React from "react";
import ApplicationContextProvider from "../../contexts/appContext";
import EditingIDProvider from "../../contexts/editingID";
import AssetInput from "../AssetInput";
import Assets from "../Assets";

import { Container } from "./styles";

const TagSystem: React.FC = () => {
  return (
    <Container>
      <EditingIDProvider>
        <ApplicationContextProvider>
          <AssetInput />

          <Assets />
        </ApplicationContextProvider>
      </EditingIDProvider>
    </Container>
  );
};

export default TagSystem;
