import { Reservation } from "../reservation/Reservation";
import { Restaurant } from "../restaurant/Restaurant";

export type Table = {
  createdAt: Date;
  id: string;
  numberField: number | null;
  reservations?: Array<Reservation>;
  restaurant?: Restaurant | null;
  seats: number | null;
  updatedAt: Date;
};
