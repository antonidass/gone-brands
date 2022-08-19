const companyReducer = (state, action) => {
  switch (action.type) {
    case "GET_COMPANIES":
      return {
        ...state,
        companies: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default companyReducer;
