
interface IUser {
    id:number,
    fname:string,
    lname:string,
    email:string,
    phone:string
  }
  
  type userState = {
    userStates: IUser[];
  };
  
  type userAction = {
    type: string;
    user: IUser;
  };
  
  type DispatchType = (args: userAction) => userAction;
  