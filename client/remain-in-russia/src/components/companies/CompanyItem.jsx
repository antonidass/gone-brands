export default function CompanyItem({
  listItem: { id, company, status, date_left, date_back, new_url },
}) {
  return (
    <div className="card shadow-lg shadow-primary bg-base-200">
      <div
        className="flex flex-row items-center space-x-2 card-body px-4 h-28"
        key={id}
      >
        <div className="avatar w-4/12">
          <div className="rounded-full shadow-lg shadow-secondary w-12 h-12 sm:w-20 sm:h-20">
            <img
              alt="logo"
              src={`/assets/companies_logo/${company.image_url}.svg`}
            />
          </div>
        </div>
        <div className="flex flex-col h-full w-6/12 justify-between">
          <h1 className="card-title ">{company.name}</h1>
          <h5 className="text-base-content text-xs text-opacity-30 ">
            {date_left}
          </h5>
          <h5 className="text-base-content text-xs text-opacity-50">
            {company.sector}
          </h5>
        </div>
        <div className="flex flex-col justify-between h-full w-2/12">
          <a className="text-xs text-neutral">Источник</a>
        </div>
      </div>
    </div>
  );
}
