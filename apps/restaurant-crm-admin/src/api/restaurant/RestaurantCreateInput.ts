import { ReservationCreateNestedManyWithoutRestaurantsInput } from "./ReservationCreateNestedManyWithoutRestaurantsInput";
import { TableCreateNestedManyWithoutRestaurantsInput } from "./TableCreateNestedManyWithoutRestaurantsInput";

export type RestaurantCreateInput = {
  address?: string | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  reservations?: ReservationCreateNestedManyWithoutRestaurantsInput;
  tables?: TableCreateNestedManyWithoutRestaurantsInput;
};
