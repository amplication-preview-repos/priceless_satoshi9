import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";
import { TableListRelationFilter } from "../table/TableListRelationFilter";

export type RestaurantWhereInput = {
  address?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  reservations?: ReservationListRelationFilter;
  tables?: TableListRelationFilter;
};
