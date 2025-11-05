export class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    qty: number;

    constructor(product: Product) {
        this.id = product.id;
        this.name = product.name;
        this.description = product.description;
        this.price = product.price;
        this.image = product.image;
        this.qty = product.qty;
    }
}
