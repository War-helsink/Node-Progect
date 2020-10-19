export interface TodoItems {
    id: string
    name:string
    price: number
    specifications: {
        color: string
        size: number
        weight:number
    }
    img: {
        url: string
        picture:string
    }
    date: Date
} 



export interface sortSearchFilter{
    sort: string
    filter: {
        color: string[]
        size:string[]
        weight:string[]
    }
    search:string
}