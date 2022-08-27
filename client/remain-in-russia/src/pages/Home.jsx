import { useContext, useEffect } from "react";
import CompanyList from "../components/companies/CompanyList";
import CompanySearch from "../components/companies/CompanySearch";
import CompanyContext from "../context/company/CompanyContext";
import { useParams } from "react-router-dom";
import BadgeContext from "../context/badge/BadgeContext";
import { categoryDict, getKeyByValue } from "../utils/CategoryData";

function Home(props) {
  const { positionY, dispatch, companies } = useContext(CompanyContext);
  const { badgeDispatch } = useContext(BadgeContext);

  const params = useParams();

  useEffect(() => {
    const getCompanyData = () => {
      if (params.id) {
        const filteredCompanies = companies.filter(
          (comp) => getKeyByValue(comp.company.sector) === params.id
        );
        dispatch({
          type: "GET_FILTERED_COMPANIES",
          payload: filteredCompanies,
        });
        badgeDispatch({
          type: "SET_BADGE_FILTER",
          text: categoryDict[params.id],
          badgeType: "badge-neutral",
          enabled: true,
        });
      } else {
        dispatch({ type: "GET_FILTERED_COMPANIES", payload: companies });
        badgeDispatch({
          type: "SET_BADGE_FILTER",
          text: "",
          badgeType: "badge-neutral",
          enabled: false,
        });
      }
    };

    getCompanyData();
  }, [params.id]);

  useEffect(() => {
    window.scrollTo(0, positionY);
  }, []);

  return (
    <div className="animate-fade-in-down">
      <CompanySearch />
      <CompanyList />
    </div>
  );
}

export default Home;
