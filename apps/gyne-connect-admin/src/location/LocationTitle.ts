import { Location as TLocation } from "../api/location/Location";

export const LOCATION_TITLE_FIELD = "address";

export const LocationTitle = (record: TLocation): string => {
  return record.address?.toString() || String(record.id);
};
