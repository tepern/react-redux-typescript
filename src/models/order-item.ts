export interface OrderItem {
    id: string;
    name: string;
    link?: string;
    unit: string;
    quantity: number;
    price: number;
    totalPrice: number;
}