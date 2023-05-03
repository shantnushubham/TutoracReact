import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { count, handleClick } = useCounter();

  return (
    <div>
      <h2 className="ui header">The count is: {count}</h2>
      <button className="ui secondary button" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default Counter;
