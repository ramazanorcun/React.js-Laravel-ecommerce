import axios from "axios"; 


export const getSubCategoriesService = async () => {

  try {
    const response = await axios.get('http://127.0.0.1:8000/api/subCategories');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching categories');
  }
};
export const addSubCategoriesService = async (item) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/addSubCategories', item);

    return response.data;
  } catch (error) {
    throw new Error('Error fetching categories');
  }
};
export const deleteSubCategoriesService = async (subCategoryId) => {
  try {
    const response = await axios.delete('http://127.0.0.1:8000/api/deleteSubCategories/'+ subCategoryId);

    return response.data;
  } catch (error) {
    throw new Error('Error fetching categories');
  }
};
export const updateSubCategoriesService = async ({updateSubId,name}) => {
  try {
    const response = await axios.put('http://127.0.0.1:8000/api/updateSubCategories/'+ updateSubId, {updateSubId,name});

    return response.data;
  } catch (error) {
    throw new Error('Error fetching categories');
  }
};