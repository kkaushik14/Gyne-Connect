import { Appointment } from "../appointment/Appointment";
import { User } from "../user/User";

export type Payment = {
  amount: number | null;
  appointment?: Appointment | null;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
