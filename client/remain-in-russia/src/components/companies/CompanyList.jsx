import { useContext, useEffect } from "react";
import CompanyContext from "../../context/company/CompanyContext";
import { getCompanies } from "../../context/company/CompanyActions";
import CompanyItem from "./CompanyItem";

export default function CompanyList() {
  const { companies, loading, dispatch } = useContext(CompanyContext);

  useEffect(() => {
    const getCompaniesHandle = async () => {
      dispatch({ type: "SET_LOADING" });
      const companies = await getCompanies();
      dispatch({ type: "GET_COMPANIES", payload: companies });
    };

    getCompaniesHandle();
  }, []);

  return !loading ? (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {companies.map((item) => (
        <CompanyItem key={item.id} listItem={item} />
      ))}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}
