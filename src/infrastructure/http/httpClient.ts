export class ApiError extends Error {
  constructor(message: string, readonly status?: number) {
    super(message);
    this.name = "ApiError";
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getErrorMessage(body: unknown): string | undefined {
  if (!isRecord(body)) {
    return undefined;
  }

  for (const key of ["message", "detail", "title"]) {
    const value = body[key];
    if (typeof value === "string" && value.trim().length > 0) {
      return value;
    }
  }

  return undefined;
}

export async function postJson(
  path: string,
  body: Record<string, string>,
): Promise<unknown> {
  const baseUrl = process.env.API_BASE_URL;
  if (!baseUrl) {
    throw new ApiError("API_BASE_URL is not configured on the server.");
  }

  let url: URL;
  try {
    url = new URL(path, baseUrl);
  } catch {
    throw new ApiError("API_BASE_URL must be a valid URL.");
  }

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });
  } catch (error) {
    if (error instanceof TypeError) {
      console.error(`[httpClient] Request to ${url.origin} failed:`, error.cause ?? error);
      throw new ApiError(
        "Could not connect to the API. Check that it is running and reachable.",
      );
    }

    throw error;
  }

  const responseText = await response.text();
  let responseBody: unknown;

  if (responseText.length > 0) {
    try {
      responseBody = JSON.parse(responseText) as unknown;
    } catch {
      throw new ApiError(
        response.ok
          ? "The API returned invalid JSON."
          : `The API request failed (${response.status}).`,
        response.status,
      );
    }
  }

  if (!response.ok) {
    throw new ApiError(
      getErrorMessage(responseBody) ??
        `Login failed (HTTP ${response.status}). Check your credentials and try again.`,
      response.status,
    );
  }

  return responseBody;
}