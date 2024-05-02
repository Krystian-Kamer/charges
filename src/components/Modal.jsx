import { IoMdAddCircle } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import ModalCharges from './ModalCharges';

const Modal = ({ list, setList, setIsModalActive }) => {
  const [newCharge, setNewCharge] = useState({ name: '' });

  const addCharge = (e) => {
    if (newCharge.name === '') return;
    e.preventDefault();
    const newList = [...list];
    setList([...newList, newCharge]);
    setNewCharge({ name: '' });
  };

  return (
    <form className='absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 flex flex-col z-10 p-4 sm:p-6 min-w-34 backdrop-blur-2xl rounded-3xl border-2 border-black shadow-[5px_10px_15px_10px_rgba(0,0,0,0.5)]'>
      <button
        type='button'
        onClick={() => setIsModalActive(false)}
        className='text-2xl sm:text-3xl ml-auto text-red-700'
      >
        <IoClose />
      </button>
      <ModalCharges list={list} setList={setList} />
      <div className='flex justify-center'>
        <p className='capitalize text-el pr-3'>add charge</p>
      </div>
      <div className='flex'>
        <input
          type='text'
          className='my-1 text-el bg-transparent border-2 border-black rounded-lg pl-3 focus:outline-none focus:bg-yellow-300'
          value={newCharge.name}
          onChange={(e) => setNewCharge({ name: e.target.value })}
        />
        <button
          type='button'
          onClick={(e) => addCharge(e)}
          className='pl-3 text-lg sm:text-2xl'
        >
          <IoMdAddCircle />
        </button>
      </div>
    </form>
  );
};
export default Modal;
