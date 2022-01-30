#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
import { nPlayer } from "@miqilin21/node-player";
import introFrames from "./introFrames.js";
import titleFrames from "./titleFrames.js";

const clearLastLines = (count) => {
  process.stdout.moveCursor(0, -count);
  process.stdout.clearScreenDown();
};

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
const fps = (ms = 300) => new Promise((r) => setTimeout(r, ms));
const title = gradient("yellow", "orange")
  .multiline(`d8888888P                       a88888b. dP        dP
     .d8'                      d8'   \`88 88        88
   .d8'   .d8888b. .d8888b.    88        88        88
 .d8'     88'  \`88 88'  \`88    88        88        88
d8'       88.  .88 88.  .88    Y8.   .88 88        88
Y8888888P \`88888P' \`88888P'     Y88888P' 88888888P dP`);

const jungleGradient = gradient(["#60DB0E", "#16A100"]);
const antGradient = gradient([
  { color: "#FF0000", pos: 0.5 },
  { color: "#C80014", pos: 1 },
]);
async function welcome() {
  for (let i = 0; i < introFrames.length; i++) {
    console.clear();
    console.log(jungleGradient.multiline(introFrames[i]));
    await fps();
  }
  await sleep();
  for (let i = 0; i < titleFrames.length; i++) {
    console.log(antGradient.multiline(titleFrames[i]));
    console.log(
      jungleGradient.multiline(
        "oooooooooooooooooooooooooooooooooooooooooooooooooooooo"
      )
    );
    await fps();
    clearLastLines(7);
  }
  console.log(chalk.yellow(title));
  console.log(
    jungleGradient.multiline(
      "oooooooooooooooooooooooooooooooooooooooooooooooooooooo"
    )
  );
  await sleep();
}

await welcome();
