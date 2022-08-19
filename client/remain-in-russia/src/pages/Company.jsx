import React, { useContext, useEffect } from "react";
import CompanyContext from "../context/company/CompanyContext";
import { Link, useParams } from "react-router-dom";
import { getCompany } from "../context/company/CompanyActions";

function Company() {
  const { company, loading, dispatch } = useContext(CompanyContext);
  const params = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getCompanyData = async () => {
      const companyData = await getCompany(params.id);
      dispatch({ type: "GET_COMPANY", payload: companyData });
    };

    getCompanyData();
  }, [dispatch, params.id]);

  const {
    id,
    status,
    date_left,
    comment,
    date_back,
    news_url,
    company: companyItem,
  } = company;

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    companyItem && (
      <>
        <div className="w-full mx-auto lg:w-10/12 px-4 animate-fade-in-down">
          <div className="flex flex-row ">
            <div className="w-16 h-16 sm:w-60 sm:h-60  rounded-full shadow-lg shadow-neutral">
              <img
                className="mt-2 sm:mt-8"
                src={`/assets/companies_logo/${companyItem.image_url}.svg`}
                alt=""
              />
            </div>

            <div className="flex-1">
              <h1 className="text-center font-bold text-lg sm:text-4xl">
                {companyItem.name}
              </h1>
              <p className="text-center opacity-50">
                {companyItem.description}
              </p>
              <p className="text-center opacity-30">
                Покинула страну {date_left}
              </p>
              <p className="text-center opacity-30">{companyItem.country}</p>
              <p className="text-center opacity-30">{companyItem.sector}</p>
            </div>
          </div>
          <div className="mt-4 sm:mt-10">
            <a
              href={news_url}
              target="_blank"
              className="text-md sm:text-2xl font-bold link"
            >
              Оффициальный комментарий
            </a>
            <p className="opacity-70 mt-2 sm:mt-4">{comment}</p>
          </div>

          <div className="mt-12">
            <Link to="/" className="btn btn-neutral sm:btn-lg">
              Назад
            </Link>
          </div>
        </div>
      </>
    )
  );
}

export default Company;
