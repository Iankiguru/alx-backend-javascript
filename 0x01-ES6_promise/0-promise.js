// 0-promise.js

const apiCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from API");
      // Uncomment the line below if you want to simulate an error response
      // reject("Error fetching data from API");
    }, 2000);
  });
};

const getResponseFromAPI = () => {
  return apiCall();
};

export default getResponseFromAPI;

