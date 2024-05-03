import CurrentStatus from './CurrentStatus';

const CheckedList = ({ list, setList, month }) => {
  return (
    <>
      {list.map((charge, index) => {
        return (
          <CurrentStatus
            key={index}
            list={list}
            setList={setList}
            index={index}
            month={month}
          />
        );
      })}
    </>
  );
};
export default CheckedList;
