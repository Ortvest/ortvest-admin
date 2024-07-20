export interface OrdersState {
  selectedOrder: Order | null;
  allOrders: Order[];
  statuses: OrderStatus[];
}

export interface Order {
  _id: string;
  clientEmail: string;
  clientName: string;
  selectedServices?: string[];
  productDescription?: string;
  status: string;
}

export interface OrderStatus {
  label: string;
  bgColor: string;
}
