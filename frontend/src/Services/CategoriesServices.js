import axios from 'axios';



export const getCategoriesService = async () => {

  try {
    const response = await axios.get('http://127.0.0.1:8000/api/Categories');

    return response.data;
  } catch (error) {
    throw new Error('Error fetching categories');
  }
};
export const addCategoriesService = async (item) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/addCategories', item);

    return response.data;
  } catch (error) {
    throw new Error('Error fetching categories');
  }
};
export const deleteCategoriesService = async (categoryId) => {
  try {
    const response = await axios.delete('http://127.0.0.1:8000/api/deleteCategories/'+ categoryId);

    return response.data;
  } catch (error) {
    throw new Error('Error fetching categories');
  }
};
export const updateCategoriesService = async ({categoryId,name}) => {
  try {
    const response = await axios.put('http://127.0.0.1:8000/api/updateCategories/'+ categoryId, {categoryId,name});

    return response.data;
  } catch (error) {
    throw new Error('Error fetching categories');
  }
};