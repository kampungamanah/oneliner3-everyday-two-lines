import { mkdirSync, writeFileSync } from "node:fs";

function emit(path: string, body: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(path, body, "utf8");
}

const entry = `A zipper is two rows of tiny teeth that hold hands one by one as a little metal runner slides along and pulls them together.
It maps how the teeth lock in a row and the runner joins them, but it leaves out that real teeth bite and chew, while zipper teeth only grip cloth and stay shut until the runner comes back.`;

emit("/output/entry.txt", entry);
