import { createContext, useReducer } from "react";
import CompanyReducer from "./CompanyReducer";
import { useEffect, useContext } from "react";
import { getCategories, getCompanies } from "./CompanyActions";

const CompanyContext = createContext();

export function CompanyProvider({ children }) {
  const initialState = {
    companies: [],
    categories: [],
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

      const categoriesList = await getCategories();
      dispatch({ type: "GET_CATEGORIES", payload: categoriesList });
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
