const Charges = ({ list }) => {
  return (
    <>
      {list.map((charge, index) => {
        return (
          <div className='py-1 p-el border text-el border-black' key={index}>
            {charge.name}
          </div>
        );
      })}
    </>
  );
};
export default Charges;
