import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Copies VIDEO.json from the repository root into the grader's output dir.
// The house reads the video itself; nothing here describes it.
const here = dirname(fileURLToPath(import.meta.url));

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "out");
const video = readFileSync(join(here, "VIDEO.json"), "utf8");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "VIDEO.json"), video);
