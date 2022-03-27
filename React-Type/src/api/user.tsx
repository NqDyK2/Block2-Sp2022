import instance from './instance';


export const regis = (user: any) => {
    const url = `/signup`;
    return instance.post(url, user);
}
export const login = (user : any) => {
    const url = `/login`;
    return instance.post(url, user)
}