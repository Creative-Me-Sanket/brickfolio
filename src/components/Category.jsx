import { Box, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { getProductByCategoryName } from '../axios/api';
import { setProductByCategory } from '../features/slice';

const Category = () => {
  const { categories} = useSelector((state) => state.products);
  const dispatch = useDispatch() ; 
  const navigate = useNavigate();

  const handleCategory =async (name) =>{
    try {
        const url =    `https://dummyjson.com/products/category/${name}`
        const response = await getProductByCategoryName(url);
        dispatch(setProductByCategory(response?.data)) ;
        navigate("/products-by-category");
        
    } catch (error) {
        
    }
  }
  return (

<Box
sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection:"column",
    cursor: "pointer",
    overflow:"scroll",
    marginTop:"5em"
}}
>
    <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "2em",
    }}
  >

    {categories && categories?.length > 0 ? (
      categories.map((category) => (
        <NavLink className="category-item" onClick={()=>handleCategory(category)}>
          <Typography variant="h5" component="span" color="#ff5821">
            {" "}
            {category}
          </Typography>
        </NavLink>
      ))
    ) : (
      <p>No Categories Found</p>
    )}{" "}
    
 </Box>
          {/* <Typography variant="h5" component="span" color="#ff5821">
          Categories
        </Typography> */}
        </Box>
  )
}

export default Category