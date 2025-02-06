import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProductList = () => {
  const axiosPublic = useAxiosPublic();

  const { data: productList = [], isLoading: productListLoading, error: productListError } = useQuery({
    queryKey: ["productList"],
    queryFn: async () => {
      const response = await axiosPublic.get("/objects");
      return response.data; 
    },
  });

  return { productList, productListLoading, productListError };
};

export default useProductList;
