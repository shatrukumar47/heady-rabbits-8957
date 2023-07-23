import { getLS, setLS } from "../../LocalStorage/LocalStorageFn"
import { PATCH_FAILURE, PATCH_REQUEST, PATCH_SUCCESS } from "../actionTypes"


const initialState={
    User: getLS("auth")?.userDetails || "",
   isLoading:false,
   isError:false,
}

 export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case PATCH_REQUEST:
            return{...state,isLoading:true}
        case PATCH_SUCCESS:
            let data={
                userDetails:payload
            }
            setLS("auth", data);
            return{...state,isLoading:false,User:payload}
        case PATCH_FAILURE:
            return{...state,isError:true,isLoading:false}
        default:
            return state;
    }
}