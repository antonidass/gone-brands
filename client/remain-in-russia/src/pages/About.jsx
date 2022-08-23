import { useContext, useEffect } from "react";
import CompanyContext from "../context/company/CompanyContext";

export default function About() {
  const { dispatch } = useContext(CompanyContext);

  useEffect(() => {
    dispatch({ type: "SET_Y_POSITION", payload: 0 });
  }, []);

  return (
    <div className="animate-fade-in-down">
      <h1 className="text-6xl mb-4">Remain In Russia</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search companies to search for companies that have left
        the Russian market.
      </p>
      <p className="text-lg ">
        Version <span className="">1.0.0</span>
      </p>
      <p className="text-lg ">
        Layout By:
        <a
          className="link"
          target="_blank"
          href="https://github.com/antonidass"
        >
          Anton Krikov
        </a>
      </p>
    </div>
  );
}
