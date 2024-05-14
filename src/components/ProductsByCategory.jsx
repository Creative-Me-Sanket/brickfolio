import React from "react";
import Navbar from "./Navbar";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import { useSelector } from "react-redux";

const ProductsByCategory = () => {
  const { productByCategory } = useSelector((state) => state.products);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const renderJsx = (data) => {
    const returnJSX =
      data && data?.length > 0 ? (
        data.map((product) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="product category"
              height="150px"
              image={product?.thumbnail}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {truncateText(product?.brand, 15)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {truncateText(product?.description, 25)}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => alert("Please Visit www.brickfolio.in")}
              >
                Share
              </Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <p>
          No Data Found
          {console.log("Data NO")}
        </p>
      );

    return returnJSX;
  };

  return (
    <div
      style={{
        marginTop: "5em",
      }}
    >
      <Navbar />
      <Box>

      <Typography variant="h2" color="black" fontWeight="700">
        Total Count : {productByCategory?.total}
      </Typography>

      <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", m :"1em 1em"}}>

        {renderJsx(productByCategory?.products)}
        </Box>

      </Box>

    </div>
  );
};

export default ProductsByCategory;
