import React from "react";
import {NotFoundPageLayout, Title} from "./not-found-page.styles";

function NotFoundPage() {
  return (
    <>
      <NotFoundPageLayout>
        <Title>
          4
          <span role="img" aria-label="Crying Face">
            😬
          </span>
          4
          <p>Page not found.</p>
        </Title>
      </NotFoundPageLayout>
    </>
  );
}

export default NotFoundPage;
