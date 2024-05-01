import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';

const HandleCharges = ({ setIsModalActive, isModalActive }) => {
  return (
    <>
      <div className='relative group flex-center items-center mt-3'>
        <button
          className='text-black text-3xl rounded-full border-2 border-black hover:scale-110'
          onClick={() => setIsModalActive(!isModalActive)}
        >
          {isModalActive ? <IoRemoveOutline /> : <IoAddOutline />}
        </button>
        <div className='absolute opacity-0 ml-32 group-hover:opacity-100 group-hover:ml-36 duration-500 capitalize font-medium'>
          zarządzaj
        </div>
      </div>
    </>
  );
};
export default HandleCharges;
