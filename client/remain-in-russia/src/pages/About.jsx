import { useContext, useEffect } from "react";
import CompanyContext from "../context/company/CompanyContext";

export default function About() {
  const { dispatch } = useContext(CompanyContext);

  useEffect(() => {
    dispatch({ type: "SET_Y_POSITION", payload: 0 });
  }, []);

  return (
    <div className="animate-fade-in-down">
      <h1 className="text-6xl mb-4">Gone Brands</h1>
      <p className="mb-4 text-2xl font-light">Компании, покинyвшие Россию</p>
      <p className="text-lg ">
        Version <span className="">1.0.0</span>
      </p>
      <p className="text-lg ">
        <a
          className="link"
          target="_blank"
          href="https://github.com/antonidass"
        >
          Anton Krikov
        </a>
      </p>
      <div className="flex flex-row">
        <p className="text-2xl sm:text-4xl">Вопросы ? -></p>
        <a
          className="link mx-4 align-middle text-2xl sm:text-4xl"
          href="https://telegram.me/akrikoff"
          target="_blank"
        >
          Telegram
        </a>
      </div>
    </div>
  );
}
