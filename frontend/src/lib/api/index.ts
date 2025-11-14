import { axiosErrorHandler, customAxios } from "../utils";

export const testApi = async () => {
  try {
    const data = await customAxios.get("/test");

    return data.data;
  } catch (error) {
    return axiosErrorHandler(error);
  }
};
