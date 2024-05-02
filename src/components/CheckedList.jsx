import CurrentStatus from './CurrentStatus';
const CheckedList = ({ list }) => {
  return (
    <>
      {list.map((charge, index) => {
        return <CurrentStatus key={index} />;
      })}
    </>
  );
};
export default CheckedList;
