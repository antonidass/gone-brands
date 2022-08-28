import { useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import CompanyContext from "../../context/company/CompanyContext";

export default function () {
  const { dispatch, categories, selectedItemSearch } =
    useContext(CompanyContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name");

  const changeActiveItemHandler = (e) => {
    dispatch({
      type: "SET_SELECTED_ITEM",
      payload: e.target.getAttribute("id_data"),
    });
  };

  return (
    <div className="dropdown dropdown-hover mt-2 flex flex-row justify-between">
      <label tabIndex="0" className="btn opacity-50">
        Сектор
      </label>
      <ul
        tabIndex="0"
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li
          onClick={changeActiveItemHandler}
          className={selectedItemSearch === "0" ? `bg-primary` : undefined}
          key={"0"}
        >
          <Link to={name !== null ? `/?name=${name}` : `/`} id_data="0">
            Любой
          </Link>
        </li>
        {categories.map((category) => (
          <li
            onClick={changeActiveItemHandler}
            key={category.id}
            className={
              selectedItemSearch === category.id.toString()
                ? `bg-primary`
                : undefined
            }
          >
            <Link
              id_data={category.id}
              to={
                name !== null
                  ? `/?name=${name}&category=${category.id}`
                  : `/?category=${category.id}`
              }
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
