import { useEffect, useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = (_e) => {
    setCount(count + 1);
  };

  return {
    count,
    handleClick,
  };
};

export default useCounter;
