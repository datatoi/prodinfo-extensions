# Extensions roadmap — contract first, interfaces after the core

Draft 1 for review, 27 October 2026. Sole task checklist. Keep milestones coarse until a working
host proves the boundary; detailed connector/action GUI plans follow core acceptance.

## E0 — public foundation and review draft

- [x] Bootstrap public repo, MIT license for new material, contribution rules and doc ownership.
- [x] Record public contracts/SDK/testing/integration ownership and TypeScript/no-Rust requirement.
- [x] Draft module/package/action/invocation/result semantics in [contract draft](contract-draft.md).
- [x] Review lifecycle/failure gaps and record conformance requirements for authority changes,
  package dependencies/removal, timers/events, effect recovery and consumer-specific exports.
  This is design review only, not executable compatibility or a completed runtime milestone.
- [ ] Review the smallest contract boundary before assigning executable protocol/package versions.

## E1 — executable contract and core conformance

- [ ] Implement minimal strict schemas, generated author types and valid/invalid synthetic fixtures.
  Separate core metadata/public guest projection from private administration; do not publish a
  speculative complete SDK before the operations exist.
  Describe operation automation/effect/precondition/availability/validation/recovery so delegated
  console and manual calls can be tested for parity without broadening guest package authority.
  Specify authenticated replay visibility, current authority versus historical pins and restricted
  dependency/build identity with the first corresponding executable capabilities.
- [ ] Mock host and CLI/test example for config, action, durable job, request replay, denied scope,
  malformed schema and late cancellation cases; no private checkout or real provider required.
- [ ] Validate against the first real headless core; keep package/config/activation/run identity and
  external uncertainty explicit. Establish public CI and versioned artifacts only when executable.
  Add lifecycle/recovery conformance as capabilities enter the schema: removal/migration failure,
  interval missed/overlap rules, event replay/quarantine and broker-side effect crash windows.
- [ ] Test project/routine resource bindings, input pins, output/scratch scope and immutable team-
  registry sources through the same contract; no engine-specific DB or private-source dependency.
- [ ] Host-stamped operation/run/attempt/step/part trace context, structured diagnostic schemas and
  logger/query conformance: forged identity, overflow/suppression, secret masking and event separation.
  [Telemetry proposal](telemetry-draft.md) remains review-only until executable schemas exist.

## E2 — destination interface proof after core acceptance

- [ ] Write a detailed first adapter plan against the tested core. Start with generic Standard API
  compatibility for existing shop/service APIs, approved public wire artifacts and reference rules.
- [ ] Public config/check/discovery/read/intake/delivery package and fixtures; host-owned credentials/
  transport/state/receipts, per-item outcomes and idempotency/reconciliation.
- [ ] Pin compatibility and perform selected real-target acceptance separately from mock tests.
  No private vendor implementation or private build dependency behind a public wrapper.

## E3 — interface/console authoring support

- [ ] Formalize form hints/action metadata, typed evidence/state/event operations and fixtures only
  as implemented by core. Configuration GUI/AI views use the same contract, not guest UI scripts.
- [ ] SDK diagnostics/examples supporting predefined routine fork → patch → type/schema/fixture/
  sample test → compare → explicit activation, retaining version/grant/cost/side-effect boundaries.
  Exercise configure/launch/validate/correct/resume/relaunch within a bounded task grant, including
  protected actions and unchanged-retry versus new-version-run semantics; no manual save per step.
  Include bounded evaluation/cost and hostile source/log cases. Consumer-specific CSV round-trip
  behavior must preserve original identities rather than silently apply spreadsheet escaping.
- [ ] Provide reusable CSV enrichment/review/export and competitor discovery/approved-watchlist/
  monitoring examples; failed checks preserve last valid observations, no automatic repricing.

## E4 — additional integration parity and distribution

- [ ] Plan and port remaining destination behaviors individually, including the native legacy adapter
  family and file/webhook/broker integrations. Validate actual source capabilities and wire behavior;
  a package name/registration does not certify a live marketplace.
- [ ] Synthetic auth/reference/variant/payload/per-item/uncertainty tests and documented provider-
  account acceptance, permissions and supported versions for each published package.
- [ ] Independently versioned contracts/SDK/extensions, license/provenance notices, immutable artifacts,
  external publisher starter, enterprise-local registry interoperability and explicit marketplace publication. Certification/advisory/update
  controls and commercial/revenue-sharing terms remain separate platform designs.
