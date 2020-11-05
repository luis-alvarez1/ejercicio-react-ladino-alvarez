import React from "react";
import { Link } from "react-router-dom";

export const GoBackButton = () => {
  return (
    <div>
      <Link
        to="/"
        class="btn btn-outline-primary d-flex justify-content-around go-back-button "
      >
        Atrás
      </Link>
    </div>
  );
};
