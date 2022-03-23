import instance from './instance';

export const list = () => {
    const url = `/products`;
    return instance.get(url)
}
export const  add = (product: any) => {
    const url = `/product`;
    return instance.post(url,product)
}
export const get = ( id : number ) => {
    const url = `/product/${id}`;
    return instance.get(url);
}
export const remove = (id : number ) => {
    const url = `/product/${id}`;
    return instance.delete(url);
}
export const update = (product: any) => {
    const url = `/product/${product.id}`;
    return instance.patch(url , product)
}