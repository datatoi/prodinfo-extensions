# Extensions roadmap

Single implementation checklist. [Context](context.md) records current state and actual validation.

## E0 — public foundation

- [x] Bootstrap public repo, MIT license for new material, contribution rules and documentation.
- [x] Record canonical public contract/SDK ownership and independent versioning from the private host.
- [x] Record public destination-adapter scope and no requirement to retain Rust.

## E1 — minimal contract and executable example

- [ ] Define a pre-release manifest, compatibility/capability model and strict input/output/error
  schemas for a minimal fixture-only action. Keep speculative operations out of a stable protocol.
- [ ] Generate TypeScript author types/SDK from canonical schema definitions and verify generation.
- [ ] Add mock host, synthetic valid/invalid fixtures and executable example with config validation.
- [ ] Prove package sources cannot broaden capabilities or escape declared resources/SDK operations.
- [ ] Add dependency-light public build/test CI with no private checkout/token requirements; coordinate
  real-host conformance through the same published schema/fixture versions.

## E2 — authoring and configurable actions

- [ ] Declarative configuration forms/action descriptions: Check connection, Discover, Pull, Preview,
  Run. Distinguish structural validation, authorized reads, intake and external write effects.
- [ ] SDK diagnostics/source checking and fixtures supporting AI draft/patch/test loops without
  granting application-source access or automatic activation/deployment/publication.
- [ ] Safe author examples for external IDs, source bindings, field targets, evidence/proposal
  submission and reviewed delivery. Keep package state separate from canonical host truth.
- [ ] Versioned state/event capabilities, limits, migration declarations and namespaced custom events,
  coordinated with host implementation and conformance rather than prose-only promises.

## E3 — destination compatibility

- [ ] Public generic Standard API connector/profile with approved wire schemas/fixtures from their
  existing owner. Cover WooCommerce/Magento service behavior without private source dependencies.
- [ ] Port 1C and other destination adapters individually to public TypeScript packages after checking
  actual legacy capabilities, licensing and behavior. A directory is not a shipping integration.
- [ ] Per-item outcomes, revision/payload pins, identity/reference mapping, pagination, rate handling,
  idempotency and uncertain-send reconciliation. Test without real customer data first.
- [ ] Provider-specific live-account acceptance, permission/config requirements and compatibility
  matrix; no automatic claim of support based on synthetic tests.

## E4 — reusable workflows and publication

- [ ] Predefined CSV enrichment preparation/review/export and competitor discovery/watchlist/monitoring
  examples. Separate uncertain identity/price evidence from approved matches and last valid history.
- [ ] Fork/compare/test examples for rapid AI-authored workflow changes; retain baseline/failed-step
  evidence and demonstrate bounded resume without duplicating committed effects.
- [ ] Independently versioned SDK/contracts/extensions, release artifacts, provenance/license notices,
  immutable digests, compatibility metadata and an external-publisher starter.
- [ ] Package registry/distribution and explicit marketplace submission; certification scope per
  version, advisory/revocation/update policy and commercial licensing remain separate designs.
