const Modal = ({ listOfCharges }) => {
  console.log(listOfCharges);
  return (
    <form className='absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 flex flex-col items-center z-10 p-8 min-w-32 backdrop-blur-lg rounded-3xl border-2 border-black'>
      {listOfCharges.map((charge, index) => {
        return (
          <p key={index} className='pb-2'>
            {charge.name}
          </p>
        );
      })}
      <input type='text' className='w-3/4' />
    </form>
  );
};
export default Modal;
