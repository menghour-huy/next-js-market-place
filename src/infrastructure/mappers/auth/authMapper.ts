import type { AuthSession } from "../../../domain/auth/AuthSession";
import type { AuthResponseDto } from "../../dtos/AuthResponseDto";

export class AuthResponseFormatError extends Error {
  constructor() {
    super(
      "The login API returned an unexpected response. Expected accessToken and user (id, name, email).",
    );
    this.name = "AuthResponseFormatError";
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function mapAuthResponse(response: unknown): AuthSession {
  if (!isRecord(response) || !isRecord(response.user)) {
    throw new AuthResponseFormatError();
  }

  const { accessToken, user } = response;

  if (
    typeof accessToken !== "string" ||
    accessToken.length === 0 ||
    (typeof user.id !== "string" && typeof user.id !== "number") ||
    typeof user.name !== "string" ||
    typeof user.email !== "string"
  ) {
    throw new AuthResponseFormatError();
  }

  const dto: AuthResponseDto = {
    accessToken,
    user: {
      id: String(user.id),
      name: user.name,
      email: user.email,
    },
  };

  return {
    accessToken: dto.accessToken,
    user: {
      ...dto.user,
      id: String(dto.user.id),
    },
  };
}