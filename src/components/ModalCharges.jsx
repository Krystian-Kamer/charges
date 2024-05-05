import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const ModalCharges = ({ list, setList }) => {
  const [renamedCharges, setRenamedCharges] = useState(list);

  const deleteCharge = (e, index) => {
    e.preventDefault();
    const newList = [...list];
    const filteredList = newList.filter((charge, id) => {
      return id !== index;
    });
    console.log(newList);
    toast.success(`Usunięto ${newList[index].name} z opłat`);
    setList(filteredList);
    setRenamedCharges(filteredList);
  };

  const changeName = (e, index) => {
    const newList = [...renamedCharges];
    const newChargeName = e.target.value;
    newList[index].name = newChargeName;
    setRenamedCharges(newList);
    setList(newList);
  };

  return (
    <>
      {list.map((charge, index) => {
        return (
          <div key={index} className='flex'>
            <input
              type='text'
              className='my-1 text-el bg-transparent border-2 border-black rounded-lg pl-3 focus:outline-none focus:bg-yellow-300'
              value={charge.name}
              onChange={(e) => changeName(e, index)}
            />
            <button
              type='button'
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
