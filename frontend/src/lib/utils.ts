import axios from "axios";
/**
 * Utility function to conditionally join classNames together.
 * Similar to the popular 'classnames' library.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter((cls): cls is string => typeof cls === "string" && cls.length > 0).join(" ");
}

export const customAxios = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

export const axiosErrorHandler = (error: any) => {
  console.log("Axios error:", error);
  let translationKey = "errors.internal_server_error";
  if (error.response?.data?.key) translationKey = `errors.${error.response.data.key.toLowerCase()}`;

  return {
    isError: true,
    translationKey,
    errorKey: error.response?.data?.key,
  };
};

customAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // const { isLoggedIn, logout } = useAuthStore.getState();
      // logout();
    }
    return Promise.reject(error);
  }
);
