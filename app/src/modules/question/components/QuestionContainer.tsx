import Button from "./Button";
import Timer from "./Timer";
import { useEffect, useMemo, useState } from 'react'
import {QuestionTitle, QuestionText, ContainerButtons,ContainerQuestion} from "@/modules/question/components/styledComponents";
import type { Question } from "@/types/question";

import { useGameContext } from "@/core/providers/GameProvider";

import getQuestion from "../services/api";

function QuestionContainer() {

  const {updateScore} = useGameContext();
  
  const [question, setQuestion] = useState<Question | null>(null);
  const [selected, setSelected] = useState<number>(-1);


  useEffect(() => {
    if(!question){
     (async () => {
      setQuestion(await getQuestion('/src/json/question.json'));
    })();
  }
  }, [question]);




  const renderQuestionText: JSX.Element | null = useMemo(() => {
    if(!question) {
      return null;
    }

    return (
      <>
        <QuestionTitle>{question.title}</QuestionTitle>
        <QuestionText>{question.question}</QuestionText>
      </>
    )
  }, [question]);

  const renderAnswers: JSX.Element[] | null = useMemo(() => {
    if(!question) {
      return null;
    }

    const handleClick = (index: number, answer:Object) => {
      setSelected(index);
      updateScore(answer);

      // @TODO: Send vote to server
    };


    return question.answers.map((answer, index) => (
    <Button 
      key={`answer_${answer.id}`} 
      label={answer.text} 
      callback={() => handleClick(index, answer.gauges)}
      selected={selected === index} />
    ));
  }, [question, selected]);



  return(
    <ContainerQuestion>
      <Timer  />
      {renderQuestionText}
      <ContainerButtons>
        {renderAnswers}
      </ContainerButtons>
    </ContainerQuestion>
  )

}

export default QuestionContainer;