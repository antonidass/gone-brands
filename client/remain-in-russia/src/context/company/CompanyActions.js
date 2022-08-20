// const COMPANIES_URL = process.env.REACT_APP_COMPANIES_URL;
// const COMPANY_URL = process.env.REACT_APP_COMPANY_URL;

const COMPANIES_URL = "https://remain-in-russia.herokuapp.com/api/v1";
// const COMPANY_URL = process.env.REACT_APP_COMPANY_URL;

export const getCompanies = async () => {
  const response = await fetch(COMPANIES_URL, { mode: "no-cors" });
  const data = await response.json();
  return data;
};

export const getCompany = async (id) => {
  const response = await fetch(`${COMPANIES_URL}/${id}`, { mode: "no-cors" });
  const data = await response.json();
  return data;
};
