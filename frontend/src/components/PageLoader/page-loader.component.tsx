import React from "react";
import {Loading} from "@kiwicom/orbit-components/lib";
import {PageLoaderLayout} from "./page-loader.styles";

const PageLoader: React.FC = () => {
  return (
    <PageLoaderLayout>
      <Loading type={"pageLoader"} />
    </PageLoaderLayout>
  );
};

export default PageLoader;
