import { useState } from 'react';

const CurrentStatus = () => {
  const [isPaid, setIsPaid] = useState('x');

  const handleClick = () => {
    setIsPaid(isPaid === 'ok' ? 'x' : 'ok');
  };

  return (
    <button
      className='flex-center items-center py-1 w-full bg-transparent border border-black text-el'
      onClick={handleClick}
    >
      <p className={isPaid === 'x' ? 'opacity-0' : 'opacity-100'}>{isPaid}</p>
    </button>
  );
};
export default CurrentStatus;
