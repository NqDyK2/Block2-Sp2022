import instance from './instance';
import { ProductType } from '../types/product';
import { isAuthenticate } from '../utils/localStorage';

const { token , user } = isAuthenticate();

export const list = () => {
    const url = `/products`;
    return instance.get(url)
}
export const add = (product: any) => {
    const url = `/product/${user._id}`;
    return instance.post(url, product,{
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const remove = (_id: any) => {
    const url = `/product/${_id}`;
    return instance.delete(url);
}
export const read = (_id: any) => {
    const url = `/product/${_id}`;
    return instance.get(url);
}
export const update = (product: any) => {
    const url = `/product/${product._id}`;
    return instance.patch(url, product);
}