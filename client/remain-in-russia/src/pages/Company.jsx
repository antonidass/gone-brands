import React, { useContext, useEffect, useState } from "react";
import CompanyContext from "../context/company/CompanyContext";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { getCompany } from "../context/company/CompanyActions";
import Spinner from "../components/layout/Spinner";
import Flag from "react-world-flags";
import { useScrollPosition } from "react-use-scroll-position";

function Company(props) {
  const { company, loading, dispatch } = useContext(CompanyContext);
  const params = useParams();
  const [isExist, setIsExist] = useState(true);
  const { y } = useScrollPosition();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getCompanyData = async () => {
      const companyData = await getCompany(params.id);

      if (!companyData.id) {
        setIsExist(false);
        dispatch({ type: "RESET_LOADING" });
        return;
      }

      dispatch({ type: "SET_Y_POSITION", payload: y });
      setIsExist(true);
      dispatch({ type: "GET_COMPANY", payload: companyData });
    };

    getCompanyData();
  }, [dispatch, params.id]);

  const { dateLeft, comment, newsUrl, company: companyItem } = company;

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateLeftLoc = new Date(dateLeft).toLocaleString("ru-RU", options);

  if (loading) {
    return <Spinner />;
  }

  if (!isExist) {
    return <Navigate to="/notfound" />;
  }

  if (!companyItem) {
    return;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12 px-4 animate-fade-in-down">
        <div className="flex flex-row ">
          <div className="w-16 h-16 sm:w-60 sm:h-60  rounded-full shadow-lg shadow-neutral">
            <img
              className="mt-2 sm:mt-8"
              src={`/assets/companies_logo/${companyItem.imageUrl}.svg`}
              alt=""
            />
          </div>

          <div className="flex-1">
            <h1 className="text-center font-bold text-lg sm:text-4xl">
              {companyItem.name}
            </h1>
            <p className="text-center opacity-50">{companyItem.description}</p>
            <p className="text-center opacity-30">
              Покинула страну {dateLeftLoc}
            </p>

            <div className="flex flex-row justify-center">
              <p className="text-center opacity-30">{companyItem.sector}</p>
              <div
                className="tooltip  tooltip-bottom"
                data-tip={companyItem.countryName}
              >
                <Flag
                  className="w-4 sm:w-8 opacity-30 ml-4"
                  code={companyItem.countryCode}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 sm:mt-10">
          <a
            href={newsUrl}
            target="_blank"
            className="text-md sm:text-2xl font-bold link"
          >
            Официальный комментарий
          </a>
          <p className="opacity-70 mt-2 sm:mt-4">{comment}</p>
        </div>

        <div className="mt-12">
          <div
            onClick={() => navigate(-1)}
            className="btn btn-neutral sm:btn-lg"
          >
            Назад
          </div>
        </div>
      </div>
    </>
  );
}

export default Company;
