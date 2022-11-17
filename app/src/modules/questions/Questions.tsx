import { useMemo, useState, useEffect } from 'react';

import Button from '@/modules/questions/components/Button';
import Timer from '@/modules/questions/components/Timer';
import {
  QuestionTitle,
  QuestionText,
  ContainerButtons,
  ContainerQuestion,
} from '@/modules/questions/components/styledComponents';
import { useGameContext } from '@/core/providers/GameProvider';
import { useAppContext } from '@/core/providers/AppProvider';
import { Answer } from '@/types/question';

function QuestionContainer() {
  const { question } = useGameContext();
  const [selected, setSelected] = useState<number>(-1);
  const [answer, setAnswer] = useState<Answer | null>();
  const { socket } = useAppContext();

  useEffect(() => {
    socket.on('result', () => {
      setSelected(-1);
      setAnswer(null);
    });
  }, []);

  useEffect(() => {
    if (answer) {
      socket.emit('vote', answer);
    }

    return () => {
      socket.off('vote');
    };
  }, [answer]);

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

    const handleClick = (index: number, answer: Answer) => {
      setSelected(index);
      setAnswer(answer);
    };

    return question.answers.map((answer, index) => (
      <Button
        key={`answer_${answer.id}`}
        label={answer.text}
        callback={() => handleClick(index, answer)}
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
