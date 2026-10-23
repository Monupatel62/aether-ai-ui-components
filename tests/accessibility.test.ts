import { describe, expect, it } from "vitest";
import { normalizeAccessibleText, validateSafeHref } from "../src/index.js";

describe("safe link and accessible text utilities", () => {
  it("accepts HTTPS and same-origin relative links", () => {
    expect(validateSafeHref("https://example.com/path")).toBe("https://example.com/path");
    expect(validateSafeHref("/settings/profile")).toBe("/settings/profile");
  });

  it("rejects script/data protocols, protocol-relative URLs, credentials, and controls", () => {
    expect(validateSafeHref("javascript:alert(1)")).toBeUndefined();
    expect(validateSafeHref("data:text/html,hello")).toBeUndefined();
    expect(validateSafeHref("//evil.example/path")).toBeUndefined();
    expect(validateSafeHref("https://user:pass@example.com")).toBeUndefined();
    expect(validateSafeHref("/safe\nheader")).toBeUndefined();
  });

  it("allows HTTP only when explicitly enabled", () => {
    expect(validateSafeHref("http://example.com")).toBeUndefined();
    expect(validateSafeHref("http://example.com", { allowHttp: true })).toBe("http://example.com/");
  });

  it("normalizes plain accessible text and enforces bounds", () => {
    expect(normalizeAccessibleText("  Save\n\t changes  ")).toBe("Save changes");
    expect(normalizeAccessibleText("abcdef", 3)).toBe("abc");
    expect(() => normalizeAccessibleText("text", 0)).toThrow();
  });
});
