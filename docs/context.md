# Extensions current context

Updated: 2026-10-27. Single starting handoff. Task status lives in [roadmap.md](roadmap.md).

New public datatoi/prodinfo-extensions repository: documentation/hygiene bootstrap only. No executable
contracts/SDK/connector code, package publication, runtime compatibility proof or live-provider
acceptance. Default branch: main. New original content is MIT licensed; no legacy source was copied.

The private application implements policy and execution; this repository owns public schemas/types,
SDK/helpers, mock/conformance tooling, official routines, destination adapters and synthetic examples.
Public authors must not need private source, credentials or a specific sibling directory layout.
No third contracts repository is planned. See [contract scope](contract-scope.md).

TypeScript is the authoring language. The architecture has no requirement to retain native Rust.
Preserve external integration wire behavior when adapters are migrated; current compatibility and
new extension protocol are separate boundaries. Do not infer implemented routes/provider support
from a proposed package name or example.

Configuration screens are host-rendered from declarations. Actions may check/discover/pull/preview/
run under explicit grants. Guest code uses bounded SDK operations rather than ambient Node, secrets,
DB or network. Package versions/config instances/runs/authoring drafts remain separate identities.

AI-assisted authoring is a core use case: predefined routines can be forked into drafts, checked,
tested against fixtures/samples, compared and explicitly activated. Activity evidence helps diagnosis;
event subscriptions start authorized workflows. Neither publication nor conversation grants access.

## Current review work

A review-only [contract draft](contract-draft.md) now outlines module/action/package/invocation/result
shapes and replay/scope/config/job/state/event semantics. It is not executable or stable. The roadmap
is core-first: make a small contract executable with a real headless host; defer detailed connector,
configuration UI and console surface plans until that core passes. No implementation was started.

Next after review: E1 schemas/types/fixtures and real-core conformance through a CLI/test client.
Public tests remain independent of private source. No version, callable operation, package-registry
release or new live provider/OS acceptance exists. Documentation checks are the only checks in this
slice. Local links/fences/newlines/roadmap ownership, focused public-content scan and diff checks
passed; no runtime/schema/code tests or builds were run.

## Team/project resource refinement

The latest draft includes enterprise-local registries for in-house source/build/test packages,
Git-compatible authoring history and named project/routine input/output/work bindings. These are
portable author contracts with host-resolved locations; no raw absolute path/SQL or mutable Git
branch is an active runtime dependency. Shared workspace authority owns jobs/steps/receipts;
execution agents/cache files are not independent replicated truth. Registry publication, config
backup, activation and running remain distinct. No schema/runtime implementation or new stable
method/field is released. Core-first proof still precedes interface/provider plans.

## Activity/trace refinement

User wants console access to all authorized configuration and system/routine evidence with a central
registry, tags and routine parts. [Telemetry draft](telemetry-draft.md) is the canonical public
proposal: OpenTelemetry-style context, host-stamped identities, stable step/part/source/code/config
refs and bounded structured messages/query coverage. Core facts/audit receipts and routine claims
are distinct; log content is not authority. No executable logger/query API or dependency is released.
