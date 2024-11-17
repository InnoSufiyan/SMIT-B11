const bankInitial = {
  balance: 1000,
  accountName: "Sufiyan",
};

export function bankReducer(state = bankInitial, action) {
  console.log(action, "==>> action");
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };

    default:
      return state;
  }
}


