export interface userDTO{
    id:number,
    creationDate:Date,
    name:string,
    family:string,
    phoneNumber:string,
    email:string,
    password:string,
    avatarName:string,
    isActive:boolean,
    gender:userGender,
    role:userRole[]
}
export interface userRole{
    role:string,
    roleId:string,
}
export enum userGender{
    نامشخص=0,
    آقا=1,
    خانم=2,
}