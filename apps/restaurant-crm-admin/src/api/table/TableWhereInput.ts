import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type TableWhereInput = {
  id?: StringFilter;
  numberField?: IntNullableFilter;
  reservations?: ReservationListRelationFilter;
  restaurant?: RestaurantWhereUniqueInput;
  seats?: IntNullableFilter;
};
