import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuPlus } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

const AddProduct = () => {
  const [fields, setFields] = useState([{ id: Date.now() }]);
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const addField = () => {
    setFields([...fields, { id: Date.now() }]);
  };

  const deleteField = (id) => {
    setFields(fields.filter(field => field.id !== id));
  };

  const onSubmit = (data) => {
    setIsSubmitting(true)
    const formattedData = data.data.reduce((acc, item) => {
        acc[item.name] = item.value;
        return acc;
      }, {});

    const finalOutput = {
        name: data.productName,
        data: formattedData
      };
      axiosPublic.post("/objects", finalOutput)
      .then(response=>{
        toast.success('New Product Added')
      const storedIds = JSON.parse(localStorage.getItem("productIds")) || [];
      storedIds.push(response.data.id);
      localStorage.setItem("productIds", JSON.stringify(storedIds));
      navigate(`/products/${response.data.id}`)
      reset()
    })
      .catch(error=>toast.error(error.message))

      setIsSubmitting(false)
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-3 rounded-md text-nowrap min-h-full">
        <ToastContainer />
      <h2 className="text-center text-2xl font-semibold mt-6 dark:text-slate-200">Add New Product</h2>
      <div className="flex justify-center">
        <div className="py-6  sm:px-10 px-3 bg-bgGray dark:bg-slate-900 rounded-md sm:w-10/12 w-full mt-6">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div className="flex sm:flex-row flex-col sm:items-center  w-full gap-5">
              <label className="text-slate-700 dark:text-neutral-400">Product Name:</label>
              <input
                {...register("productName", { required: true})}
                className="rounded flex-grow focus:outline-slate-300 focus:dark:outline-slate-600 focus:outline-1 px-3 py-1 bg-white dark:bg-slate-800 dark:placeholder:text-neutral-500 dark:text-neutral-300 text-lg"
                type="text"
                required
              />
            </div>
            {fields.map((field, index) => (
              <div key={field.id} className="flex field items-center gap-5 bg-violet-100 dark:bg-slate-800 rounded px-3 py-3">
                <div className="flex items-center w-full gap-3 flex-wrap flex-grow">
                  <div className="flex sm:flex-row flex-col sm:items-center gap-3 flex-1 w-full">
                    <label className="text-slate-700 dark:text-neutral-400">Data Name:</label>
                    <input
                      {...register(`data[${index}].name`,  { required: true})}
                      className="flex-grow w-auto rounded focus:outline-slate-300 focus:dark:outline-slate-600 focus:outline-1 px-3 py-1 bg-white dark:bg-slate-900 dark:placeholder:text-neutral-500 dark:text-neutral-300 text-lg"
                      type="text"
                      required
                    />
                  </div>
                  <div className="flex sm:flex-row flex-col sm:items-center gap-3 flex-1 w-full">
                    <label className="text-slate-700 dark:text-neutral-400">Data Value:</label>
                    <input
                      {...register(`data[${index}].value`,  { required: true})}
                      className="flex-grow w-auto rounded focus:outline-slate-300 focus:dark:outline-slate-600 focus:outline-1 px-3 py-1 bg-white dark:bg-slate-900 dark:placeholder:text-neutral-500 dark:text-neutral-300 text-lg"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <span
                  type="button"
                  onClick={() => deleteField(field.id)}
                  className="bg-amber-600 text-white p-1 rounded cursor-pointer active:scale-95 duration-100"
                >
                  <MdDeleteOutline size={20} />
                </span>
              </div>
            ))}

            <div className="flex justify-end">
              <div
                type="button"
                onClick={addField}
                className="bg-indigo-500 text-white py-2 rounded w-20 flex justify-center cursor-pointer active:scale-95 duration-100"
              >
                <LuPlus size={20} />
              </div>
            </div>

            <div className="flex justify-center">
              <button type="submit" className="bg-indigo-600 font-semibold text-white py-2 w-32 rounded-md shadow-md cursor-pointer active:scale-95 duration-100">{isSubmitting ? <Spinner /> : "Submit"}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
