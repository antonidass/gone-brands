// const COMPANIES_URL = process.env.REACT_APP_COMPANIES_URL;
// const COMPANY_URL = process.env.REACT_APP_COMPANY_URL;
import axios from "axios";

const COMPANIES_URL = "";

// const COMPANIES_URL = "https://remain-in-russia.herokuapp.com/api/v1";
// const COMPANY_URL = process.env.REACT_APP_COMPANY_URL;
// "proxy": "https://remain-in-russia.herokuapp.com/api/v1",
const github = axios.create({
  baseURL: COMPANIES_URL,
});

export const getCategories = async () => {
  const response = await fetch(`${COMPANIES_URL}/categories`);
  const data = await response.json();
  return data;
};

export const getCompanies = async () => {
  const response = await fetch(`${COMPANIES_URL}/listCompanies`);

  const data = await response.json();
  return data;
};

export const getCompany = async (id) => {
  const response = await fetch(`${COMPANIES_URL}/listCompanies/${id}`);
  const data = await response.json();
  return data;
};

// Get search results
export const searchCompanies = async (text) => {
  const params = new URLSearchParams({
    name: text,
  });
  const url = `http://localhost:8080/api/v1/search/listCompanies?${params}`;
  const response = await github.get(url);
  return response.data;
};
