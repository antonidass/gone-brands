import { useContext } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import BadgeContext from "../../context/badge/BadgeContext";
import CompanyContext from "../../context/company/CompanyContext";
import Badge from "./Badge";

export default function BadgeList() {
  let navigate = useNavigate();
  const { dispatch } = useContext(CompanyContext);

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

  const [searchParams, setSearchParams] = useSearchParams();

  const clearFiltering = (mode) => {
    const category = searchParams.get("category");
    const name = searchParams.get("name");

    if (mode == "filter") {
      searchParams.delete("category");
      setSearchParams(searchParams);
      navigate(name === null ? `/` : `/?name=${name}`);
      badgeDispatch({ type: "DISABLE_FILTER" });
      dispatch({
        type: "SET_SELECTED_ITEM",
        payload: "0",
      });
    } else if (mode == "finder") {
      searchParams.delete("name");
      setSearchParams(searchParams);
      navigate(category === null ? `/` : `/?category=${category}`);
      badgeDispatch({ type: "DISABLE_FINDER" });
    }
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
