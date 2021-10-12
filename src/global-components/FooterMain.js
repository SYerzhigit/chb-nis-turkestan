import React from "react";
import { Container, Grid, Segment } from "semantic-ui-react";

const FooterMain = () => {
  return (
    <Segment vertical>
      <Container textAlign="center">
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>1 COLUMN</Grid.Column>
            <Grid.Column>2 COLUMN</Grid.Column>
            <Grid.Column>3 COLUMN</Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Container
        fluid
        textAlign="center"
        style={{
          margin: "5em 0em 0em",
          backgroundColor: "teal",
          padding: "1rem",
          color: "#fff",
        }}
      >
        <h5>&copy; 2021 NIS Turkestan</h5>
      </Container>
    </Segment>
  );
};

export default FooterMain;
