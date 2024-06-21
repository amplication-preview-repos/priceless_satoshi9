import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type ReservationCreateInput = {
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
  numberOfGuests?: number | null;
  restaurant?: RestaurantWhereUniqueInput | null;
  specialRequests?: string | null;
  table?: TableWhereUniqueInput | null;
  time?: Date | null;
};
