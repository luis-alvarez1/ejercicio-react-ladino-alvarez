import React from "react";
import { Switch, Route, BrowserRouter as ReactRouter } from "react-router-dom";
import { Starwars } from "../pages/Starwars";
import { Pokemon } from "../pages/Pokemon";
import { Home } from "../pages/Home";

export const Router = () => {
  return (
    <>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/starwars" exact component={Starwars} />
          <Route path="/pokemon" exact component={Pokemon} />
        </Switch>
      </div>
    </>
  );
};
