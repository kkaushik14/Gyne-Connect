import { User } from "../user/User";

export type Otp = {
  code: string | null;
  createdAt: Date;
  expiresAt: Date | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
