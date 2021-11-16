export default interface IStateInterface {
id:number,
fname:string,
lname:string,
email:string,
phone:string
}

export default interface IStateInterfaceItem extends Array<IStateInterface>{}
