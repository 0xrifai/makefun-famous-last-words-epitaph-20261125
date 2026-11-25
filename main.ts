import { mkdirSync, writeFileSync } from "node:fs";

// Famous last words, cut off mid-sentence: the Wi-Fi password dies with him.
// One line, 39 characters, a tombstone epitaph for the make.fun bounty
// "Famous Last Words: The Funniest Epitaph".
const LINE = "My last words: \u2018The Wi-Fi password is\u2014\u2019";

// The sealed scorer accepts 1-150 characters; fail loudly instead of
// writing a line the gate would reject.
if (LINE.length < 1 || LINE.length > 150 || LINE.trim().length === 0) {
  throw new Error(`epitaph must be 1-150 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
// Absolute path on purpose: the grader mounts the repo read-only, so a
// relative output/ write would throw and fail grading. No trailing newline:
// the file holds exactly the line.
writeFileSync("/output/entry.txt", LINE, "utf8");
