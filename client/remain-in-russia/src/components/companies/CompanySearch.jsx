import { useState, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Dropdown from "../layout/Dropdown";
import BadgeList from "../layout/BadgeList";

function CompanySearch(props) {
  const [text, setText] = useState("");
  const inputRef = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();

  const handleChange = (e) => {
    inputRef.current.style.backgroundColor = "rgb(229, 231, 235)";
    setText(e.target.value);
  };

  const findCompaniesHandler = async (e) => {
    e.preventDefault();

    if (text === "") {
      // make input red error color
      inputRef.current.style.backgroundColor = "#F76E85";
      // paint input form to standart color
      setTimeout(
        () => (inputRef.current.style.backgroundColor = "rgb(229, 231, 235)"),
        3000
      );
    } else {
      const category = searchParams.get("category");

      // redirect to base page with category condition
      navigate(
        category === null
          ? `/?name=${text}`
          : `?name=${text}&category=${category}`
      );
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
                <BadgeList />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompanySearch;
