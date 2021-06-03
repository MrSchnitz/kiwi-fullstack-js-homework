import React from "react";
import styled from "styled-components/macro";

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

const NotFoundPageLayout = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: bold;
  color: black;
  font-size: 6rem;
  text-align: center;

  span {
    font-size: 5.7rem;
  }

  p {
    font-weight: normal;
    font-size: 2.5rem;
  }
`;

export default NotFoundPage;
