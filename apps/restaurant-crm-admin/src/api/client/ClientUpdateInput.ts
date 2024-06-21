import { ReservationUpdateManyWithoutClientsInput } from "./ReservationUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  reservations?: ReservationUpdateManyWithoutClientsInput;
};
