const badgeReducer = (state, action) => {
  switch (action.type) {
    case "SET_BADGE_FILTER":
      return {
        ...state,
        badgeFilterText: action.text,
        badgeFilterType: action.badgeType,
        badgeFilterEnabled: action.enabled,
      };
    case "SET_BADGE_FINDER":
      return {
        ...state,
        badgeFinderText: action.text,
        badgeFinderType: action.badgeType,
        badgeFinderEnabled: action.enabled,
      };
    case "DISABLE_FINDER":
      return {
        ...state,
        badgeFinderEnabled: false,
      };
    case "DISABLE_FILTER":
      return {
        ...state,
        badgeFilterEnabled: false,
      };
    default:
      return state;
  }
};

export default badgeReducer;
