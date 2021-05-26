import React from "react";
import styled from "styled-components";
import { withNavigation } from "../../hoc/NavBar";
import Phone from "../../components/Phone";

function MainPage() {
  return (
    <MainPageLayout>
      <Phone
        displayText={"Phone"}
        onDeleteChar={() => null}
        onKeyPressed={() => null}
      />
    </MainPageLayout>
  );
}

const MainPageLayout = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default withNavigation(MainPage);
