import { useReducer } from "react";
import {
  INCREASE,
  DECREASE,
  SECONDARY_VALUE_CHANGE,
  SET_COUNTER,
  ADD_TO_COUNTER,
} from "../actions/counterActions";
import counterReducer from "../reducers/counterReducer";

const [SET, ADD] = ["SET", "ADD"];

const Counter = () => {
  /*
  1. state is a state variable.
  2. dispatch is a function that will be used to modify the state.
    2.1. Dispatch takes some information about state change.
    2.2. It calls the reducer function with this information to make the state change,
      ultimately.
  3. reducer is a function that dispatch will use to modify the state.
    3.1. It takes 2 arguments.
    3.2. 1st argument is the current value of state
    3.3. 2nd argument is an ACTION which contains instructions to change the state.
    3.4. The returned value from this function is the new value of state.
  4. initialValue is a variable that is going to store the initial value of state.
  5. action is an object, which is passed to dispatch to perform state change on the
     basis of reducer.
    5.1. action as 2 key-value pairs.
    5.2. 1st is "type" and it is MANDATORY. It defines what kind of state change 
      needs to be performed.
    5.3. 2nd is "payload" and is OPTIONAL. It contains information that is necessary to perform state 
      change on the basis of type.
  */
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    secondaryValue: 0,
  });

  const { count, secondaryValue } = state;

  // const [count, setCount] = useState(0);
  // const [secondaryValue, setSecondaryValue] = useState(0);

  const increment = () => {
    dispatch({ type: INCREASE });
  };

  const decrement = () => {
    dispatch({ type: DECREASE });
  };

  const handleChange = (e) => {
    let value = parseInt(e.target.value);
    value = value || 0;
    dispatch({ type: SECONDARY_VALUE_CHANGE, payload: value });
  };

  const onFormSubmit = (e, typeOfAction) => {
    e.preventDefault();
    if (typeOfAction === SET) {
      setToValue();
    } else {
      addToCount();
    }
  };

  const setToValue = () => {
    dispatch({ type: SET_COUNTER });
  };

  const addToCount = () => {
    dispatch({ type: ADD_TO_COUNTER });
  };

  return (
    <div>
      <h2 className="ui header">The count is: {count}</h2>
      <button className="ui secondary button" onClick={increment}>
        Increase
      </button>
      <button className="ui secondary button" onClick={decrement}>
        Decrease
      </button>
      <div>
        <form className="counter-form">
          <div className="ui input">
            <input
              type="number"
              placeholder="Enter a value"
              onChange={handleChange}
              value={secondaryValue || ""}
            />
          </div>
          <div className="button-box">
            <button
              className="ui secondary button"
              onClick={(e) => onFormSubmit(e, SET)}
              type="submit"
            >
              Set
            </button>
            <button
              className="ui secondary button"
              onClick={(e) => onFormSubmit(e, ADD)}
              type="submit"
            >
              Add to value
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Counter;
