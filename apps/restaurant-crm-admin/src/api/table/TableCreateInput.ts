import { ReservationCreateNestedManyWithoutTablesInput } from "./ReservationCreateNestedManyWithoutTablesInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type TableCreateInput = {
  numberField?: number | null;
  reservations?: ReservationCreateNestedManyWithoutTablesInput;
  restaurant?: RestaurantWhereUniqueInput | null;
  seats?: number | null;
};
