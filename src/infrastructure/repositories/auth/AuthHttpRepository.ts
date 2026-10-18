import type { AuthRepository } from "../../../domain/auth/AuthRepository";
import type { AuthSession } from "../../../domain/auth/AuthSession";
import { mapAuthResponse } from "../../mappers/auth/authMapper";
import { postJson } from "../../http/httpClient";

export class AuthHttpRepository implements AuthRepository {
  async login(email: string, password: string): Promise<AuthSession> {
    const path = process.env.API_LOGIN_PATH ?? "/api/auth/login";
    const response = await postJson(path, { email, password });

    return mapAuthResponse(response);
  }
}