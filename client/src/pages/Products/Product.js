import React, { useEffect } from "react"
import { Item, Grid, Container, Button } from "semantic-ui-react"

const Product = (props) => (
  <Container>
    {props.items.map((item) => (
      <Grid columns={1} divided>
        <Grid.Row>
          <Grid.Column>
            <Item.Group>
              <Item>
                <Item.Image size="small" src={item.image} />

                <Item.Content>
                  <Item.Header as="a">{item.title}</Item.Header>
                  <Item.Meta>{item.description}</Item.Meta>
                  {/* <Item.Description></Item.Description> */}
                  <Item.Extra>Category: {item.category}</Item.Extra>
                  <Button color="blue">Add to Cart</Button>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ))}
  </Container>
)

export default Product
