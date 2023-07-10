import axios from "axios";

export const getProductService = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/product");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching product");
  }
};
export const addProductService = async (data) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/addProduct', data);

    return response.data;
  } catch (error) {
    throw new Error('Error fetching product');
  }
};
export const deleteProductService = async (productId) => {
  try {
    const response = await axios.delete('http://127.0.0.1:8000/api/deleteProduct/'+ productId);

    return response.data;
  } catch (error) {
    throw new Error('Error fetching product');
  }
};
