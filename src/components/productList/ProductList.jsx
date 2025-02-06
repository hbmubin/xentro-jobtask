import { useState } from "react";
import useProductList from "../../hooks/useProductList";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { BarLoader } from "react-spinners";

const ProductList = () => {
  const { productList, productListLoading, productListError } = useProductList();
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredProducts = productList.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));
  const sortedProducts = [...filteredProducts].sort((a, b) => (sortOrder === "asc" ? a.id - b.id : b.id - a.id));
  return (
    <div className=" bg-white p-3 rounded-md ">
      <div className="flex justify-between items-center pr-3">
        <h1 className="text-2xl font-semibold pl-4">All Products</h1>
        <div className="flex items-center gap-6">
          <div className="inline-flex items-center bg-white pl-5 py-1 rounded-xl border border-neutral-200">
            <input onChange={(e) => setSearch(e.target.value)} className=" w-96 py-1 outline-none bg-white" type="text" placeholder="Search user" />
            <span className="px-3 text-neutral-500 cursor-pointer">
              <HiMiniMagnifyingGlass size={20} />
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm text-neutral-500">Sort by ID</div>
            <div className="relative">
              <select
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full focus:bg-bgGray bg-transparent placeholder:text-neutral-500 text-slate-700 text-sm border border-neutral-200 rounded-md pl-3 pr-8 py-2 transition duration-200 ease focus:outline-none  appearance-none cursor-pointer"
              >
                <option value="asc">Ascending</option>
                <option value="des">Descending</option>
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2 right-2.5 text-slate-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="m-3 ">
        <table className="w-full product-table rounded-md overflow-hidden">
          <thead>
            <tr>
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
            </tr>
          </thead>
          <tbody>
            {sortedProducts.length > 0
              ? sortedProducts.map((product) => (
                  <tr key={product.id}>
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
                      <p>
                        {product.data?.color || product.data?.Color ? `Color: ${product.data?.color || product.data?.Color}, ` : ""}

                        {product.data?.capacity || product?.data?.Capacity || product.data?.["capacity GB"]
                          ? `Capacity: ${product.data?.capacity || product.data?.Capacity || (product?.data?.["capacity GB"] ? `${product.data?.["capacity GB"]} GB` : "")}, `
                          : ""}
                          {product?.data?.["Strap Colour"] && `Strap color: ${product?.data?.["Strap Colour"]}, ` }
                          {product?.data?.["Case Size"] && `Case Size: ${product?.data?.["Case Size"]}` }
                      </p>
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
