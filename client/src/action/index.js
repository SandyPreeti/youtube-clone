import * as api from '../api';

export const login=(authData)=>async(dispatch)=>{
    try {
        const {data}=await api.login(authData);
        dispatch({type:"Auth",data});
    } catch (error) {
        alert(error)
    }
}