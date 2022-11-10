import axios from 'axios'
const API_URL = '/api/admins/'



//Register user

const register = async (adminData) => {
    const response = await axios.post(API_URL, adminData)

    if(response.data) {
        localStorage.setItem('admin', JSON.stringify(response.data))
    }


    return response.data
}

//login user

const login = async (adminData) => {
    const response = await axios.post(API_URL +'admin', adminData)

    if(response.data) {
        localStorage.setItem('admin', JSON.stringify(response.data))
    }


    return response.data
}



//logout
const logout = () => {
    localStorage.removeItem('admin')
  }
  


const adminService = {
    register,
    logout,
    login,
   

}

export default adminService 