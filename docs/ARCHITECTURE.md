# Architecture — aether-ai-ui-components

## Boundary
Shared UI components are presentation primitives; they do not grant access or decide business policy.

## Layers
1. Design tokens and theme variables.
2. Stateless primitives and layout components.
3. Accessible interaction patterns such as dialogs, menus, forms, and status messages.
4. Consumer-specific composition in product apps.

## Safety rules
Use safe URL protocols, sanitize rich content, avoid raw HTML by default, and make destructive/approval actions explicit. Keep focus management and keyboard interactions consistent across consumers.
