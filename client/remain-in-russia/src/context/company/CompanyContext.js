import { createContext, useReducer } from "react";
import CompanyReducer from "./CompanyReducer";
import { useEffect, useContext } from "react";
import { getCompanies } from "./CompanyActions";

const CompanyContext = createContext();

export function CompanyProvider({ children }) {
  const initialState = {
    companies: [],
    company: {},
    loading: false,
    isCleared: true,
    positionY: 0,
  };

  const [state, dispatch] = useReducer(CompanyReducer, initialState);

  useEffect(() => {
    const getCompaniesHandle = async () => {
      dispatch({ type: "SET_LOADING" });
      const companiesList = await getCompanies();
      dispatch({ type: "GET_COMPANIES", payload: companiesList });
    };
    getCompaniesHandle();
  }, []);

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
