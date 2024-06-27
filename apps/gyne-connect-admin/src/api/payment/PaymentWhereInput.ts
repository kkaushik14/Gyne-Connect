import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  appointment?: AppointmentWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
