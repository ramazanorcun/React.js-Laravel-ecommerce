import axios from 'axios';

export const register= async (item)=>{
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/auth/register",item);
    return response.data;
  } catch (error) {
    throw error;
  }
   
};
export const login = ({ email, password }) => {
    return axios
      .post("http://127.0.0.1:8000/api/auth/login", {
        email,
        password,
      })
      .then((response) => {
        let user = {};
        user = response.data.user;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(response.data));
        console.log(response.data);
        return response.data;
      });
  };
  
  export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    
  };

const AuthService = {
    register,
    login,
    logout,
  };
  export default AuthService;