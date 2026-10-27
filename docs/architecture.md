# Public extension architecture

Design target; no executable protocol or SDK is released yet. See [contract scope](contract-scope.md)
and [compatibility](compatibility.md) before implementing or naming public API fields.

## Package roles

A connector describes and implements integration-specific discovery/read/intake/delivery behavior.
A routine orchestrates supported operations and can use connectors. Both use checked TypeScript,
a versioned manifest, configuration/action schemas, declared capabilities and tests. New official destination
implementations, profiles and workflows are open-source here. A third party can publish
its own compatible package from another repository.

The private host owns canonical records, source identities, schema/plan/evidence validation,
configuration instances, credentials, queues/leases, event delivery, durable receipts and review.
SDK calls are checked against effective actor/package/config/workspace grants. Guest code cannot
self-activate, choose another package's state namespace or bypass review with raw DB writes.

## Configuration and GUI actions

Declare config schemas, form hints and typed sandbox action exports. The host renders settings
and buttons, validates inputs and invokes an action under policy. Values such as selected catalog
options come from authorized action results. Rendering/saving settings does not perform I/O, and
arbitrary package React/JS is not inserted into the trusted UI.

Connection checks/discovery are scoped external reads; pulls may separately submit typed intake.
Preview uses fixtures or an explicitly bounded read-only test; Run may have separately authorized
write effects. Long actions return durable job handles/results rather than rely on a settings
page staying mounted. Package version, config revision and observed outcome must stay linked.

## Runtime and workflow lifetime

Guest code has a constrained SDK, no ambient Node filesystem/process/environment/network/DB APIs
and no raw credentials. The host brokers allowed transport/model/state/domain operations. Types
and a package signature are not enforcement; runtime input/output, scope and budget checks remain.
No unrestricted npm support or direct database ownership is promised by a TypeScript author API.

A bounded sandbox attempt is separate from a durable workflow. Use stable job/step keys and saved
results to survive restart and avoid repeating effects. A provider timeout may mean an uncertain
outcome, requiring a receipt/reconciliation rather than an unconditional retry. Exact protocols and
limits will be defined with executable host conformance.

## Events, state and AI authoring

Subscribe to declared, versioned committed-domain events through the host; receiving an event does
not grant wider data access. Use revision-bound references, idempotency and origin/recursion limits.
Scoped activity/diagnostic evidence helps the console explain failures and improve workflows but
is not a substitute trigger bus or unfiltered customer telemetry.

Package state persists per installation/config through typed host operations. It is separate from
immutable run history and canonical records. Declared logical tables/indexes/migrations may be
added later, with quotas and compatibility checks; no raw SQL/DDL capability is implied.

Predefined workflows are starting points. The console can fork a version into a managed draft,
patch code/config/tests, validate types/schemas and test fixtures/approved samples. Changed authority,
activation, deployment, scheduling and external effects require explicit host policy, not simply
successful compilation. Share reusable sources/synthetic fixtures without customer data or secrets.

## Team registry and project resources

An enterprise may host its own registry for in-house source/build/test versions. Git-compatible
history manages project development; immutable registry versions manage distribution. Publishing
or editing shared sources does not alter existing activations/runs. A public marketplace is optional,
and private team code is not automatically public. The host owns registry administration/access.

Routines can use project defaults or their own named input/output/work roots. Host bindings resolve
those names to approved local/server resources, with immutable input snapshots and per-run outputs.
Artifacts and source files differ from durable queue/step state. See [contract draft](contract-draft.md)
for proposed semantics; no root-binding schema or filesystem API is released yet.

## Unified activity with routine-part context

Use host-stamped OpenTelemetry-compatible context and bounded structured diagnostic messages,
with stable routine part labels and exact code/config/run/attempt refs. The host can correlate
command/queue/worker/model/connector activity through one permission-aware query surface, while
keeping domain events, audit receipts and diagnostic/trace retention distinct. See the canonical
[telemetry proposal](telemetry-draft.md); no logging SDK or query API is released yet.
