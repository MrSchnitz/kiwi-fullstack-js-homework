import styled from "styled-components";

export const DescriptionPageLayout = styled.div`
  height: 100%;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 50%;
    text-align: justify;
  }

  p,
  ul {
    margin: 1.5rem 0;
    font-size: 1.5rem;
  }

  ul {
    padding-left: 2rem;
  }
`;
