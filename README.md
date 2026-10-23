# aether-ai-ui-components

Aether AI repository for Accessible reusable UI components, theme tokens, layout primitives, and interaction patterns.

## Status

Initial framework-neutral accessibility/link-safety helpers are in review. No React components, styling system, or visual test stack is implemented.

## Initial implementation

The draft package validates safe HTTPS and same-origin relative hrefs, optionally allows HTTP when explicitly requested, rejects dangerous URL schemes/protocol-relative links/embedded credentials, and normalizes plain accessible text. This is defense-in-depth only; consumers must still render escaped attributes and must not inject raw HTML. Framework, styling, and component API decisions remain open.

## Documentation

- [Repository specification](docs/REPOSITORY_SPECIFICATION.md) — mission, boundaries, dependencies, contracts, security, tests, and implementation gates.
- [Aether AI platform architecture](https://github.com/Monupatel62/aether-ai-platform/blob/main/docs/MASTER_ARCHITECTURE.md)
- [Master repository catalog](https://github.com/Monupatel62/aether-ai-platform/blob/main/docs/REPOSITORY_CATALOG.md)

## Working rules

- Keep this repository within its documented ownership boundary.
- Do not commit secrets, credentials, production data, or unreviewed generated code.
- Version public contracts and document breaking changes.
- Use synthetic or sanitized data in tests.
- Update the master catalog when ownership or cross-repository contracts change.


## Repository documents

- [Project specification](docs/PROJECT_SPEC.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Dependencies and contracts](docs/DEPENDENCIES_AND_CONTRACTS.md)
- [Implementation plan](docs/IMPLEMENTATION_PLAN.md)
- [Research and licenses](docs/RESEARCH_AND_LICENSES.md)
- [Technical design](docs/TECHNICAL_DESIGN.md)
- [Security review](docs/SECURITY_REVIEW.md)
- [Engineering standard](docs/ENGINEERING_STANDARD.md)
- [Work log](docs/WORKLOG.md)
