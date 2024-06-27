import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OtpListRelationFilter } from "../otp/OtpListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type UserWhereInput = {
  appointments?: AppointmentListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  otps?: OtpListRelationFilter;
  payments?: PaymentListRelationFilter;
  username?: StringFilter;
};
