import test from "node:test";
import assert from "node:assert/strict";
import { DESIGN_TOKENS, classNames, buttonProps, fieldProps, VISUALLY_HIDDEN_STYLE } from "../src/index.js";

test("exports immutable design tokens", () => {
  assert.equal(Object.isFrozen(DESIGN_TOKENS), true);
  assert.equal(typeof DESIGN_TOKENS.color.focus, "string");
});

test("classNames ignores empty and non-string values without adding extra spaces", () => {
  assert.equal(classNames("base", null, [" active ", false, ["wide"]], ""), "base active wide");
});

test("button props disable busy controls and preserve explicit button type", () => {
  assert.deepEqual(buttonProps({ busy: true, type: "submit", label: "Save" }), { type: "submit", disabled: true, "aria-busy": "true", "aria-label": "Save" });
  assert.throws(() => buttonProps({ type: "link" }), /Invalid button type/);
  assert.throws(() => buttonProps({ label: " " }), /Accessible label/);
});

test("field props require stable id and visible label and expose error semantics", () => {
  assert.deepEqual(fieldProps({ id: "email", label: "Email address", describedBy: "email-error", invalid: true, required: true }), {
    label: "Email address", input: { id: "email", required: true, disabled: false, "aria-invalid": "true", "aria-describedby": "email-error" }
  });
  assert.throws(() => fieldProps({ id: "email" }), /Visible field label/);
});

test("visually hidden style remains available for assistive text", () => {
  assert.equal(VISUALLY_HIDDEN_STYLE.position, "absolute");
  assert.equal(VISUALLY_HIDDEN_STYLE.whiteSpace, "nowrap");
});
