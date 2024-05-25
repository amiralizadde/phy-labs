export type createProductType={
    name:string
    // image:File
    description:string
}

export type featureType={
    _id:string
    title:string
    feature:string
}

export type productType={
    _id:string
    name:string
    description:string
    image:string
    features:featureType[]
}

export type product={
    _id:string
    locale:string
    headline:string
    products:productType[]
}