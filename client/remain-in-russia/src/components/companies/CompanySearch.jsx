import CompanyContext from "../../context/company/CompanyContext";
import { useState, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import BadgeContext from "../../context/badge/BadgeContext";
import Dropdown from "../layout/Dropdown";
import BadgeList from "../layout/BadgeList";
import { getKeyByValue } from "../../utils/CategoryData";

function CompanySearch(props) {
  const params = useParams();
  const [text, setText] = useState("");
  const { dispatch, companies } = useContext(CompanyContext);
  const inputRef = useRef();

  const { badgeDispatch } = useContext(BadgeContext);

  const handleChange = (e) => {
    inputRef.current.style.backgroundColor = "rgb(229, 231, 235)";
    setText(e.target.value);
  };

  const findCompaniesHandler = async (e) => {
    e.preventDefault();

    if (text === "") {
      inputRef.current.style.backgroundColor = "#F76E85";
    } else {
      const id = params.id ? params.id : "0";
      console.log("id = ", id);

      let filtered = [];
      if (id === "0") {
        filtered = await companies.filter(
          (comp) =>
            comp.company.name.toLowerCase().includes(text.toLowerCase()) ===
            true
        );
      } else {
        filtered = await companies.filter(
          (comp) =>
            getKeyByValue(comp.company.sector) === id &&
            comp.company.name.toLowerCase().includes(text.toLowerCase()) ===
              true
        );
      }

      dispatch({ type: "FILL_COMPANIES" });
      dispatch({
        type: "GET_FILTERED_COMPANIES",
        payload: filtered,
      });
      badgeDispatch({
        type: "SET_BADGE_FINDER",
        text: text.length <= 10 ? text : text.slice(0, 10) + "...",
        badgeType: "badge-info",
        enabled: true,
      });
      setText("");
    }
  };

  return (
    <div
      className="grid grid-cols-1 xl:grid-cols-2 
      lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8"
    >
      <div>
        <form onSubmit={findCompaniesHandler}>
          <div className="form-control">
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Поиск..."
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Поиск
              </button>
              <div className="flex flex-row justify-between">
                <Dropdown />
                <BadgeList text={text} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompanySearch;
