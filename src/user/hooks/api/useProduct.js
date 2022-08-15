import { getProducts } from "../../api/product-api";
import { useQuery } from "react-query";

export const useGetProducts = () => {
  return useQuery(["getProducts"], () => getProducts(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};
