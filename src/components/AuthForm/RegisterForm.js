import React from "react"
import { Button, Checkbox, Form } from "semantic-ui-react"
import { Container, Header } from "semantic-ui-react"

const RegisterForm = () => (
  <Container>
    <Header as="h1">Register</Header>
    <Form>
      <Form.Field>
        <label>Email</label>
        <Form.Input placeholder="Email" width={6} />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <Form.Input placeholder="Password" width={6} />
      </Form.Field>
      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  </Container>
)

export default RegisterForm
