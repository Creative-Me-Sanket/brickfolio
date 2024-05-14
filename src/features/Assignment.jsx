import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getCategories, getProducts } from "../axios/api";
import { Box, Button, Typography } from "@mui/material";
import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setIsOpenModal, setProducts } from "./slice";
import { NavLink } from "react-router-dom";
import Category from "../components/Category";

const Assignment = () => {
  const { categories} = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllProducts();
    getAllCategories();
  }, []);

  const getAllProducts = async () => {
    try {
      const url = "https://dummyjson.com/products";
      const response = await getProducts(url);
      dispatch(setProducts(response?.data?.products));
    } catch (error) {}
  };

  const getAllCategories = async () => {
    try {
      const url = "https://dummyjson.com/products/categories";
      const response = await getCategories(url);
      dispatch(setCategory(response?.data));
    } catch (error) {
      
    }
  };
  return (
    <>
      <Navbar />
      <Category />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
                  <Typography variant="h5" component="span" color="black" fontWeight="600">
          Click On Category
        </Typography>
      </div>
      <Box m="5em 1em">
        <Products />
      </Box>

    </>
  );
};

export default Assignment;
