import { SortOrder } from "../../util/SortOrder";

export type OtpOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  expiresAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
