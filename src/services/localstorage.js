const setAccessToken = (token) => {
  localStorage.setItem("token", token);
};

const getAccessToken = () => localStorage.getItem("token");

export { setAccessToken, getAccessToken };
