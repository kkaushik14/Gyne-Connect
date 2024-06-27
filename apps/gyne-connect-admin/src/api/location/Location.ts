import { Hospital } from "../hospital/Hospital";

export type Location = {
  address: string | null;
  createdAt: Date;
  hospital?: Hospital | null;
  id: string;
  latitude: number | null;
  longitude: number | null;
  updatedAt: Date;
};
