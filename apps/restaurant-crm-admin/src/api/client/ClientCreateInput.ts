import { ReservationCreateNestedManyWithoutClientsInput } from "./ReservationCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  reservations?: ReservationCreateNestedManyWithoutClientsInput;
};
