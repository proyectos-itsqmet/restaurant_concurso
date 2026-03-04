export interface OrderData {
  id?: number;
  tableNumber: number;
  total: number;
  iva: number;
  createdAt: string;
export interface Order {
  id: number;
  tableNumber: number;
  total: string;
  iva: number;
  createdAt: Date;
}
