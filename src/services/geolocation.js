export const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    const resolveCb = (result) => {
      return resolve({
        latitude: result.coords.latitude,
        longitude: result.coords.longitude,
      });
    };

    const rejectCb = (err) => {
      return reject(err);
    };

    navigator.geolocation.getCurrentPosition(resolveCb, rejectCb);
  });
};
