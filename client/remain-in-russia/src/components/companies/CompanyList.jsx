import { useContext, useEffect } from "react";
import CompanyContext from "../../context/company/CompanyContext";
import { getCompanies } from "../../context/company/CompanyActions";

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
        <div className="flex flex-row" key={item.id}>
          <img
            className="xl:w-30 sm:w-8 md:w-12 lg:w-14 xs:w-10"
            src={`/assets/companies_logo/${item.company.image_url}.svg`}
          />
          {item.company.name}
        </div>
      ))}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}
