import { useState } from "react";
import useProductList from "../../hooks/useProductList";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { BarLoader } from "react-spinners";
import { productList } from "../../../public/data";

const ProductList = () => {
  const {  productListLoading, productListError } = useProductList();
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  const filteredProducts = productList.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = a.data?.price || a.data?.Price || Infinity;
    const priceB = b.data?.price || b.data?.Price || Infinity;

    if (sortOrder === "low") return priceA - priceB;
    if (sortOrder === "high") return priceB - priceA;
    return 0;
  });

  return (
    <div className=" bg-white dark:bg-slate-800 p-3 rounded-md text-nowrap">
      <div className="flex sm:flex-row flex-col justify-between sm:items-center  sm:pr-3 ">
        <h1 className="text-2xl font-semibold sm:pl-4 dark:text-neutral-200">All Products</h1>
        <div className="flex sm:flex-row flex-col sm:items-center gap-6 sm:mt-0 mt-3">
          <div className="inline-flex items-center justify-between bg-white dark:bg-slate-800 pl-5 py-1 rounded-xl border border-neutral-200 dark:border-slate-700">
            <input onChange={(e) => setSearch(e.target.value)} className=" xl:w-96 py-1 outline-none bg-white dark:bg-slate-800 dark:placeholder:text-neutral-500 dark:text-neutral-300" type="text" placeholder="Search user" />
            <span className="px-3 text-neutral-500">
              <HiMiniMagnifyingGlass size={20} />
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm text-neutral-500">Sort by price</div>
            <div className="relative">
              <select
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full focus:bg-bgGray bg-transparent placeholder:text-neutral-500 text-slate-700 dark:text-neutral-500 text-sm border border-neutral-200 rounded-md pl-3 pr-8 py-2 transition duration-200 ease focus:outline-none  appearance-none cursor-pointer dark:border-neutral-500 dark:focus:bg-slate-800 font-semibold"
              >
                <option value="default">default</option>
                <option value="low">low to high</option>
                <option value="high">high to low</option>
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2 right-2.5 text-slate-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:my-3 sm:mx-3 my-3  overflow-auto">
        <table className="w-full product-table rounded-md ">
          <thead>
            <tr className="font-normal text-neutral-500 uppercase text-xs bg-[#e6e4f1] dark:bg-gray-600 dark:text-slate-300">
              <th>
                <p>id</p>
              </th>
              <th>
                <p>Name</p>
              </th>
              <th>
                <p>Price</p>
              </th>
              <th>
                <p>Others</p>
              </th>
              <th>
                <p></p>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts.length > 0
              ? sortedProducts.map((product) => (
                  <tr className="hover:bg-[#fbfaff] duration-200 even:bg-bgGray even:dark:bg-gray-700 even:hover:bg-[#ece6f9] even:duration-200 dark:text-slate-300 dark:hover:bg-slate-700 dark:even:hover:bg-slate-700" key={product.id}>
                    <td>
                      <p>{product.id}</p>
                    </td>
                    <td>
                      <p className="font-semibold">{product.name}</p>
                    </td>
                    <td>
                      <p>{product.data?.price || product.data?.Price || "N/A"}</p>
                    </td>
                    <td>
                      {product?.data &&
                        Object.entries(product.data)
                          .filter(([key]) => key.toLocaleLowerCase() !== "price")
                          .map(([key, value]) => (
                            <p key={key}>
                              <span className="capitalize text-neutral-700 dark:text-neutral-300">{key}</span>: <span>{value}</span>
                            </p>
                          ))}
                    </td>
                    <td>
                      <a href={`/products/${product.id}`} className="bg-indigo-500  text-white inline-block px-3 hover:shadow-xl active:scale-95 duration-200 py-1.5 rounded-2xl sm:text-sm text-xs cursor-pointer">View details</a>
                    </td>
                  </tr>
                ))
              : !productListLoading && (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-orange-500">
                      No product found
                    </td>
                  </tr>
                )}
          </tbody>
        </table>
      </div>
      <BarLoader color="#d1d5dc " loading={productListLoading} width="100%" aria-label="Loading Spinner" data-testid="loader" />
    </div>
  );
};

export default ProductList;
