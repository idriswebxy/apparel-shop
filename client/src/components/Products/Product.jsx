import React, { useEffect } from "react"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import ProductDetail from "./ProductDetail"
import { useRecoilState, useRecoilValue } from "recoil"
import { fetchProducts, productState } from "../../api/store/product"
// import { addToCart } from "../../../../queries"

const theme = createTheme()

const Product = ({ items, setItem }) => {
  useEffect(() => {}, [])

  return (
    <div>
      <ThemeProvider theme={theme}>
        <main>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={6}>
              {items.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4}>
                  <div onClick={() => setItem(item)}>
                    <Link href={`product-detail/${item.id}`}>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={item.image}
                        alt="green iguana"
                      />
                    </Link>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Button onClick={""}>Add To Cart</Button>
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
}

export default Product
