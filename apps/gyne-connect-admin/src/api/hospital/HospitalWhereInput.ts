import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocationListRelationFilter } from "../location/LocationListRelationFilter";

export type HospitalWhereInput = {
  address?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
  id?: StringFilter;
  locations?: LocationListRelationFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  services?: StringNullableFilter;
};
