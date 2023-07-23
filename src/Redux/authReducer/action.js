import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";
const url = `https://masaiprojects-mock-server-api.onrender.com/users`;


export const loginAction =  ({email, password})=> async (dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try {
        let res = await axios.get(url, {
                params:{
                email:email,
                password: password
            }
        })
        if(res.data.length === 1){
            dispatch({type: LOGIN_SUCCESS, payload: res.data[0]});
        }
        return res;
    } catch (error) {
        dispatch({type:LOGIN_FAILURE, payload:error.message})
    }
}

export const SignupAction = async (user)=>{
    try {
        let res = await axios.post(url, user)
        console.log(res)
        return res;
    } catch (error) {
        console.log(error)
    }
}