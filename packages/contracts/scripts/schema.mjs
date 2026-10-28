import { readFile, mkdir, writeFile } from "node:fs/promises";
import { z } from "zod";
import {
  OperationSchema,
  InvocationSchema,
  ReplySchema,
  ResourceRootSchema,
  ResourceRefSchema,
  TextResourceSchema,
  CreateTextResourceSchema,
  ReadTextResourceSchema,
} from "../dist/index.js";
const root = new URL("../schemas/", import.meta.url);
await mkdir(root, { recursive: true });
for (const [name, schema] of Object.entries({
  operation: OperationSchema,
  invocation: InvocationSchema,
  reply: ReplySchema,
  "resource-root": ResourceRootSchema,
  "resource-ref": ResourceRefSchema,
  "text-resource": TextResourceSchema,
  "create-text-resource": CreateTextResourceSchema,
  "read-text-resource": ReadTextResourceSchema,
})) {
  const text = JSON.stringify(z.toJSONSchema(schema), null, 2) + "\n";
  const file = new URL(`${name}.schema.json`, root);
  if (process.argv.includes("--check")) {
    if ((await readFile(file, "utf8")) !== text) throw new Error(`Generated schema drift: ${name}`);
  } else await writeFile(file, text);
}
