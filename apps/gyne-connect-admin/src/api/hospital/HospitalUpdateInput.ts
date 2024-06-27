import { AppointmentUpdateManyWithoutHospitalsInput } from "./AppointmentUpdateManyWithoutHospitalsInput";
import { LocationUpdateManyWithoutHospitalsInput } from "./LocationUpdateManyWithoutHospitalsInput";

export type HospitalUpdateInput = {
  address?: string | null;
  appointments?: AppointmentUpdateManyWithoutHospitalsInput;
  locations?: LocationUpdateManyWithoutHospitalsInput;
  name?: string | null;
  phone?: string | null;
  services?: string | null;
};
