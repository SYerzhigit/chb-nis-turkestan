import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Image,
  Divider,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const AuthPage = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="teal" textAlign="center">
        <Image src="./nislogo.png" />
        Войти в систему
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />
          <Link to="/adminpage">
            <Button color="teal" fluid size="large">
              Войти
            </Button>
            <Divider />
          </Link>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default AuthPage;
