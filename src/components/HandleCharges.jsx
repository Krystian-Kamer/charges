import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';

const HandleCharges = ({ setIsModalActive, isModalActive }) => {
  return (
    <>
      <div className='flex-center items-center mt-3'>
        <button
          className='relative flex text-black text-3xl group rounded-full border-2 border-black hover:scale-110'
          onClick={() => setIsModalActive(!isModalActive)}
        >
          {isModalActive ? <IoRemoveOutline /> : <IoAddOutline />}
          <span className='absolute opacity-0 ml-6 group-hover:opacity-100 group-hover:ml-12 text-lg duration-500 capitalize'>
            zarządzaj
          </span>
        </button>
      </div>
    </>
  );
};
export default HandleCharges;
