import { readFileSync } from "node:fs";
import * as github from "@actions/core";

const file = readFileSync(`${process.cwd()}/README.md`).toString("utf8").replace(/<!--.*-->/g, "");
let total = 0;

for (const content of file.substring(file.indexOf("Entries")).match(/- .*/g)) {
  if (
    !/- .* \[.*\]\(https:\/\/(www[.])?(youtu[.]?be)([.]com)?\/((watch\?v=)?[^&#]{5,})[&#?]t=[0-9]+s?([&#?]end=[0-9]+s?)?\)/.test(content)
  ) {
    total += 1;
    console.log(`${content}; Line: ${getLine(content)}`);
    console.log(
      `::warning file=README.md,title=Invalid Format,line=${getLine(content)},endLine=${getLine(
        content
      )},col=${file.indexOf(content)},endColumn=${
        file.indexOf(content) + content.length
      }::For the example please check README!`
    );
  }
}

if (total) github.setFailed("One or more lines are invalid!");

function getLine(str: string) {
  return file
    .split(/\r?\n/)
    .map((line, lineNum) => (line.includes(str) ? lineNum + 1 : null))
    .find(Boolean);
}