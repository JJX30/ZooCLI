#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
import { nPlayer } from "@miqilin21/node-player";
import introFrames from "./introFrames.js";
import titleFrames from "./titleFrames.js";
// import encounterType from "./encouterType.js";
import inquirer from "inquirer";

let animalTable = [["dog"], ["cat"], ["giraffe"]];
let animalList = ["dog", "cat", "giraffe"];
const clearLastLines = (count) => {
  process.stdout.moveCursor(0, -count);
  process.stdout.clearScreenDown();
};

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
const fps = (ms = 300) => new Promise((r) => setTimeout(r, ms));
const exploring = (ms = 4000) => new Promise((r) => setTimeout(r, ms));

const title = gradient("yellow", "orange")
  .multiline(`d8888888P                       a88888b. dP        dP
     .d8'                      d8'   \`88 88        88
   .d8'   .d8888b. .d8888b.    88        88        88
 .d8'     88'  \`88 88'  \`88    88        88        88
d8'       88.  .88 88.  .88    Y8.   .88 88        88
Y8888888P \`88888P' \`88888P'     Y88888P' 88888888P dP`);

const titleGradient = gradient("yellow", "orange");
const jungleGradient = gradient(["#60DB0E", "#16A100"]);
const antGradient = gradient([
  { color: "#FF0000", pos: 0.5 },
  { color: "#C80014", pos: 1 },
]);
const textGradient = gradient(["#003CFF", "#003CFF"]);

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
  console.log(
    textGradient(`
  Welcome to Zoo CLI your very own virtual Zoo for all 
  your lovely animals. 
  
  Rescue them, care for them, and show them off to 
  fellow Zoo Keepers! `)
  );
}

async function mainMenu() {
  console.log();
  const answer = await inquirer.prompt({
    type: "list",
    name: "options",
    message: "Select an option:",
    choices: ["Enter Zoo", "Explore", "Options", "Credits", "Quit"],
  });

  return handleAnswer(answer.options);
}

async function handleAnswer(choice) {
  if (choice === "Enter Zoo") {
    await enterZoo();
  } else if (choice === "Explore") {
    await explore();
  } else if (choice === "Quit") {
    process.exit(1);
  }
}

async function enterZoo() {
  console.clear();
  console.log(jungleGradient.multiline(introFrames[introFrames.length - 1]));
  console.log(titleGradient("Exhibits: "));
  if (animalTable.length === 0) {
    console.log();
    console.log(
      titleGradient.multiline(
        `   You currently have no animals in your Zoo, go
   get some!`
      )
    );
    console.log();
    console.log(
      jungleGradient.multiline(
        "oooooooooooooooooooooooooooooooooooooooooooooooooooooo"
      )
    );
  } else {
    console.log();
    await displayAnimalList();
    console.log();
    console.log(
      jungleGradient.multiline(
        "oooooooooooooooooooooooooooooooooooooooooooooooooooooo"
      )
    );
    await zooMenu();
  }
}

async function explore() {
  console.clear();
  console.log(jungleGradient.multiline(introFrames[introFrames.length - 1]));
  await displayEncounter();
}

async function displayEncounter() {}

async function displayAnimalList() {
  for (let i = 0; i < animalTable.length; i++) {
    for (let j = 0; j < animalTable[i].length; j++) {
      process.stdout.write(titleGradient.multiline("   " + animalTable[i][j]));
    }
    console.log();
  }
}

async function zooMenu() {
  console.log();
  const answer = await inquirer.prompt({
    type: "list",
    name: "options",
    message: "Select an option:",
    choices: animalList,
  });
  return handleZooAnswer(answer.options);
}

async function handleZooAnswer(choice) {
  for (let i = 0; i < animalList.length; i++) {
    if (choice === animalList[i]) {
      //get object, display ascii, and other stuff in side the objects properties, etc
    }
  }
}

await welcome();
await mainMenu();
