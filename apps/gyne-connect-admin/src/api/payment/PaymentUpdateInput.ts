import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  appointment?: AppointmentWhereUniqueInput | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
