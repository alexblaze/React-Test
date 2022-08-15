import { axiosInstance } from "../../app/api/axiosInterceptor";

export const getProducts = async () => {
  let link = "/mela/products";
  const { data } = await axiosInstance.get(link);
  return data;
};
