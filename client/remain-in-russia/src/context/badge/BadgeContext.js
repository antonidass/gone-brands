import { createContext, useReducer } from "react";
import BadgeReducer from "./BadgeReducer";

const BadgeContext = createContext();

export function BadgeProvider({ children }) {
  const initialState = {
    badgeFilterText: "",
    badgeFilterType: "badge-neutral",
    badgeFilterEnabled: false,
    badgeFilterMode: "filter",

    badgeFinderText: "",
    badgeFinderType: "badge-info",
    badgeFinderEnabled: false,
    badgeFinderMode: "finder",
  };

  const [state, badgeDispatch] = useReducer(BadgeReducer, initialState);

  return (
    <BadgeContext.Provider
      value={{
        ...state,
        badgeDispatch,
      }}
    >
      {children}
    </BadgeContext.Provider>
  );
}

export default BadgeContext;
