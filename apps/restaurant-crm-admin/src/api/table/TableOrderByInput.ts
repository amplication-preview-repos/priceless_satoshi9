import { SortOrder } from "../../util/SortOrder";

export type TableOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  numberField?: SortOrder;
  restaurantId?: SortOrder;
  seats?: SortOrder;
  updatedAt?: SortOrder;
};
