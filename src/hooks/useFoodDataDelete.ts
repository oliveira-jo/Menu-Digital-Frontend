import axios, { AxiosPromise } from "axios"
import { useMutation, useQueryClient } from "react-query";
import { FoodDataId } from "../interface/FoodDataId";

const API_URL = 'http://localhost:8080';

const postData = async (data : FoodDataId): AxiosPromise<any> => {
    const response = axios.delete(API_URL + '/foods/' + data.id );
    return response;
}

export function useFoodDataDelete(){
    const queryClient =  useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])
        }

    })

    return mutate;

}