import {
  INCREASE,
  DECREASE,
  SECONDARY_VALUE_CHANGE,
  SET_COUNTER,
  ADD_TO_COUNTER,
} from "../actions/counterActions";

const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case SECONDARY_VALUE_CHANGE:
      return { ...state, secondaryValue: action.payload };
    case SET_COUNTER:
      return { ...state, count: state.secondaryValue, secondaryValue: 0 };
    case ADD_TO_COUNTER:
      return {
        ...state,
        count: state.count + state.secondaryValue,
        secondaryValue: 0,
      };
    default:
      return state;
  }
};

export default counterReducer;
