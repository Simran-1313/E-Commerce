import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;

const register = async (username, email, password) => {
    try{
        const response = await axios.post(RECT_APP_API_URL + 'register', {
            username,
            email,
            password,
        });
        return response.data;
    }
    catch(e){
        throw new Error ("Registration Failed")
    }
};

const login = async (email, password) => {
    try{const response = await axios.post(RECT_APP_API_URL + 'login', {
        email,
        password,
    });

    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}
catch(e){
    throw new Error("Login failed")
}

;}

const logout = () => {
    localStorage.removeItem('user');
};

const authService = {
    register,
    login,
    logout,
};

export default authService;
