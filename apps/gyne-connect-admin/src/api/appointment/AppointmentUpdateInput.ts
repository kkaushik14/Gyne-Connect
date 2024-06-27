import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";
import { PaymentUpdateManyWithoutAppointmentsInput } from "./PaymentUpdateManyWithoutAppointmentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AppointmentUpdateInput = {
  appointmentDate?: Date | null;
  hospital?: HospitalWhereUniqueInput | null;
  payments?: PaymentUpdateManyWithoutAppointmentsInput;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
