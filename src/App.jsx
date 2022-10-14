import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import TheTeam from "./components/TheTeam";
import Services from "./components/Services";
import Contact from "./components/Contact";
import TheClinic from "./components/TheClinic";
import Gallery from "./components/Gallery";
import Partners from "./components/Partners";
import English from "./components/English";
import News from "./components/News";
import Work from "./components/Work";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/teamet" component={TheTeam}></Route>
        <Route exact path="/tjänster" component={Services}></Route>
        <Route exact path="/kontakt" component={Contact}></Route>
        <Route exact path="/kliniken" component={TheClinic}></Route>
        <Route exact path="/galleri" component={Gallery}></Route>
        <Route exact path="/partners" component={Partners}></Route>
        <Route exact path="/english" component={English}></Route>
        <Route exact path="/nyheter" component={News}></Route>
        <Route exact path="/lediga-tjanster" component={Work}></Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
