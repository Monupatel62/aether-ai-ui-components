export const DESIGN_TOKENS = Object.freeze({
  color: Object.freeze({ text: "#172033", muted: "#586174", surface: "#ffffff", border: "#d5dbe5", primary: "#2457d6", danger: "#b42318", focus: "#6d9eff" }),
  radius: Object.freeze({ sm: "0.25rem", md: "0.5rem", lg: "0.75rem", pill: "999px" }),
  spacing: Object.freeze({ 0: "0", 1: "0.25rem", 2: "0.5rem", 3: "0.75rem", 4: "1rem", 6: "1.5rem", 8: "2rem" }),
  typography: Object.freeze({ body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', mono: 'ui-monospace, SFMono-Regular, Menlo, monospace' }),
});

export function classNames(...values) {
  return values.flat(Infinity).filter((value) => typeof value === "string" && value.trim()).map((value) => value.trim()).join(" ");
}

export function buttonProps({ disabled = false, busy = false, type = "button", label } = {}) {
  if (!["button", "submit", "reset"].includes(type)) throw new TypeError("Invalid button type");
  if (label !== undefined && (typeof label !== "string" || !label.trim())) throw new TypeError("Accessible label must be a non-empty string");
  const props = { type, disabled: Boolean(disabled || busy) };
  if (busy) props["aria-busy"] = "true";
  if (label) props["aria-label"] = label.trim();
  return Object.freeze(props);
}

export function fieldProps({ id, label, describedBy, invalid = false, required = false, disabled = false } = {}) {
  if (typeof id !== "string" || !id.trim()) throw new TypeError("Field id is required");
  if (typeof label !== "string" || !label.trim()) throw new TypeError("Visible field label is required");
  const props = { id: id.trim(), required: Boolean(required), disabled: Boolean(disabled), "aria-invalid": invalid ? "true" : "false" };
  if (describedBy !== undefined) {
    if (typeof describedBy !== "string" || !describedBy.trim()) throw new TypeError("describedBy must be a non-empty id reference");
    props["aria-describedby"] = describedBy.trim();
  }
  return Object.freeze({ label: label.trim(), input: Object.freeze(props) });
}

export const VISUALLY_HIDDEN_STYLE = Object.freeze({
  position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px",
  overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", border: 0,
});
