import instance from "./instance";
import { CategoryType } from "../types/category";
import { isAuthenticate } from "../utils/localStorage";

const { token , user} = isAuthenticate();

export const list = () => {
    const url = `/categories`;
    return instance.get(url)
}
export const create = (category:any) => {
    const url = `/category/${user._id}`;
    return instance.post(url,category, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}
export const remove = (_id: any) => {
    const url = `category/${_id}`;
    return instance.delete(url)
}
export const read = (_id:any) => {
    const url = `category/${_id}`;
    return instance.get(url);
}
export const update = (category:any) => {
    const url = `/category${category._id}`;
    return instance.patch(url, category)
}