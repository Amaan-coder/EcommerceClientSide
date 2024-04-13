export class Products{

  id!: string;
  sku!: string;
  name!: string;
  description!: string;
  unitPrice!: number;
  imageUrl!: string;
  active!: boolean;
  unitsInStock!: number;
  dateCreated!: Date;
  lastUpdate!: Date;
}
export class ProductCategoryDto {
  // Define properties if needed
  id!: number;
  categoryName!:string;
}
