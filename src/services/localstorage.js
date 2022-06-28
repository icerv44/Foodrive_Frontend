const setAccessToken = (token) => {
  localStorage.setItem("token", token);
};

const getAccessToken = () => localStorage.getItem("token");

const removeToken = () => localStorage.removeItem("token");

export { setAccessToken, getAccessToken, removeToken };
