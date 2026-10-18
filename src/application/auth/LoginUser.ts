import type { AuthRepository } from "../../domain/auth/AuthRepository";
import type { AuthSession } from "../../domain/auth/AuthSession";

export class LoginValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LoginValidationError";
  }
}

export class LoginUser {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(email: string, password: string): Promise<AuthSession> {
    const normalizedEmail = email.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      throw new LoginValidationError("Enter a valid email address.");
    }

    if (password.length === 0) {
      throw new LoginValidationError("Enter your password.");
    }

    return this.authRepository.login(normalizedEmail, password);
  }
}