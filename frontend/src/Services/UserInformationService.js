import axios from 'axios';


export const getUserInformationService = async (userId) => {

  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/userİnformation/${userId}`);

    return response.data;
  } catch (error) {
    throw new Error('Error fetching userget');
  }
};
export const addUserInformationService = async (item) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/addUserInformation', item);
    console.log(response.data);

    return response.data;
  } catch (error) {
    throw new Error('Error fetching userAdd');
  }
};
