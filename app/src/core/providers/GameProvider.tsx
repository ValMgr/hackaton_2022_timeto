import { useState, useContext, createContext, useMemo, useEffect } from 'react';

import type { Question } from '@/types/question';
import { useAppContext } from '@/core/providers/AppProvider';
import { GAUGE_MAX } from '@/core/constants/gauges';

export type scoreType = {
  environmental: number;
  social: number;
  economy: number;
};

export type GameContextType = {
  users: string[];
  setUsers: (users: string[]) => void;
  question: Question | null;
  score: scoreType;
  updateScore: (modifier: { environmental?: number; social?: number; economy?: number }) => void;
};

const GameContext = createContext<GameContextType>({
  users: [],
  question: null,
  setUsers: () => {},
  score: {
    environmental: 0,
    social: 0,
    economy: 0,
  },
  updateScore: () => {},
});

interface IProps {
  children: React.ReactNode;
}

const GameProvider = ({ children }: IProps) => {
  const { socket } = useAppContext();
  const [users, setUsers] = useState<string[]>([]);
  const [progression, setProgression] = useState<number>(0);
  const [score, setScore] = useState<scoreType>({ environmental: 0, social: 0, economy: 0 });
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    socket.on('setQuestion', (question: Question) => {
      setQuestion(question);
    });

    return () => {
      socket.off('setQuestion');
    };
  }, []);

  const updateScore = (modifier: { environmental?: number; social?: number; economy?: number }) => {
    setScore((score) => {
      return {
        environmental: getValue(score.environmental, modifier.environmental || 0),
        social: getValue(score.social, modifier.social || 0),
        economy: getValue(score.economy, modifier.economy || 0),
      };
    });
    console.log('updateScore', score);
  };

  const getValue = (v: number, m: number) => {
    if (v + m > GAUGE_MAX) {
      return GAUGE_MAX;
    }
    if (v + m < -GAUGE_MAX) {
      return -GAUGE_MAX;
    }

    return v + m;
  };

  const value = useMemo(() => {
    return {
      users,
      setUsers,
      progression,
      setProgression,
      score,
      updateScore,
      question
    };
  }, [users, setUsers, progression, setProgression, score, setScore, question]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGameContext = () => useContext(GameContext);

export default GameProvider;
