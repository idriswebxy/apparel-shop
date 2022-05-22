import React, { useEffect } from "react"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"

const theme = createTheme()

const Product = ({ items, addToCart, userId }) => (
  <div>
    <ThemeProvider theme={theme}>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {items.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <div>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={item.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Button onClick={() => addToCart(item, userId)}>
                      Add To Cart
                    </Button>
                    <Typography variant="h6" gutterBottom component="div">
                      ${item.price}
                    </Typography>
                  </CardContent>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  </div>
)

export default Product
