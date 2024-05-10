type productsTpes = {
    id:string , 
    name:string
}
export type menuCategoryTypes = {
    id:string ,
    headline : string,
    products?:productsTpes[]

}
export type menuTypes = {
    id:string , 
    menuTitle:string,
    route:string,
    category?:menuCategoryTypes[]
}


