# Compatibility and releases

Design policy. Experimental command contracts 0.1.0-alpha.1 are source/packed artifacts only;
no stable SDK, manifest or npm version is published. This first read/configure subset does not
support jobs, guest packages, events or provider delivery. See [package scope](../packages/contracts/README.md).

Independently version the contract package, SDK/testing packages and individual connectors/routines.
Semantic changes require compatibility review; a provider mapping fix should not bump unrelated
contracts. A package declares required host/SDK/capability versions; the host refuses unsupported
operations rather than guessing. Define exact fields/rules with the first executable schemas.

Pin source/resource/config/input revisions and immutable content digests on checked versions/runs.
A draft change does not replace an activated version or schedule. Changed capability requirements
need fresh review; successful fixtures do not authorize production reads/writes. Installation
identity and mutable state schema compatibility must survive code upgrades explicitly.

Public CI must build/test from this repository and approved public dependencies without a private
checkout or token. Real-host integration tests should consume the same versioned artifacts/fixtures
and identify host version/capabilities. Record provider/live/installed-OS acceptance separately.

New original content uses the root MIT license. Preserve upstream licenses/NOTICE and provenance
when importing code or fixtures. Do not publish customer files/accounts, credentials or private
source by treating an old implementation snapshot as a ready public release.

Source commits do not create package-registry entries, marketplace certification or execution grants.
Define immutable release artifacts, provenance/signing, withdrawal/advisory and compatible rollback
before automated distribution. No certification can prove universal behavior on every input/site.
