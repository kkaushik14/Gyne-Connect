import { Appointment } from "../appointment/Appointment";
import { Otp } from "../otp/Otp";
import { Payment } from "../payment/Payment";
import { JsonValue } from "type-fest";

export type User = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  otps?: Array<Otp>;
  payments?: Array<Payment>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
