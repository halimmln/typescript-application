import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

export const store:Store<userState,userAction>& {dispatch:DispatchType} = createStore(reducer,applyMiddleware(thunk));