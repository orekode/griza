
import axios from "../config";
import { useQuery } from "react-query";


export const useProducts = () => {
    return useQuery(['products'], async () => {

        try {

            const response = await axios.get("https://fakestoreapi.com/products/");
            return response.data || response;

        }
        catch (error) {
            console.log(error);
            return [];
        }
    })
}