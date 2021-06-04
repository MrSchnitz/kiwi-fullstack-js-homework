import styled from "styled-components";

interface PredictionContentInterface {
  isLoading: boolean;
  show: boolean;
}

export const PredictionSectionContent = styled.div<PredictionContentInterface>`
  height: ${(props) => (props.show ? "7.5rem" : 0)};
  width: 100%;
  margin-bottom: 0.3rem;
  overflow-x: auto;
  background-color: #008f7b;
  display: flex;
  justify-content: ${(props) => (props.isLoading ? "center" : "flex-start")};
  align-items: center;

  transition: 0.5s height;

  &::-webkit-scrollbar {
    height: 0.8rem;
    transition: 0.3s all;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background: #008f7b;
    border: 1px solid #fff;
    transition: 1s all;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #008f7b8c;
  }
`;

PredictionSectionContent.displayName = "PredictionSectionContent";
