import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import { withNavigation } from "../../hoc/NavBar";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

function DescriptionPage() {
  const dispatch = useDispatch();

  const redirect = (url: string) => dispatch(push(url));

  const markdown = `
  # Fullstack JS homework 
  \n\n 
  ## Implement a number to word list converter as a Node backend and React frontend.
  \n\n
  ---
  \n\n
  The backend should provide an endpoint that converts a given numeric
string into a list of corresponding words in the style of:

* [T9](https://en.wikipedia.org/wiki/T9_(predictive_text)) or 
* [Phonewords](https://en.wikipedia.org/wiki/Phoneword).
 
> For example, given the input 23 the output should be: ad, ae, af, bd, be, bf, cd, ce, cf.
\n\n
The frontend should allow the user to enter a number, query the backend for
the corresponding expansions, and display them.
\n\n
The solution should be shared with us in a git repository with real history included.
It's OK not to deliver 100%, but the more working parts the better. For example if you
struggle with the backend, focus on frontend and just mock the API calls.
\n\n
Take this task as a chance to present your skills. If you are good in UI, let
us see that. If you are more into the backend, it's OK to have simple FE. If
you know what tests are for, don't keep it for yourself, show it in the code.
\n\n
Ways to go beyond the minimal solution could include for example:
phone keyboard -like UI - great project setup - mobile app in
React Native - filtering to include only real words based on a
suitable word list.
\n\n
The task should contain unit tests.
  `;

  return (
    <DescriptionPageLayout>
      <div>
        <ReactMarkdown children={markdown} />
      </div>
    </DescriptionPageLayout>
  );
}

const DescriptionPageLayout = styled.div`
  height: 100%;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  div {
    width: 50%;
  }
  
  p, ul {
    margin: 1.5rem 0;
    font-size: 1.5rem;
  }
`;

export default DescriptionPage;
