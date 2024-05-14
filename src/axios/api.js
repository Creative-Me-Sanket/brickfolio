import axios from "axios"

export const getProducts = async (url) => {
    try {
      const response = await axios.get(`${url}`,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        });
  
      return response;
  
    }
    catch (error) {
      throw error.response;
    }
  }

export const getCategories = async (url) => {
    try {
      const response = await axios.get(`${url}`,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        });
  
      return response;
  
    }
    catch (error) {
      throw error.response;
    }
  }
export const getProductByCategoryName = async (url) => {
    try {
      const response = await axios.get(`${url}`,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        });
  
      return response;
  
    }
    catch (error) {
      throw error.response;
    }
  }
export const getProductById = async (url) => {
    try {
      const response = await axios.get(`${url}`,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        });
  
      return response;
  
    }
    catch (error) {
      throw error.response;
    }
  }