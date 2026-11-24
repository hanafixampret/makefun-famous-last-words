import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "I'm at 1%, so I'm spending it downloading the update you postponed 38 times. Good luck.";

// Gate: entry must be 1-199 characters of non-whitespace text.
if (ENTRY.length < 1 || ENTRY.length > 199 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-199 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
