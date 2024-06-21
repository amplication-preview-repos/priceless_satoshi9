import { ReservationUpdateManyWithoutRestaurantsInput } from "./ReservationUpdateManyWithoutRestaurantsInput";
import { TableUpdateManyWithoutRestaurantsInput } from "./TableUpdateManyWithoutRestaurantsInput";

export type RestaurantUpdateInput = {
  address?: string | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  reservations?: ReservationUpdateManyWithoutRestaurantsInput;
  tables?: TableUpdateManyWithoutRestaurantsInput;
};
