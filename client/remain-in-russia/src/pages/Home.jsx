import { useContext, useEffect } from "react";
import CompanyList from "../components/companies/CompanyList";
import CompanySearch from "../components/companies/CompanySearch";
import CompanyContext from "../context/company/CompanyContext";

function Home(props) {
  const { positionY } = useContext(CompanyContext);

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
