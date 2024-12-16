export const countReducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    case "MUL":
      return { count: state.count * 2 };
    case "RESET":
      return { count: action.payLoad.resetValue };
    default:
      return state;
  }
};
