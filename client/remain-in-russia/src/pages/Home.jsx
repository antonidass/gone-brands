import React from "react";
import PropTypes from "prop-types";
import CompanyList from "../components/companies/CompanyList";

function Home(props) {
  return (
    <div className="animate-fade-in-down">
      <CompanyList />
    </div>
  );
}

Home.propTypes = {};

export default Home;
