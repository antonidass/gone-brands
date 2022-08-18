import { Link } from "react-router-dom";
import { FaCity } from "react-icons/fa";
import PropTypes from "prop-types";
import { BsSignpostFill } from "react-icons/bs";
function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <BsSignpostFill className="inline pr-2 text-5xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Remain In Russia",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;