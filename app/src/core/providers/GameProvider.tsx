import { useState, useContext, createContext, useMemo } from 'react';

import { GAUGE_MAX } from '@/core/constants/gauges';

export type scoreType = {
	social: number;
	environmental: number;
	economy: number;
}

export type GameContextType = {
	users: string[];
	setUsers: (users: string[]) => void;
	score: scoreType;
	updateScore: (modifier: {social?: number, environmental?: number, economy?: number}) => void;
};


const GameContext = createContext<GameContextType>({
	users: [],
	setUsers: () => {},
	score: {
		social: 0,
		environmental: 0,
		economy: 0,
	},
	updateScore: () => {},
});

interface IProps {
	children: React.ReactNode;
}

export const GameProvider = ({ children }: IProps) => {
  const [users, setUsers] = useState<string[]>([]);
  const [progression, setProgression] = useState<number>(0);
	const [score, setScore] = useState<scoreType>({ social: 0, environmental: 0, economy: 0 });

	// function checkLimit(value: number, score: number) {
	// 	if (value >= GAUGE_MAX) return GAUGE_MAX;
	// 	if (value <= -GAUGE_MAX) return -GAUGE_MAX;
	// 	return value;
	// }

	const updateScore = (modifier: { social?: number, environmental?: number, economy?: number }) => {
		// @TODO: check if score is between - GAUGE_MAX and GAUGE_MAX before updating
		
		setScore((score) => ({
			social: score.social + (modifier.social || 0),
			environmental: score.environmental + (modifier.environmental || 0),
			economy: score.economy + (modifier.economy || 0),
		}));
	}


  const value = useMemo(() => {
    return {
			users,
			setUsers,
      progression,
			setProgression,
			score,
			updateScore
    }
  }, [users, setUsers, progression, setProgression, score, setScore]);

	return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export const useGameContext = () => useContext(GameContext)

export default {GameProvider, useGameContext};