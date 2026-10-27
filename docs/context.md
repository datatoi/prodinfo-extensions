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

Next: design the smallest pre-release manifest/action/config/capability boundary and synthetic
conformance fixture, derive the TypeScript SDK and prove it against a host adapter. Keep author docs
honest about supported versions and missing behavior. Schema/SDK versions and supported command
names are not defined yet. Public CI and package-release infrastructure remain open roadmap work.
