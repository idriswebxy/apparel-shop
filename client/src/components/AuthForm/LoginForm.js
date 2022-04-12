import React from "react"
import { Button, Checkbox, Form, Grid } from "semantic-ui-react"
import { Container, Header } from "semantic-ui-react"

const LoginForm = () => (
  <Container>
    <Grid>
      <Grid.Row centered>
        <Grid.Column width={6}>
          <Header as="h1">Login</Header>
          <Form>
            <Form.Field>
              <label>Email</label>
              <Form.Input placeholder="Email" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <Form.Input placeholder="Password" />
            </Form.Field>
            <Form.Field>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default LoginForm
