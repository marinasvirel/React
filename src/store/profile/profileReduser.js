const initialState = {
  showName: true,
  name: "Jane",
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case "EXAMPLE_ACTION":
      return {
        ...state,
        showName: !state.showName,
      };

    default:
      return state;
  }
};

export default profileReduser;
