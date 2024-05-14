import  React, {useEffect} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const Products = () => {

  const {productsData
  } = useSelector(state => state.products)
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  useEffect(()=>{
    renderJsx();
  },[productsData])

  const renderJsx = (data) =>{
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
                <Button size="small" onClick={()=>alert('Please Visit www.brickfolio.in')}>Share</Button>
              </CardActions>
            </Card>
        ))
      ) : (
        <p>No Data Found

{console.log("Data NO")}
        </p>

      )

    return returnJSX ;
  }
  return (
    <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", m :"1em 1em"}}>

    {renderJsx(productsData)}
    </Box>
  );
};

export default Products;
