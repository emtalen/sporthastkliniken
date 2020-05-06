import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import TheTeam from "./components/TheTeam";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/teamet' component={TheTeam}></Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
