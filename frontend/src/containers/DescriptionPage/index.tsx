import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import { withNavigation } from "../../hoc/NavBar";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

interface DescriptionPageProps {}

const DescriptionPage: React.FC<DescriptionPageProps> = ({}: DescriptionPageProps) => {
  const dispatch = useDispatch();

  const redirect = (url: string) => dispatch(push(url));

  const markdown = `
  # Fullstack JS homework 
  \n\n 
  ## Description
  `;

  return (
    <DescriptionPageLayout>
      <ReactMarkdown remarkPlugins={[gfm]} children={markdown} />
    </DescriptionPageLayout>
  );
};

const DescriptionPageLayout = styled.div`
  height: 100%;
  padding: 3rem;
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;

export default withNavigation(DescriptionPage);
