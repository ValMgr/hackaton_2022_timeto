import { useState, useEffect } from 'react';

import { useAppContext } from '@/internal/providers/AppProvider';
import Choice from '@/internal/components/Choice';

const choices = ['Blue', 'Red', 'Green', 'Yellow'];

function Vote() {
  const [selected, setSelected] = useState<number>(-1);
  const [result, setResult] = useState<number>(-1);
  const [vote, setVote] = useState<number>(0);
  const { users, socket } = useAppContext();

  useEffect(() => {
    socket.on('voteList', (vote: number) => {
      setVote(vote);
    });

    socket.on('result', (result: number) => {
      setResult(result);
    });

    return () => {
      socket.off('voteList');
    };
  }, []);

  useEffect(() => {
    if (selected !== -1) {
      socket.emit('vote', selected);
    }
  }, [selected]);

  return (
    <>
      <div className='vote'>
        <Choice selected={selected === 0} disabled={result !== -1} callback={() => setSelected(0)} color={'#144491'}>
          {choices[0]}
        </Choice>

        <Choice selected={selected === 1} disabled={result !== -1} callback={() => setSelected(1)} color={'#911414'}>
          {choices[1]}
        </Choice>

        <Choice selected={selected === 2} disabled={result !== -1} callback={() => setSelected(2)} color={'#1b9114'}>
          {choices[2]}
        </Choice>

        <Choice selected={selected === 3} disabled={result !== -1} callback={() => setSelected(3)} color={'#cdb100'}>
          {choices[3]}
        </Choice>
      </div>
      <div>
        <p>{result === -1 ? `Vote: ${vote} / ${users.length}` : `Result: ${choices[result]}`}</p>
      </div>
    </>
  );
}

export default Vote;
