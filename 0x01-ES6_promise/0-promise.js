const apiCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from API");
    }, 2000);
  });
};

const getResponseFromAPI = () => {
  return apiCall();
};

export default getResponseFromAPI;
