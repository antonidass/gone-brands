import { createContext, useReducer } from "react";
import CompanyReducer from "./CompanyReducer";

const CompanyContext = createContext();

export function CompanyProvider({ children }) {
  const initialState = {
    companies: [],
    company: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(CompanyReducer, initialState);

  return (
    <CompanyContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
}

export default CompanyContext;
