#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
import { nPlayer } from "@miqilin21/node-player";
import animation from "./animation.js";

const sleep = (ms = 500) => new Promise((r) => setTimeout(r, ms));

figlet(msg, (err, data) => {
  const welcomeMsg = data;
});

async function welcome() {
  console.clear();
  console.log(animation.length);

  //   intro.forEach(async (data) => {
  //     console.log(data);
  //     await sleep();
  //   });
}

await welcome();
