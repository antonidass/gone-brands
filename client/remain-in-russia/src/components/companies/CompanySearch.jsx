import { searchCompanies } from "../../context/company/CompanyActions";
import CompanyContext from "../../context/company/CompanyContext";
import { useState, useContext, useRef } from "react";
import { getCompanies } from "../../context/company/CompanyActions";

function CompanySearch(props) {
  const [text, setText] = useState("");
  const { dispatch, isCleared } = useContext(CompanyContext);
  const inputRef = useRef();

  const handleChange = (e) => {
    inputRef.current.style.backgroundColor = "rgb(229, 231, 235)";
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === "") {
      inputRef.current.style.backgroundColor = "#F76E85";
    } else {
      dispatch({ type: "FILL_COMPANIES" });
      dispatch({ type: "SET_LOADING" });
      const companies = await searchCompanies(text);
      dispatch({ type: "GET_COMPANIES", payload: companies });
      setText("");
    }
  };

  const getCompaniesHandle = async () => {
    inputRef.current.style.backgroundColor = "rgb(229, 231, 235)";

    if (isCleared) {
      return;
    }

    dispatch({ type: "CLEAR_COMPANIES" });
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
                ref={inputRef}
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
                Поиск
              </button>
            </div>
          </div>
        </form>
      </div>

      <div>
        <button onClick={getCompaniesHandle} className="btn btn-ghost btn-lg">
          Очистить
        </button>
      </div>
    </div>
  );
}

export default CompanySearch;
