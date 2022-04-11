import instance from "./instance";
import { CategoryType } from "../types/category";
import { isAuthenticate } from "../utils/localStorage";

const { token , user} = isAuthenticate();

export const listCate = () => {
    const url = `/categories`;
    return instance.get(url)
}
export const createCate = (category:any) => {
    const url = `/category/${user._id}`;
    return instance.post(url,category, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}
export const removeCate = (_id: any) => {
    const url = `category/${user._id}/${_id}`;
    return instance.delete(url,{
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
}
export const readCate = (_id:any) => {
    const url = `category/${_id}`;
    return instance.get(url);
}
export const updateCate = (category:any) => {
    const url = `/category/${user._id}/${category._id}`;
    return instance.patch(url, category , {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}