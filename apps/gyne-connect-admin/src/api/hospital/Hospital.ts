import { Appointment } from "../appointment/Appointment";
import { Location } from "../location/Location";

export type Hospital = {
  address: string | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  id: string;
  locations?: Array<Location>;
  name: string | null;
  phone: string | null;
  services: string | null;
  updatedAt: Date;
};
