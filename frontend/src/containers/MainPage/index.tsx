import React from "react";
import { Alert } from "@kiwicom/orbit-components/lib";
import { withNavigation } from "../../hoc/NavBar";
import Phone from "../../components/Phone";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../internals/RootState";
import {
  selectNumbers,
  MainAPI,
  selectText,
  selectPredictionWords,
  selectPredictionWordsLoading,
} from "./api/MainAPI";
import { WordType } from "../../models/Word";

function MainPage() {
  const dispatch = useDispatch();

  const numbers: number[] = useSelector(selectNumbers);

  const text: string = useSelector(selectText);

  const predictionWords: WordType[] = useSelector(selectPredictionWords);

  const predictionWordsLoading: boolean = useSelector(
    selectPredictionWordsLoading
  );

  return (
    <MainPageLayout>
      <Phone
        displayText={`${text} ${numbers.toString().replace(/,/g, "")}`}
        predictionWords={predictionWords}
        predictionWordsLoading={predictionWordsLoading}
        onKeyPressed={(key: number) => dispatch(MainAPI.addNumber(key))}
        onDeleteChar={() => dispatch(MainAPI.deleteText())}
        onPredictionSelect={(word: WordType) =>
          dispatch(MainAPI.changeText(word))
        }
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
