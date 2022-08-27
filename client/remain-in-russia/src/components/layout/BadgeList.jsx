import { useContext } from "react";
import { useParams } from "react-router-dom";
import BadgeContext from "../../context/badge/BadgeContext";
import CompanyContext from "../../context/company/CompanyContext";
import { getKeyByValue } from "../../utils/CategoryData";
import Badge from "./Badge";

export default function BadgeList({ text }) {
  const {
    badgeFilterText,
    badgeFilterType,
    badgeFilterEnabled,
    badgeFilterMode,
    badgeFinderText,
    badgeFinderType,
    badgeFinderEnabled,
    badgeFinderMode,
    badgeDispatch,
  } = useContext(BadgeContext);

  const { dispatch, companies } = useContext(CompanyContext);
  const params = useParams();

  const clearFiltering = async (mode) => {
    // inputRef.current.style.backgroundColor = "rgb(229, 231, 235)";
    let filtered = [];
    const id = params.id ? params.id : "0";

    if (mode == "filter") {
      filtered = await companies.filter(
        (comp) =>
          comp.company.name.toLowerCase().includes(text.toLowerCase()) === true
      );
      badgeDispatch({ type: "DISABLE_FILTER" });
    } else if (mode == "finder") {
      if (id !== "0") {
        filtered = await companies.filter(
          (comp) => getKeyByValue(comp.company.sector) === id
        );
      } else {
        filtered = [...companies];
      }
      badgeDispatch({ type: "DISABLE_FINDER" });
    }

    dispatch({ type: "FILL_COMPANIES" });
    dispatch({
      type: "GET_FILTERED_COMPANIES",
      payload: filtered,
    });
    dispatch({ type: "CLEAR_COMPANIES" });
  };

  return (
    <div className="flex flex-row py-4">
      <div className="mr-4">
        <Badge
          clearFiltering={clearFiltering}
          badgeText={badgeFilterText}
          badgeType={badgeFilterType}
          isEnabled={badgeFilterEnabled}
          mode={badgeFilterMode}
        />
      </div>
      <div>
        <Badge
          clearFiltering={clearFiltering}
          badgeText={badgeFinderText}
          badgeType={badgeFinderType}
          isEnabled={badgeFinderEnabled}
          mode={badgeFinderMode}
        />
      </div>
    </div>
  );
}
