import { useContext, useEffect } from "react";
import CompanyList from "../components/companies/CompanyList";
import CompanySearch from "../components/companies/CompanySearch";
import CompanyContext from "../context/company/CompanyContext";
import BadgeContext from "../context/badge/BadgeContext";
import { categoryDict, getKeyByValue } from "../utils/CategoryData";
import { useSearchParams } from "react-router-dom";

function Home(props) {
  const { positionY, dispatch, companies } = useContext(CompanyContext);
  const { badgeDispatch } = useContext(BadgeContext);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getCompanyData = () => {
      const category = searchParams.get("category");
      const name = searchParams.get("name");

      const filteredCompanies = companies.filter(
        (comp) =>
          (category !== null
            ? getKeyByValue(comp.company.sector) === category
            : true) &&
          (name !== null
            ? comp.company.name.toLowerCase().includes(name.toLowerCase())
            : true)
      );

      dispatch({
        type: "GET_FILTERED_COMPANIES",
        payload: filteredCompanies,
      });

      if (category) {
        badgeDispatch({
          type: "SET_BADGE_FILTER",
          text: categoryDict[category],
          badgeType: "badge-primary",
          enabled: true,
        });
      } else {
        badgeDispatch({
          type: "SET_BADGE_FILTER",
          text: "",
          badgeType: "badge-primary",
          enabled: false,
        });
      }
      if (name) {
        badgeDispatch({
          type: "SET_BADGE_FINDER",
          text: name.length > 10 ? name.slice(0, 10) + "..." : name,
          badgeType: "badge-secondary",
          enabled: true,
        });
      } else {
        badgeDispatch({
          type: "SET_BADGE_FINDER",
          text: "",
          badgeType: "badge-secondary",
          enabled: false,
        });
      }
    };
    getCompanyData();
  }, [searchParams, companies]);

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
