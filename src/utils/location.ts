export function getCurrentLocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      try {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 30000,
        });
      } catch (error) {
        reject(error);
      }
    });
  }