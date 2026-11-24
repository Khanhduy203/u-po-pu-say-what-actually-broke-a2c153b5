// Say What Actually Broke — make.fun entry
// Writes one line of honest, funny error copy to $MAKEFUN_OUTPUT_DIR/entry.txt
// Node stdlib only: the grader runs `node /bot/main.ts` on node22, no network.
const fs = require("fs");
const path = require("path");

const ENTRY =
  "We pushed a deploy at 4:59 PM on a Friday and the server resigned on the spot. Your data is safe \u2014 the code just needs a grown-up. Try again in 10 minutes.";

// Output dir: use MAKEFUN_OUTPUT_DIR when set and non-empty, otherwise fall
// back to a local `output` dir so a plain `node main.ts` still works.
const envDir = process.env.MAKEFUN_OUTPUT_DIR;
const outDir =
  typeof envDir === "string" && envDir.trim().length > 0 ? envDir.trim() : "output";

// Validate the entry before writing: non-empty, <= 200 chars, single line.
const line = ENTRY.trim();
if (line.length === 0) {
  throw new Error("entry is empty");
}
if (line.length > 200) {
  throw new Error(`entry too long: ${line.length} chars (max 200)`);
}
if (/[\r\n]/.test(line)) {
  throw new Error("entry must be a single line");
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
