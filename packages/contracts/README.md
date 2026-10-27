# Experimental command contracts

Version 0.1.0-alpha.1 is a source-level contract proof, not a published SDK or stable integration API.
Runtime schemas are in src/index.ts; build derives declarations and `pnpm generate` updates
schemas/*.schema.json. `pnpm check` detects drift without overwriting generated schemas.
Use parseInvocation/parseReply/parseOperation at untrusted boundaries: structural/byte limits run
before recursive Zod parsing. Raw schemas alone do not enforce those semantic limits.

The first executable subset covers read/configure operation descriptions, invocations and completed
results/errors. It has no guest runner, manifests, durable jobs, events or provider transport yet.
Identity/authority are host-derived, absent from invocation input. Operation-specific schemas and
current authorization still apply in the host. A result receipt is not a provider-delivery receipt.

JSON trees are limited to 64 KiB, depth 16 and 4096 nodes. Finite numbers only; negative zero,
accessors, sparse arrays, non-plain objects, repeated object references and reserved prototype keys
are rejected. JSON Schema artifacts describe shapes; host/parser semantic limits remain mandatory.
This alpha deliberately restricts inputs; do not silently coerce unsupported data.
