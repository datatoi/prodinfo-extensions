# Experimental managed text resources

28 October 2026. Executable schema subset in @prodinfo/extension-contracts 0.1.0-alpha.2.
Canonical types/parsers are in [resources.ts](../packages/contracts/src/resources.ts); generated
JSON Schema is checked for drift. No package registry publication or complete resource SDK.

Roots are logical input/output namespaces. An authenticated host binds them to a workspace and
routine; public requests carry no workspace identity, absolute path, actor or grant. Resource refs
pin root ID, resource ID and SHA-256 digest. A ref is not authorization: current host policy and
actor/routine scope must still permit it. Display names never choose a native file path.

| Operation, version 1.0.0 | Input | Value |
|---|---|---|
| resources.text.create | rootId, name, mediaType, text | Immutable resource descriptor with IDs/digest/byteLength |
| resources.text.read | rootId, resourceId, digest | Descriptor plus exact text |

Supported mediaType labels are text/plain, text/csv and application/json. They are labels, not CSV/
JSON syntax or factual-content validation. Each text payload is at most 8,192 UTF-8 bytes, contains
no unpaired surrogate, and preserves BOM, CRLF, Unicode, literal IDs and NUL. The ordinary 64 KiB/
depth-16/4,096-node JSON envelope limits remain mandatory. Parsers check read byte counts; the host
checks the digest against retained bytes. Generated schema cannot express all semantic checks.

The createArtifact effect denotes creation of managed immutable content. It is not configure,
canonical Record apply, external delivery or durable job submission. Host/client create support
does not grant guest output writes; the host may keep create and root administration private.
The first guest use can be read-only exact-reference access, with output explicitly saved by an
authorized host after successful computation. Ref grants must be checked again before disclosure.

resource_limit reports a firm resource bound; unavailable reports a currently unavailable operation
or workspace policy. In this short-command subset recovery is stop. These categories do not add
durable credit/approval waits or erase the separately planned soft-credit workflow policy.

Initial conformance: seven public tests plus type/format/build/schema drift pass locally. Host
namespace/quota/transaction/guest proof and three-platform CI are pending. No raw filesystem API,
external directory binding, large file/binary streaming, output publication lifecycle, full CSV
importer or installed/hosted service is claimed. Public tests use only synthetic data and public
dependencies; no private checkout is needed.
