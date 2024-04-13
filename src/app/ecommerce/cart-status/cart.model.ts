import { Products } from "../product-list/product.model";

export class CartItem{
  id: string;
  name: string;
  imageUrl: string;
  unitPrice: number;

  quantity: number;

  constructor(product: Products) {
    this.id = product.id;
    this.name = product.name;
    this.imageUrl = product.imageUrl;
    this.unitPrice = product.unitPrice;

    this.quantity = 1;
}

}
