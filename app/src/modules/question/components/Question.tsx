import Button from "./Button";
import { useEffect, useMemo, useState } from 'react'

import getQuestion from "../services/api";

function Question() {
  
  let [question, setQuestion] = useState<null | []>(null);

  
  useEffect(() => {
    if(!question){
     (async () => {
      setQuestion(await getQuestion('/src/json/question.json'));
    })();
  }
  console.log(question);
  }, [question])

  

  const renderAnswers: JSX.Element[] | null = useMemo(() => {
    if(!question) {
      return null;
    }

    return question.answers.map(answer => <Button key={`answer_${answer.id}`} answer={answer.text} />)
  }, [question]);





  return(
    <>
      <h2>Question : </h2>
      <p>P</p>
      <h2>Réponses: </h2>
      {renderAnswers}
    </>
  )

}

export default Question