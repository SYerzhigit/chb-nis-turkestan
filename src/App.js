import React from "react";
import { Container, Divider } from "semantic-ui-react";
import HeaderMain from "./global-components/HeaderMain";
import FooterMain from "./global-components/FooterMain";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ItSupport from "./pages/it-support";

const App = () => (
  <div>
    <Router>
      <HeaderMain />
      <Container style={{ minHeight: "100vh", padding: "1rem" }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/itsupport" component={ItSupport} />
        </Switch>
      </Container>
      <Divider />
      <FooterMain />
    </Router>
  </div>
);

export default App;
