import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AppointmentWhereInput = {
  appointmentDate?: DateTimeNullableFilter;
  hospital?: HospitalWhereUniqueInput;
  id?: StringFilter;
  payments?: PaymentListRelationFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
