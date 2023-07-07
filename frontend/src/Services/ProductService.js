import axios from "axios";

export const getProductService = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/Product");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching categories");
  }
};
export const addProductService = async (data) => {
  try {
    const response = await axios
      .post("http://127.0.0.1:8000/api/addProduct", data)
      .then((response) => {
        console.log(response.data);
      });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching categories");
  }
};
export const deleteproduct = async (data) => {
  try {
    const response = await axios
      .post("http://127.0.0.1:8000/api/deleteProduct", data)
      .then((response) => {
        console.log(response.data);
      });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching categories");
  }
};