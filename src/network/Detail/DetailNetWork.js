import axios from "axios";

export function requestDetailLunbo(config){
    const instance = axios.create({
        baseURL: "http://192.168.1.101:80",
        timeout: 5000
    });
    return instance(config);
}