import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const BotonRedireccionar = ({ page }) => {
  console.log(("/" + page).toLowerCase().trim());
  return (
    <>
      <div>
        <Link
          to={("/" + page).toLowerCase().trim()}
          className="btn btn-primary mt-2 ml-5"
        >
          Redireccionar a {page}
        </Link>
      </div>
    </>
  );
};

BotonRedireccionar.protoTypes = {
  page: PropTypes.string.isRequired,
};
