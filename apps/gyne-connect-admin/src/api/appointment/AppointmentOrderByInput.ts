import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  appointmentDate?: SortOrder;
  createdAt?: SortOrder;
  hospitalId?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
