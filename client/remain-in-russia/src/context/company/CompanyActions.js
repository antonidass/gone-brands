const COMPANIES_URL = process.env.REACT_APP_COMPANIES_URL;

export const getCompanies = async () => {
  const response = await fetch(COMPANIES_URL);
  const data = await response.json();
  return data;
};
