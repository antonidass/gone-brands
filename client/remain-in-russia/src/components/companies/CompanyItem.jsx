import { Link } from "react-router-dom";

export default function CompanyItem({
  listItem: { id, company, status, dateLeft, date_back, newsUrl },
}) {
  return (
    <div className="card shadow-lg shadow-neutral bg-base-200">
      <div
        className="flex flex-row items-center space-x-2 card-body px-4 h-28"
        key={id}
      >
        <Link to={`/company/${company.id}`} className="avatar w-4/12">
          <div className="rounded-full shadow-lg shadow-neutral w-12 h-12 sm:w-20 sm:h-20">
            <img
              alt="logo"
              src={`/assets/companies_logo/${company.imageUrl}.svg`}
            />
          </div>
        </Link>
        <Link
          to={`/company/${company.id}`}
          className="flex flex-col h-16 w-6/12 justify-between "
        >
          <h1 className="card-title ">{company.name}</h1>
          <h5 className="text-base-content text-xs text-opacity-30 ">
            {dateLeft}
          </h5>
          <h5 className="text-base-content text-xs text-opacity-50">
            {company.sector}
          </h5>
        </Link>
        <div className="flex flex-col justify-between h-full w-2/12">
          <a href={newsUrl} target="_blank" className="text-xs text-neutral">
            Источник
          </a>
        </div>
      </div>
    </div>
  );
}
