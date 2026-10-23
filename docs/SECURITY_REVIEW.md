# Security Review — aether-ai-ui-components

Status: review checklist; no implementation or test evidence is present.

## Threats
unsafe HTML/URL handling, inaccessible keyboard/focus behavior, misleading approval/destructive dialogs, accidental sensitive content rendering, and breaking shared styles.

## Required controls
- [ ] Safe URL schemes and sanitized rich text.
- [ ] No raw HTML by default.
- [ ] Accessible focus handling for dialogs and destructive actions.
- [ ] No hidden network access or secret handling in shared components.
- [ ] Dependency/license scanning and pinned toolchain.

## Required tests
Test keyboard navigation, screen-reader labels, focus trap/restoration, safe URL protocols, rich-content sanitization, confirmation states, and accessible loading/error states. Use synthetic UI data only.
