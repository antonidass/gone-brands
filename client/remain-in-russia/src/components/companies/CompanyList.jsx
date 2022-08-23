import { useContext } from "react";
import CompanyContext from "../../context/company/CompanyContext";
import CompanyItem from "./CompanyItem";
import Spinner from "../layout/Spinner";

export default function CompanyList() {
  const { companies, loading, dispatch } = useContext(CompanyContext);

  

  return !loading ? (
    <div className="grid grid-cols-1 gap-2 sm:gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {companies.map((item) => (
        <CompanyItem key={item.id} listItem={item} />
      ))}
    </div>
  ) : (
    <Spinner />
  );
}
