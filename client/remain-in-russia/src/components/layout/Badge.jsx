function Badge({ isEnabled, badgeText, badgeType, clearFiltering, mode }) {
  return (
    <>
      {isEnabled && (
        <div className={`badge ${badgeType} gap-2 badge-lg`}>
          <svg
            onClick={() => clearFiltering(mode)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-4 h-4 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          {badgeText}
        </div>
      )}
    </>
  );
}

export default Badge;
