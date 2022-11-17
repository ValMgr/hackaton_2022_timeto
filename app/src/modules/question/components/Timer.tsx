import { useState, useEffect, useMemo } from 'react';

import { useAppContext } from '@/core/providers/AppProvider.js';

import { TimerContainer } from './styledComponents.js';

function Timer(): JSX.Element | null {
  const [time, setTime] = useState<number>(60);
  const { socket } = useAppContext();

  useEffect(() => {

    setTimeout(() => socket.emit('startTimer'), 5000);

    socket.on('setTimer', (time: number) => {
      setTime(time);
    });

    return () => {
      socket.off('setTimer');
    };
  }, []);

  const renderTimer = useMemo(() => {
    if (time <= 0) {
      return null;
    }

    return (
      <TimerContainer>
        <svg width='34' height='35' viewBox='0 0 34 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M15 8.5C7.49436 8.5 5.76302 20.8031 7.71588 26.6617C8.94499 30.3491 13.0583 32.707 16.7589 32.7657C22.2581 32.853 25.6983 31.3017 29.5 27.5C33.0937 23.9063 31.9731 13.6903 27 10.893C24.2258 9.3325 23.6977 9.5 20.5001 9.5M2 7.70838C4.38289 6.51693 9.15442 2.76164 11.5 1.5M8 6C8.58253 7.10033 9.45889 8.03587 10.1345 9.04927M14.5 17.5C15.5 18.5 16.5736 19.6134 17.1838 20.3326C17.4605 20.6586 18.4425 21.984 18.6124 22.0582C18.9393 22.201 24.6179 15.798 25 15.5'
            stroke='#DF6734'
            stroke-width='3'
            stroke-linecap='round'
          />
        </svg>
        <span>{time}</span>
      </TimerContainer>
    );
  }, [time]);

  return renderTimer;
}

export default Timer;
