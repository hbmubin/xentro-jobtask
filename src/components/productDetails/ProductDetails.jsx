import { useLoaderData, useNavigate } from "react-router-dom";
import noImg from "../../assets/no-image-icon-23485.png";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import { Spinner } from "@material-tailwind/react";
import { toast, ToastContainer } from "react-toastify";
// import { product } from "../../../public/product"

const ProductDetails = () => {
  const product = useLoaderData();
  const axiosPublic = useAxiosPublic()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()



  const handleDelete = async () => {
    try {
      setIsSubmitting(true);
      
      const response = await axiosPublic.delete(`/objects/${product.id}`);
  
      toast.success("Product Deleted");
  
      const storedIds = JSON.parse(localStorage.getItem("productIds")) || [];
      const updatedIds = storedIds.filter(id => id !== product.id); 
      localStorage.setItem("productIds", JSON.stringify(updatedIds));
  
      navigate(`/products/all`);
    } catch (error) {
      if (error.response && error.response.status === 405) {
        toast.error("Only my added product can be deleted");
      } else {
        toast.error(error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className=" bg-white sm:p-6 p-3 dark:bg-slate-800  rounded-md flex justify-center items-center">
      <ToastContainer />
      <div className="bg-bgGray dark:bg-slate-900 rounded-md sm:px-10 px-6 sm:py-6 py-3 flex sm:flex-row flex-col sm:w-10/12 w-full gap-6">
        <div className="flex justify-center items-center ">
          <figure className=" overflow-hidden">
            <img className="max-w-full object-cover border border-slate-300 rounded-md" src={noImg} alt="product image" />
          </figure>
        </div>
        <div className="sm:pl-6 py-3 flex flex-col">
          <div className="flex-grow">
            <h2 className="text-xl font-semibold dark:text-slate-200">{product.name}</h2>
            <ul className="mt-3 flex flex-col gap-1">
              {product?.data &&
                Object.entries(product.data).map(([key, value]) => (
                  <li key={key}>
                    <span className="capitalize text-neutral-700 dark:text-neutral-400">{key}</span>: <span className="dark:text-slate-200">{value}</span>
                  </li>
                ))}
            </ul>
          </div>
          <button type="button" onClick={handleDelete} className="bg-orange-600  text-white flex justify-center w-32 hover:shadow-xl active:scale-[.98] duration-200 py-1.5 rounded-2xl text-sm cursor-pointer md:mt-0 mt-3">{isSubmitting ? <Spinner className="h-5 w-5 " color="orange"/> : "Delete"}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
