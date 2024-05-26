type productsTpes = {
    _id:string , 
    name:string
}
export type menuCategoryTypes = {
    _id:string ,
    headline : string,
    products?:productsTpes[]

}
export type menuTypes = {
    id:string , 
    menuTitle:string,
    route:string,
    category?:menuCategoryTypes[]
}


