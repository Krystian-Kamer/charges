import CurrentStatus from './CurrentStatus';
const CheckedList = ({ listOfCharges }) => {
  return (
    <>
      {listOfCharges.map((charge, index) => {
        return <CurrentStatus key={index} />;
      })}
    </>
  );
};
export default CheckedList;
