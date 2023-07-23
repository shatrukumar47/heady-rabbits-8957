import { sample } from "lodash";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actionTypes";
import { getLS, setLS } from "../../LocalStorage/LocalStorageFn";


const initialState = {
    isLoading: false,
    isAuth: getLS("auth")?.auth || false,
    User: getLS("auth")?.userDetails || "",
    errorMessage: "",
    isError: false
}

export const reducer = (state=initialState, {type, payload})=>{
    switch(type){
        case LOGIN_REQUEST:{
            return {...state, isLoading: true}
        }
        case LOGIN_SUCCESS:{
            let data = {
                auth : true,
                userDetails: payload
            }
            setLS("auth", data);
            return {...state, isLoading: false, isAuth:true, User: payload}
        }
        case LOGIN_FAILURE:{
            return {...state, isLoading: false, isError: true, errorMessage: payload}
        }
        case LOGOUT_SUCCESS:{
            return {...state, isLoading: false, isAuth: false, User:"", isError: false, errorMessage: ""}
        }
        default:{
            return state;
        }
    }
}