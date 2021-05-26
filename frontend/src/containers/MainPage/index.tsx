import React from "react";
import styled from "styled-components";

function MainPage() {

    return (
        <MainPageLayout>
            <h1>Main Page</h1>
        </MainPageLayout>
    );
}

const MainPageLayout = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MainPage;
