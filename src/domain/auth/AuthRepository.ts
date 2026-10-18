import type { AuthSession } from "./AuthSession";

export interface AuthRepository {
  login(email: string, password: string): Promise<AuthSession>;
}