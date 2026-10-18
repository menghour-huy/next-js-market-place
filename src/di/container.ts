
import { AuthHttpRepository } from "@/infrastructure/repositories/auth/AuthHttpRepository";
import { LoginUser } from "@/application/auth/LoginUser";

const authRepository = new AuthHttpRepository();

export const container = {
  loginUser: new LoginUser(authRepository),
};