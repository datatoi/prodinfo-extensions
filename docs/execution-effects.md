# Experimental execution effects

28 October 2026. Alpha.4 extends operation metadata with submit and controlRun. Canonical enums
remain in [index.ts](../packages/contracts/src/index.ts), with generated schema and synthetic tests.
There is no stable run/job schema, guest submission API or complete workflow SDK in this revision.

submit means durable admission of work. A successful short command reply acknowledges admission;
it is not completion of that work. controlRun means changing existing run execution state, such as
cancellation. These effects are distinct from read, configuration edits, managed artifact creation
and external provider delivery. A host must independently enforce current capability, workspace,
version/input pins, policy and state/lease boundaries. Metadata or a manifest grants nothing.

The completed result/error envelope is unchanged. A host may return an admitted run reference as
result data and expose status/result through its own tested operations. No top-level accepted/job
variant is introduced here. Do not infer job success from a result describing queued work. Specific
run states, projection fields, broker claims, retries and durable waits require matching host proof
before becoming public author contracts. Old clients must refuse unknown effects, never relabel
submission as configure or assume it is safe to retry with a different request identity.

Thirteen public tests/type/build/format/generated-schema checks pass locally. The two added cases
cover explicit effects and the distinction between admission result data and an unsupported
accepted-job envelope. [CI](https://github.com/datatoi/prodinfo-extensions/actions/runs/40665029899)
passed at 18c1b14 on Windows/macOS/Linux. Reference host 6f16218 passes 77 tests and three built
smokes on all three OS plus 41 isolated PG18 cases. It proves durable one-step admission/current
pins, claims/capacity, broker/result fencing, cancellation/takeover and process-kill recovery.
Host run schemas/claim tokens stay private; alpha.4 specifies no dispatcher or complete workflow.
No npm/marketplace publication,
installed service, scheduler or live provider support is added. Source is original MIT code with
synthetic fixtures and no private checkout dependency.

A later reference-host proof (11ce201) adds opt-in bounded automatic execution over those same private
claims/checkpoints. Source CI passes 85 tests and three built smokes on Windows/macOS/Linux plus
48 isolated PG18 cases. Shared capacity, lease heartbeat, current-security cancellation, graceful drain, exact-claim
forced stop and uncertain checkpoint quarantine remain host duties. This does not change alpha.4
or provide a public run SDK, scheduler, browser capture or durable human-wait API.
