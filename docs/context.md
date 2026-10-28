# Extensions current context

Updated: 2026-10-28. Single starting handoff; [roadmap](roadmap.md) is the sole task checklist.

## Implemented first slice

Public datatoi/prodinfo-extensions now contains the experimental source package
`@prodinfo/extension-contracts` version `0.1.0-alpha.1` in [packages/contracts](../packages/contracts/README.md).
It provides strict operation/invocation/result/error schemas, inferred TypeScript declarations,
generated JSON Schema, bounded JSON validation/canonicalization and synthetic fixtures/tests.
Only `read`/`configure` operations and completed results/errors are executable in this subset.
No package-registry publication, stable SDK/manifest, guest runner, jobs/events/telemetry API,
connector or live-provider compatibility is delivered. Broader [contract draft](contract-draft.md)
remains a proposal; executable source is canonical for the implemented subset.

The package is original public MIT code; no Accounting/Desktop implementation, private paths,
credentials or customer data were imported. Public build/test needs no private repository/token.
The private host consumes a packed, hash-pinned public artifact and exercises matching requests.
Packing/source commits do not publish to npm, certify a marketplace package or activate a routine.

## Development and validation

Node 24.x (local verification 24.1.0), pnpm 11.0.8, TypeScript 7.0.2, Zod 4.6.7 and Biome 2.6.2
are pinned. `pnpm install --frozen-lockfile --ignore-scripts`; `pnpm check` runs formatting,
typechecks, four contract tests, declaration/JS build and generated-schema drift checks.
`pnpm generate` deliberately updates JSON Schema from source. GitHub checks are configured for
Linux/macOS/Windows with public dependencies only. Source
[CI](https://github.com/datatoi/prodinfo-extensions/actions/runs/40581754727) passed at 746775a
after enforcing LF text checkout; no contract runtime change was needed. Local checks passed on
macOS; Node emits its type-stripping experimental warning. No Windows/Linux
installer, real provider, complete SDK or normal PostgreSQL compatibility has been accepted.

## Ownership and unchanged requirements

This repository owns public schemas/SDK/helpers, mocks/conformance, synthetic examples and all new
integration-specific routines/destination adapters. Private host internals/admin schemas remain
private. No separate contracts repository or shared Accounting DB. New official connectors remain
public; customer/team routines can remain in an enterprise-local registry. Public cloning/building
must never require a private checkout or customer samples. Keep existing Standard Integration API
wire ownership separate; this package is not a replacement protocol for existing shop plugins.

Definitions/config forms/actions are declarations. Host policy enforces every capability, current
identity/authority and effect, regardless of a modified SDK or publisher signature. Guests will use
bounded host operations without ambient Node/SQL/files/network. Code/config/draft/activation/run
pins stay distinct. Team registry publication, Git history, configuration-file backup and activation
are different operations. No cloud configuration-backup dependency is introduced.

Task-level operator console delegation can cover ordinary UI operations without per-save approval;
public guest projection remains narrower. Credentials/self-authority changes stay protected. Current
experimental metadata covers descriptions/schemas/effect/capabilities/delegability, not a complete
availability/precondition/recovery schema. Telemetry/state/resources/event/lifecycle refinements in
the design docs remain unimplemented acceptance requirements, added alongside tested capabilities.

## Planned shared progress and interactive tasks

User requests generic routine stages/progress, retry/restart, approvals/mid-run item input and batch
processing, with optional home views. [Execution draft](routine-execution.md) defines proposed
author semantics: host-owned run/step/item/attempt state, honest unknown-total progress, durable
schema/audience/revision-bound tasks, safe subset recovery and explicit follow-up runs. Waiting
releases execution capacity; one item's question need not block unrelated items under batch policy.

Every routine gets standard progress/attention/recovery views. Optional declarative cards/tables/
forms/actions extend a routine home page; uploaded React/JS is excluded from trusted UI. Fully custom
executable views are separate future scope. Console and manual paths share the same policy/actions.
No runtime schemas, 0.1.0-alpha.1 package code/version, published artifact or SDK methods changed.
Docs checks/content scan pass; existing source tests/CI are historical and were not rerun for prose.

## Local/hosted plans, metered AI and paid packages — design only

The host direction now includes BE-provisioned subscriptions/installations/domains, isolated hosted
workspace DB/files/context/executors, shared hosted AI and optional setup/context backup images.
Local rights refresh at activation/restart and plan expiry and are checked from cache on task
admission; no external entitlement check per task. Hosted AI calls use an account/gateway for credit
reservations and trusted token-based settlement, including console, enrichment and child routines.
Token usage and credit charges differ; rates/grants and financial precision belong to the platform.

Credit admission is now proposed as soft estimates plus finite approved tolerance, with strict
maximum authorization for explicit hard spending caps. Ordinary credit/accounting shortage should
checkpoint/wait and resume, preserving completed items/results and pending settlement. An admitted
bounded call is not killed solely for crossing its estimate; retries must not duplicate AI calls or
charges. This does not relax tenant/credential authority or executor/resource caps.

These are host/platform responsibilities. A package purchase/free status/certification grants no
filesystem/network/admin capability. Package limits, budget/availability and expired-rights outcomes
need executable public conformance before new SDK shapes. Same author contract should work locally
and hosted within the assigned workspace and brokered web scope. The public SDK/official open-source
integrations remain public; independently licensed paid offerings have separate distribution terms.
No alpha.1 runtime schema/artifact/version, provider or publication changed for this design update.
Public docs/content checks pass; existing source CI was not rerun for prose.

## Next

Keep E1 open overall. Expand conformance with the real core: server-PG/PGlite recovery/transaction
parity, state/resource scope, cancellation and bounded isolated guest execution. Introduce durable
job/config/package/event contracts only with matching host proof. UI/config/console interfaces and
provider-specific plans follow the core. Source sharing/marketplace publication/OS acceptance retain
their own gates; no provider or future operation exists merely because it appears in the draft.
