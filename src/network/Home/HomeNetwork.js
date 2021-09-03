import axios from "axios";

export function requestLunbo(config) {  /* 用于服务器请求轮播图图片 */
    const instance = axios.create({
        baseURL: "http://192.168.1.100:8080",
        timeout: 5000
    });
    return instance(config)
}

export function requestHomeRecommend(config) {  /* 用于服务器请求推荐图片 */
    const instance = axios.create({
        baseURL: "http://192.168.1.100:8080",
        timeout: 5000
    });
    return instance(config)
}

export function requestHomeWeekRecommend(config) {  /* 用于服务器请求每周推荐 */
    const instance = axios.create({
        baseURL: "http://192.168.1.100:8080",
        timeout: 5000
    });
    return instance(config)
}

export function requestHomeGoods(config) {  /* 用于服务器请求众多货物 */
    const instance = axios.create({
        baseURL: "http://192.168.1.100:8080",
        timeout: 5000
    });
    return instance(config)
}