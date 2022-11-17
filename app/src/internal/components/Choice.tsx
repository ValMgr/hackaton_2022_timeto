import React from 'react';

interface IProps {
  children: React.ReactNode;
  selected: boolean;
  disabled: boolean;
  callback: () => void;
  color: string;
}

function Choice({ children, selected, disabled, callback, color }: IProps) {
  return (
    <button data-voted={selected} disabled={disabled} onClick={callback} className={'vote_choice'} style={{ backgroundColor: color }}>
      {children}
    </button>
  );
}

export default Choice;
