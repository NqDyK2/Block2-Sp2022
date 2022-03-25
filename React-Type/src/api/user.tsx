import instance from './instance';


export const regis = (user: any) => {
    const url = `/signup`;
    return instance.post(url, user);
}
