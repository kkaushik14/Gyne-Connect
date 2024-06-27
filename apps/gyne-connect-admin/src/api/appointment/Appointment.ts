import { Hospital } from "../hospital/Hospital";
import { Payment } from "../payment/Payment";
import { User } from "../user/User";

export type Appointment = {
  appointmentDate: Date | null;
  createdAt: Date;
  hospital?: Hospital | null;
  id: string;
  payments?: Array<Payment>;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
