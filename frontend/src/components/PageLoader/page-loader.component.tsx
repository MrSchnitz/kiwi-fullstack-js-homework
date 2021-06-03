import React from "react";
import styled from "styled-components";
import { Loading } from "@kiwicom/orbit-components/lib";

const PageLoader: React.FC = () => {
  return (
    <PageLoaderLayout>
      <Loading type={"pageLoader"} />
    </PageLoaderLayout>
  );
};

const PageLoaderLayout = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PageLoader;
