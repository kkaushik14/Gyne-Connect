import { SortOrder } from "../../util/SortOrder";

export type HospitalOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  services?: SortOrder;
  updatedAt?: SortOrder;
};
