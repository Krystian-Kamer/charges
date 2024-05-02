import { MdDelete } from 'react-icons/md';

const ModalCharges = ({ list, setList }) => {

  const deleteCharge = (e, index) => {
    e.preventDefault();
    const newList = [...list];
    const filteredList = newList.filter((charge, id) => id !== index);
    return setList(filteredList);
  };

  console.log(list);
  return (
    <>
      {list.map((charge, index) => {
        return (
          <div key={index} className='flex'>
            <input
              type='text'
              className='my-1 text-el bg-transparent border-2 border-black rounded-lg pl-3 focus:outline-none focus:bg-yellow-300'
              defaultValue={charge.name}
            />
            <button
              onClick={(e) => deleteCharge(e, index)}
              className='pl-3 text-lg sm:text-2xl'
            >
              <MdDelete />
            </button>
          </div>
        );
      })}
    </>
  );
};
export default ModalCharges;
