export interface SafeHrefOptions {
  readonly allowHttp?: boolean;
  readonly allowRelative?: boolean;
}

/**
 * Accept safe HTTP(S) links and same-origin relative paths only. This helper is defense-in-depth:
 * the UI must still render the value as an escaped attribute and never inject it as HTML.
 */
export function validateSafeHref(value: string, options: SafeHrefOptions = {}): string | undefined {
  if (typeof value !== "string" || value.length === 0 || value.length > 2048 ||
      /[\u0000-\u0020\u007f\\]/.test(value)) return undefined;

  if (options.allowRelative !== false && value.startsWith("/") && !value.startsWith("//")) {
    try {
      const parsed = new URL(value, "https://aether.invalid");
      if (parsed.origin === "https://aether.invalid" && !parsed.username && !parsed.password) return value;
    } catch {
      return undefined;
    }
  }

  try {
    const parsed = new URL(value);
    if (parsed.username || parsed.password) return undefined;
    if (parsed.protocol === "https:") return parsed.toString();
    if (options.allowHttp === true && parsed.protocol === "http:") return parsed.toString();
    return undefined;
  } catch {
    return undefined;
  }
}

/** Normalize a plain-text accessible name; this does not sanitize HTML for injection. */
export function normalizeAccessibleText(value: string, maxChars = 240): string {
  if (typeof value !== "string") throw new TypeError("Accessible text must be a string.");
  if (!Number.isInteger(maxChars) || maxChars < 1 || maxChars > 2_000) {
    throw new RangeError("maxChars must be between 1 and 2000.");
  }
  return value
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxChars);
}
