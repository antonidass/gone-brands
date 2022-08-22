import React from "react";
import PropTypes from "prop-types";
import CompanyList from "../components/companies/CompanyList";
import CompanySearch from "../components/companies/CompanySearch";

function Home(props) {
  return (
    <div className="animate-fade-in-down">
      <CompanySearch />
      <CompanyList />
    </div>
  );
}

Home.propTypes = {};

export default Home;
