# Public contract scope and ownership

This public repository is the canonical owner of the new extension-facing contract and author SDK.
The private host implements it and consumes pinned releases. No executable schema/version is yet
released. This document defines scope; the [contract draft](contract-draft.md) proposes review-only
shapes. They are not stable JSON fields or callable commands until executable schemas/conformance.

## Public surface

Package manifests and compatibility, config/form/action declarations, capability identifiers,
request/result/error types, supported domain-operation projections, event subscription/envelope
and scoped-state/migration contracts. Include synthetic valid/invalid fixtures, generated TypeScript
SDK/helpers, mock-host tooling, author documentation and conformance requirements.

One canonical schema/definition source should generate derived types and documentation. Host
semantic validation is still required. Version public operations only when implementation and
conformance agree; draft names in discussions are not supported wire contracts.

## Host-private surface

Trusted application implementation, UI/admin-only operations, database layout/migration internals,
policy evaluation and credential material. Public contracts describe authorization requirements
and error behavior without granting access. Modified SDK code cannot bypass host enforcement.
No shared business database with a destination or another application is part of the SDK.

All destination-specific implementation/config profiles/tests belong in public connector packages.
The host retains generic transport/auth/storage/job machinery, data invariants and delivery truth.
Do not hide provider-specific integration code in a private package to make a public connector build.

## Existing integration protocols

The Standard Integration API used by existing shop plugins/services is a distinct existing contract,
not a new extension protocol. Preserve it through reviewed versioned public schemas/types/fixtures
provided by its owner. Do not require private Git URLs or reproduce incompatible wire definitions.
Only approved material may be imported here; public repository creation does not relicense existing
source or imply every old integration has already migrated.

## Publication boundary

Public source is distinct from a released SDK, marketplace listing/certification and host activation.
Package definitions may be shared without operational configurations, private data, history or
execution grants. A connector fix should not require changing unrelated package/contract versions.
