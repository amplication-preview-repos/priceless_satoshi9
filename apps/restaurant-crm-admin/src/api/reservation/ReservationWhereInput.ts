import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type ReservationWhereInput = {
  client?: ClientWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  numberOfGuests?: IntNullableFilter;
  restaurant?: RestaurantWhereUniqueInput;
  specialRequests?: StringNullableFilter;
  table?: TableWhereUniqueInput;
  time?: DateTimeNullableFilter;
};
