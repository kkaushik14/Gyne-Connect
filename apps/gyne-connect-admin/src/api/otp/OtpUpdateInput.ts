import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OtpUpdateInput = {
  code?: string | null;
  expiresAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
