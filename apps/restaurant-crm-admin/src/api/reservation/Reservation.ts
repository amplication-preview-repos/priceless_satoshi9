import { Client } from "../client/Client";
import { Restaurant } from "../restaurant/Restaurant";
import { Table } from "../table/Table";

export type Reservation = {
  client?: Client | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  numberOfGuests: number | null;
  restaurant?: Restaurant | null;
  specialRequests: string | null;
  table?: Table | null;
  time: Date | null;
  updatedAt: Date;
};
