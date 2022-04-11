import instance from './instance';
import { ProductType } from '../types/product';
import { isAuthenticate } from '../utils/localStorage';

const { token , user } = isAuthenticate();

export const list = () => {
    const url = `/products`;
    return instance.get(url)
}

export const add = (product: any) => {
    const url = `/products/${user._id}`;
    return instance.post(url, product,{
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const remove = (_id: any) => {
    const url = `/product/${user._id}/${_id}`;
    return instance.delete(url,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    });
}
export const read = (_id: any) => {
    const url = `/product/${_id}`;
    return instance.get(url);
}
export const update = (product: any) => {
    const url = `/product/${product._id}`;
    return instance.patch(url, product);
}
export const searchFullText = (keyword:any) => {
    const url = `/search?q=${keyword}`
    return instance.post(url)
}
export const paginate = (page:Number) => {
    const url = `/product?page=${page}`
    return instance.get(url)
}