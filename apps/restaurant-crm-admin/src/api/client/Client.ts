import { Reservation } from "../reservation/Reservation";

export type Client = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  reservations?: Array<Reservation>;
  updatedAt: Date;
};
