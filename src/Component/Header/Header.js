import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <div className="container">
        <a className="navbar-brand fw-bolder fst-italic" href="/">
          Dream <span className="text-danger">Twenty</span>
        </a>
        <div>
          <button className=" fw-bolder fst-italic btn btn-danger">
            Log In{" "}
            <span className="ms-2">
              <FontAwesomeIcon icon={faUsers} />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
