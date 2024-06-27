import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OtpWhereInput = {
  code?: StringNullableFilter;
  expiresAt?: DateTimeNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
