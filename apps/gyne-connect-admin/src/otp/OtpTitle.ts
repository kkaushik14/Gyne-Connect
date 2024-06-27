import { Otp as TOtp } from "../api/otp/Otp";

export const OTP_TITLE_FIELD = "code";

export const OtpTitle = (record: TOtp): string => {
  return record.code?.toString() || String(record.id);
};
