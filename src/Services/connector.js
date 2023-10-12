import axios from "axios"

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData,params) => {
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data: bodyData ? bodyData : null,
        params: params ? params : null,
    });
}