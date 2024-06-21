import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  numberOfGuests?: SortOrder;
  restaurantId?: SortOrder;
  specialRequests?: SortOrder;
  tableId?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
