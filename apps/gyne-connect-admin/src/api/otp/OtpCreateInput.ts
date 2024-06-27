import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OtpCreateInput = {
  code?: string | null;
  expiresAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
