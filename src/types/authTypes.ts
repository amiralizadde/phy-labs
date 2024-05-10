export type userType = {
    id:string , 
    fullname:string,
    email:string,
    password:string,
    role:string
}

export type createUserType = {
    fullname:string,
    email:string,
    password:string,
}
export type loginUserType = {
    email:string,
    password:string,
}