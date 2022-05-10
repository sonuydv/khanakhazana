export class FoodItem {
  constructor(
    public name: string,
    public desc: string,
    public price: number,
    public img: string
  ) {
  }
}


export class OrderItem{
  constructor(
    public orderId: number,
    public name: string
  ) {
  }
}
