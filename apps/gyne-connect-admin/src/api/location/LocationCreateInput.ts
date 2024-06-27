import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";

export type LocationCreateInput = {
  address?: string | null;
  hospital?: HospitalWhereUniqueInput | null;
  latitude?: number | null;
  longitude?: number | null;
};
