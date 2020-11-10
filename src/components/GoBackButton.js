import React from "react";
import { Link } from "react-router-dom";
import * as BiIcons from "react-icons/bi";

export const GoBackButton = () => {
  return (
    <div>
      <Link
        to="/"
        className="btn btn-outline-primary d-flex justify-content-around go-back-button"
      >
        <div className="text-center">
          <BiIcons.BiArrowBack size="25" />
          Atrás
        </div>
      </Link>
    </div>
  );
};
