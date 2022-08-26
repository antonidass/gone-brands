const companyReducer = (state, action) => {
  switch (action.type) {
    case "GET_COMPANIES":
      return {
        ...state,
        companies: action.payload,
        loading: false,
      };
    case "GET_COMPANY":
      return {
        ...state,
        company: action.payload,
        loading: false,
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "RESET_LOADING":
      return {
        ...state,
        loading: false,
      };
    case "CLEAR_COMPANIES":
      return {
        ...state,
        isCleared: true,
      };
    case "FILL_COMPANIES":
      return {
        ...state,
        isCleared: false,
      };
    case "SET_Y_POSITION":
      return {
        ...state,
        positionY: action.payload,
      };
    case "SET_SELECTED_ITEM":
      return {
        ...state,
        selectedItemSearch: action.payload,
      };
    default:
      return state;
  }
};

export default companyReducer;
