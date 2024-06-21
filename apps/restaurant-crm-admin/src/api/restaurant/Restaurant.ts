import { Reservation } from "../reservation/Reservation";
import { Table } from "../table/Table";

export type Restaurant = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  reservations?: Array<Reservation>;
  tables?: Array<Table>;
  updatedAt: Date;
};
