import { searchCompanies } from "../../context/company/CompanyActions";
import CompanyContext from "../../context/company/CompanyContext";
import { useState, useContext } from "react";
import { getCompanies } from "../../context/company/CompanyActions";

function CompanySearch(props) {
  const [text, setText] = useState("");
  const { companies, dispatch } = useContext(CompanyContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === "") {
      //   setAlert("Please enter something", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      const companies = await searchCompanies(text);
      dispatch({ type: "GET_COMPANIES", payload: companies });
      setText("");
    }
  };

  const getCompaniesHandle = async () => {
    dispatch({ type: "SET_LOADING" });
    const companiesList = await getCompanies();
    dispatch({ type: "GET_COMPANIES", payload: companiesList });
  };

  return (
    <div
      className="grid grid-cols-1 xl:grid-cols-2 
      lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8"
    >
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {companies.length > 0 && (
        <div>
          <button onClick={getCompaniesHandle} className="btn btn-ghost btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default CompanySearch;
