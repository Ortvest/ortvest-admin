export interface OrdersState {
  selectedOrder: Order | null;
  allOrders: Order[];
}

export interface Order {
  id: string;
  clientEmail: string;
  clientName: string;
  selectedServices?: string[];
  productDescription?: string;
  status: string;
}
