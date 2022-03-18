import instance from './instance';

export const list = () => {
    const url = `/products`;
    return instance.get(url)
}
export const  add = (product: any) => {
    const url = `/product`;
    return instance.post(url,product)
}
export const get = (_id : any ) => {
    const url = `/product/${_id}`;
    return instance.get(url);
}
export const remove = (_id : number ) => {
    const url = `/product/${_id}`;
    return instance.delete(url);
}