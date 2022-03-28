import { UserType } from '../types/user';
import instance from './instance';


export const regis = (user: UserType) => {
    const url = `/registed`;
    return instance.post(url, user);
}
export const login = (user : UserType) => {
    const url = `/login`;
    return instance.post(url, user)
}