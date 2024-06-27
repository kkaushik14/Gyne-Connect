import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";
import { PaymentCreateNestedManyWithoutAppointmentsInput } from "./PaymentCreateNestedManyWithoutAppointmentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AppointmentCreateInput = {
  appointmentDate?: Date | null;
  hospital?: HospitalWhereUniqueInput | null;
  payments?: PaymentCreateNestedManyWithoutAppointmentsInput;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
