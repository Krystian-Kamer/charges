import { toast } from 'react-toastify';
import { months } from '../data';

const CurrentStatus = ({ list, setList, index, month }) => {
  const isPaid = list[index]['paid' + month];

  const handleClick = () => {
    const newList = [...list];
    newList[index]['paid' + month] = !isPaid;
    isPaid
      ? toast.warning(
          `Usunięto opłatę za ${newList[index].name} w miesiacu ${months[month]}`
        )
      : toast.success(
          `Opłacono ${newList[index].name} w miesiącu ${months[month]}`
        );
    setList(newList);
  };

  return (
    <button
      className='flex-center items-center py-1 w-full bg-transparent border border-black text-el'
      onClick={(e) => handleClick(e)}
    >
      <p className={isPaid ? 'opacity-100' : 'opacity-0'}>
        {isPaid ? 'ok' : 'not ok'}
      </p>
    </button>
  );
};
export default CurrentStatus;
