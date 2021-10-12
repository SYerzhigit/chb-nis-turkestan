import React from "react";
import { Container, Divider, Header } from "semantic-ui-react";
import HeaderMain from "./global-components/HeaderMain";
import FooterMain from "./global-components/FooterMain";

const App = () => (
  <div>
    <HeaderMain />
    <Container style={{ minHeight: "30rem" }}>
      <Header as="h1">Content</Header>
    </Container>
    <Divider />
    <FooterMain />
  </div>
);

export default App;
