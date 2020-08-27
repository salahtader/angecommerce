export class Product {
    id:number
    name:string
    description: string
    price:number
    imageUrl:string

    constructor(id,name,description="",price=0,imageUrl="https://www.maskecubos.com/4057-large_default/z-cube-tirelire.jpg"){
        this.id=id
        this.name=name
        this.price=price
        this.description=description
        this.imageUrl=imageUrl
    }

    }
