import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
// Import all images from assets
import imgOne from "../../assets/img1.png";
import imgTwo from "../../assets/img2.png";
import imgThree from "../../assets/img3.png";
import imgFour from "../../assets/img4.png";
import imgFive from "../../assets/img5.png";
import imgSix from "../../assets/img1.png";
import imgSeven from "../../assets/img2.png";
import imgEight from "../../assets/img3.png";
import imgNine from "../../assets/img4.png";
import imgTen from "../../assets/img5.png";
import imgEleven from "../../assets/img1.png";
import imgTwelve from "../../assets/img2.png";
import imgThirteen from "../../assets/img3.png";
import imgFourteen from "../../assets/img4.png";
import imgFifteen from "../../assets/img5.png";
import imgSixteen from "../../assets/img1.png";

const products = [
  { id: 1, name: "Product One", img: imgOne },
  { id: 2, name: "Product Two", img: imgTwo },
  { id: 3, name: "Product Three", img: imgThree },
  { id: 4, name: "Product Four", img: imgFour },
  { id: 5, name: "Product Five", img: imgFive },
  { id: 6, name: "Product Six", img: imgSix },
  { id: 7, name: "Product Seven", img: imgSeven },
  { id: 8, name: "Product Eight", img: imgEight },
  { id: 9, name: "Product Nine", img: imgNine },
  { id: 10, name: "Product Ten", img: imgTen },
  { id: 11, name: "Product Eleven", img: imgEleven },
  { id: 12, name: "Product Twelve", img: imgTwelve },
  { id: 13, name: "Product Thirteen", img: imgThirteen },
  { id: 14, name: "Product Fourteen", img: imgFourteen },
  { id: 15, name: "Product Fifteen", img: imgFifteen },
  { id: 16, name: "Product Sixteen", img: imgSixteen },
];

const ShopProducts = () => {
  return (
    <Box sx={{ padding: "16px" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        SHOP BY CATEGORY
      </Typography>

      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={6} sm={4} md={3} key={product.id}>
            <Card sx={{ backgroundColor: "#f5f5f5", textAlign: "center" }}>
              <CardMedia
                component="img"
                image={product.img}
                alt={product.name}
                sx={{
                  height: "200px",
                  width: "auto",
                  maxWidth: "100%",
                  margin: "0 auto",
                }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShopProducts;
