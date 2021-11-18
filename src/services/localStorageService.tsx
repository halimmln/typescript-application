
export default class LocalStorage {

    getData(store:string){
        let data: any = [];
         data =  localStorage.getItem(store);
        if(data !== undefined && data !== null && data !== ''){
            return JSON.parse(data);
        } else {
            data =[];
            return data ;
        }
    }
    setData(store:string,data:userState){
        if(store !== null && store !== undefined && store !== ''){
            localStorage.setItem(store,JSON.stringify(data));
            
        }
    }

}