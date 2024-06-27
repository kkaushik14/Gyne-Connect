import { AppointmentCreateNestedManyWithoutHospitalsInput } from "./AppointmentCreateNestedManyWithoutHospitalsInput";
import { LocationCreateNestedManyWithoutHospitalsInput } from "./LocationCreateNestedManyWithoutHospitalsInput";

export type HospitalCreateInput = {
  address?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutHospitalsInput;
  locations?: LocationCreateNestedManyWithoutHospitalsInput;
  name?: string | null;
  phone?: string | null;
  services?: string | null;
};
