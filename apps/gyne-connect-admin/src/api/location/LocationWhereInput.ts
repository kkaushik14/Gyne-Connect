import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type LocationWhereInput = {
  address?: StringNullableFilter;
  hospital?: HospitalWhereUniqueInput;
  id?: StringFilter;
  latitude?: FloatNullableFilter;
  longitude?: FloatNullableFilter;
};
