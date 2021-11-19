import { ADD_USER, DELETE_ACTION, DELETE_USER, GET_USER, UPDATE_USER } from "./constant/actionConstant";

export function addUser(user:IUser){
const action:userAction = {
    type:ADD_USER,
    user
}
return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500);
}
}
export function deleteUser(user:IUser){

    const action:userAction = {
        type:DELETE_USER,
        user
    }
    return (dispatch: DispatchType) => {
        setTimeout(() => {
          dispatch(action)
        }, 500);
    }
}
export function updateUser(user:IUser){
const action:userAction ={
    type:UPDATE_USER,
    user
}
return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500);
}
}
export function getUser(user?:IUser){
    const action:userAction ={
        type:GET_USER,
        user: user? user : {id:0,fname:'',lname:'',email:'',phone:''}
    }
    return (dispatch: DispatchType) => {
        setTimeout(() => {
          dispatch(action)
        }, 500);
    }
}
export function deleteAction(user?:IUser){
    const action:userAction ={
        type:DELETE_ACTION,
        user: user? user : {id:0,fname:'',lname:'',email:'',phone:''}
    }
    return (dispatch: DispatchType) => {
        setTimeout(() => {
          dispatch(action)
        }, 500);
    }
}