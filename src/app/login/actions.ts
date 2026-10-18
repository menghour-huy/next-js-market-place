"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LoginValidationError } from "@/application/auth/LoginUser";
import { container } from "@/di/container";
import { ApiError } from "@/infrastructure/http/httpClient";
import { AuthResponseFormatError } from "@/infrastructure/mappers/auth/authMapper";

export async function loginAction(
  _previousState: { error: string | null },
  formData: FormData,
): Promise<{ error: string | null }> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return { error: "Enter your email address and password." };
  }

  let accessToken: string;

  try {
    const session = await container.loginUser.execute(email, password);
    accessToken = session.accessToken;
  } catch (error) {
    if (error instanceof LoginValidationError || error instanceof ApiError) {
      return { error: error.message };
    }

    if (error instanceof AuthResponseFormatError) {
      return {
        error: "The login API response does not match the expected format.",
      };
    }

    throw error;
  }

  const cookieStore = await cookies();
  cookieStore.set("marketplace_access_token", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  redirect("/");
}
