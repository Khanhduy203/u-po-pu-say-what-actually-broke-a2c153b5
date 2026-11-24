// Say What Actually Broke — make.fun entry
// Writes one line of honest, funny error copy to $MAKEFUN_OUTPUT_DIR/entry.txt
// Node stdlib only: the grader runs `node /bot/main.ts` on node22, no network.
const fs = require("fs");
const path = require("path");

const ENTRY =
  "We pushed a deploy at 4:59 PM on a Friday and the server resigned on the spot. Your data is safe \u2014 the code just needs a grown-up. Try again in 10 minutes.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
