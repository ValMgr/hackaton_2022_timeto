import Button from "./Button";
import Timer from "./Timer";
import { useEffect, useMemo, useState } from 'react'
import {QuestionTitle, QuestionText, ContainerButtons,ContainerQuestion} from "@/modules/question/components/styledComponents";
import type { Question } from "@/types/question";

import getQuestion from "../services/api";

function QuestionContainer() {
  
  let [question, setQuestion] = useState<Question | null>(null);
  let [selected, setSelected] = useState<number>(-1);
  
  let [timer, setTimer] = useState<number>(60);


  

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

    const handleClick = (index: number) => {
      setSelected(index);
      // @TODO: Send vote to server
    };

    console.log('time', timer)
    if (timer < 50) {
      console.log('50');
    }

    return question.answers.map((answer, index) => (
    <Button 
      key={`answer_${answer.id}`} 
      label={answer.text} 
      callback={() => handleClick(index)}
      selected={selected === index} />
    ));
  }, [question, selected]);

  
  const handleInterval = () => {

    function timerFunction() {
      if (timer > 0) {
        setTimer(timer -= 1);
      } else {
        setTimer(0);
        clearInterval(interval);
        console.log('addattributes');
      }
    }

    const interval = setInterval(timerFunction, 1000);

    
    // @TODO: Send vote to server
  };




  return(
    <ContainerQuestion>
      <Timer 
        timer={timer} 
        callback={() => handleInterval()}
      />
      {renderQuestionText}
      <ContainerButtons>
        {renderAnswers}
      </ContainerButtons>
    </ContainerQuestion>
  )

}

export default QuestionContainer;