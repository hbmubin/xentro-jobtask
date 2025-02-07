import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-bgGray dark:bg-slate-800">
            <div className="text-orange-500 font-semibold text-7xl">404</div>
            <div className="flex gap-3 mt-3">
                <div onClick={()=>navigate('/')} className="text-indigo-600 text-lg hover:underline cursor-pointer">Home</div>
                <div onClick={()=>navigate(-1)} className="text-indigo-600 text-lg hover:underline cursor-pointer">Back</div>
            </div>
        </div>
    );
};

export default Error;