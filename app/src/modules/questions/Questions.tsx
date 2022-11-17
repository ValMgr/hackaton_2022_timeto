import { useEffect, useMemo, useState } from 'react';

import Button from '@/modules/questions/components/Button';
import Timer from '@/modules/questions/components/Timer';
import {
  QuestionTitle,
  QuestionText,
  ContainerButtons,
  ContainerQuestion,
} from '@/modules/questions/components/styledComponents';
import { useGameContext } from '@/core/providers/GameProvider';

function QuestionContainer() {
  const { question, updateScore } = useGameContext();
  const [selected, setSelected] = useState<number>(-1);

  const renderQuestionText: JSX.Element | null = useMemo(() => {
    if (!question) {
      return null;
    }

    return (
      <>
        <QuestionTitle>{question.title}</QuestionTitle>
        <QuestionText>{question.question}</QuestionText>
      </>
    );
  }, [question]);

  const renderAnswers: JSX.Element[] | null = useMemo(() => {
    if (!question) {
      return null;
    }

    const handleClick = (index: number, answer: Object) => {
      setSelected(index);
      updateScore(answer);

      // @TODO: Send vote to server
    };

    return question.answers.map((answer, index) => (
      <Button
        key={`answer_${answer.id}`}
        label={answer.text}
        callback={() => handleClick(index, answer.gauges)}
        selected={selected === index}
      />
    ));
  }, [question, selected]);

  return (
    <ContainerQuestion>
      <Timer />
      {renderQuestionText}
      <ContainerButtons>{renderAnswers}</ContainerButtons>
    </ContainerQuestion>
  );
}

export default QuestionContainer;
