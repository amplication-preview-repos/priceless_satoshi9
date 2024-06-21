import { ReservationUpdateManyWithoutTablesInput } from "./ReservationUpdateManyWithoutTablesInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type TableUpdateInput = {
  numberField?: number | null;
  reservations?: ReservationUpdateManyWithoutTablesInput;
  restaurant?: RestaurantWhereUniqueInput | null;
  seats?: number | null;
};
