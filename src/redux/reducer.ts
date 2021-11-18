import LocalStorage from "../services/localStorageService";
import { ADD_USER, DELETE_USER, GET_USER, UPDATE_USER } from "./constant/actionConstant";

const initialState : userState ={
    userStates:[{id:0,fname:'',lname:'',email:'',phone:''}]
};
const LocalStorage1 =new LocalStorage();
const reducer = (state:userState = initialState , action:userAction) :userState => {
switch(action.type){
    case ADD_USER:
        const newUser:IUser = {
            id: action.user.id,
            fname:action.user.fname,
            lname:action.user.lname,
            email:action.user.email,
            phone:action.user.phone,
        }
        const getdata = LocalStorage1.getData('store'); 
       let values = getdata && getdata.userStates ?  getdata.userStates:[];
        if (newUser.id === 0 ) {
                if (localStorage.getItem('store') == null) {
                    newUser.id = 1;
                } else {
                    newUser.id = values.length + 1;
                }
                values.push(newUser);
              } else {
               
                  let index = values.findIndex((i:IUser) => i.id == newUser.id);
                  if(index != -1 ){
                               
                    values[index].fname = newUser.fname;
                    values[index].lname = newUser.lname
                    values[index].email = newUser.email
                    values[index].phone = newUser.phone;
                  
                  }
               }
        const newState : userState = {...state,userStates:values}
          LocalStorage1.setData('store',newState);
          return  newState;
    case UPDATE_USER:
        const getdata12 = LocalStorage1.getData('store'); 
        let getvalues = getdata12 && getdata12.userStates ?  getdata12.userStates:[];
                   let index = getvalues.findIndex((i:IUser) => i.id == action.user.id);
                   if(index !== -1 ){
                    getvalues[index].fname = action.user.fname;
                    getvalues[index].lname = action.user.lname
                    getvalues[index].email = action.user.email
                    getvalues[index].phone = action.user.phone;
                   
                   } 
           const newupdatedState : userState = {userStates:getvalues}
           LocalStorage1.setData('store',newupdatedState);
         return  newupdatedState;
    case DELETE_USER:
        const getdata1 = LocalStorage1.getData('store');
        let values1 =  getdata1.userStates;
        values1.forEach((k:any, i:number) => {
            if (k.id === action.user.id) {
                values1.splice(i,1);
            }
          });
          const newState1 : userState = {userStates:values1}
            LocalStorage1.setData('store',newState1);
          return  newState1;
    case GET_USER:
         const getState = LocalStorage1.getData('store');
            if(getState && getState.userStates && getState.userStates.length){
                return getState;
            }
            return state;
}
return state;
}
export default reducer;