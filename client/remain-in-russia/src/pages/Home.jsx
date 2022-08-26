import { useContext, useEffect } from "react";
import CompanyList from "../components/companies/CompanyList";
import CompanySearch from "../components/companies/CompanySearch";
import CompanyContext from "../context/company/CompanyContext";
import { useParams } from "react-router-dom";
import { getCompanies } from "../context/company/CompanyActions";
//todo add to database
const categoryDict = {
  Технологии: "1",
  Авто: "2",
  Сервисы: "3",
  Общепит: "4",
  Логистика: "5",
  Одежда: "6",
  Потребление: "7",
  Финансы: "8",
  "Развлечения и игры": "9",
};

function Home(props) {
  const { positionY, dispatch } = useContext(CompanyContext);

  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, positionY);
  }, []);

  useEffect(() => {
    const getCompanyData = async () => {
      dispatch({ type: "SET_LOADING" });
      const companiesList = await getCompanies();

      if (params.id) {
        const filteredCompanies = companiesList.filter(
          (comp) => categoryDict[comp.company.sector] === params.id
        );
        dispatch({ type: "GET_COMPANIES", payload: filteredCompanies });
      } else {
        dispatch({ type: "GET_COMPANIES", payload: companiesList });
      }
    };

    getCompanyData();
  }, [params.id]);

  return (
    <div className="animate-fade-in-down">
      <CompanySearch />
      <CompanyList />
    </div>
  );
}

export default Home;
