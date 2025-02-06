import axios from "axios";


export const axiosPublic = axios.create({
    baseURL: "https://api.restful-api.dev/",
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;