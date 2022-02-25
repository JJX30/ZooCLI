#!/usr/bin/env node

import chalk from "chalk";
import gradient from "gradient-string";
import introFrames from "./introFrames.js";
import titleFrames from "./titleFrames.js";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import animalData from "./animalData.js";
import commonAnimals from "./commonAnimals.js";
import rareAnimals from "./rareAnimals.js";
import epicAnimals from "./epicAnimals.js";
import legendaryAnimals from "./legendaryAnimals.js";
import encounterFrames from "./encouterType.js";

const commonColorArray = [
  "blue",
  "green",
  "pink",
  "red",
  "yellow",
  "orange",
  "magenta",
  "cyan",
  "white",
];

const rareColorArray = [
  "cristal",
  "teen",
  "mind",
  "morning",
  "vice",
  "passion",
  "fruit",
  "instagram",
  "atlas",
  "retro",
  "summer",
];
const legendaryColorArray = ["pastel", "rain"];

let usersAnimals = [{ name: "[GO BACK]" }];

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

async function welcomeScreen() {
  console.log(jungleGradient.multiline(introFrames[introFrames.length - 1]));
  console.log(chalk.yellow(title));
  console.log(
    jungleGradient.multiline(
      "oooooooooooooooooooooooooooooooooooooooooooooooooooooo"
    )
  );
  console.log(
    textGradient(`
  Welcome to Zoo CLI your very own virtual Zoo for all 
  your lovely animals. 
  
  Rescue them, care for them, and show them off to 
  fellow Zoo Keepers! `)
  );
  await mainMenu();
}
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
  await mainMenu();
}

async function mainMenu() {
  console.log();
  const answer = await inquirer.prompt({
    type: "list",
    name: "options",
    message: "Select an option:",
    choices: [
      "Enter Zoo",
      "Explore",
      "Options",
      "Credits",
      "Dev tools",
      "Quit",
    ],
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
  } else if (choice === "Dev tools") {
    devTools();
  }
}

async function devTools() {
  console.clear();
  console.log(jungleGradient.multiline(introFrames[introFrames.length - 1]));
  console.log(gradient("yellow", "orange")("Exhibits: "));
  console.log();
  console.log(
    titleGradient.multiline(
      `                    _ _.-'\`-._ _
                   ;.'________'.;
        _________n.[____________].n_________
       |""_""_""_""||==||==||==||""_""_""_""]
       |"""""""""""||..||..||..||"""""""""""|
       |LI LI LI LI||LI||LI||LI||LI LI LI LI|
       |.. .. .. ..||..||..||..||.. .. .. ..|
       |LI LI LI LI||LI||LI||LI||LI LI LI LI|
    ,,;;,;;;,;;;,;;;,;;;,;;;,;;;,;;,;;;,;;;,;;,,
   ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;`
    )
  );
  console.log();
  console.log(
    jungleGradient.multiline(
      "oooooooooooooooooooooooooooooooooooooooooooooooooooooo"
    )
  );
  await devMenu();
}

async function devMenu() {
  console.log();
  const asciiNames = animalData.map((animal) => {
    return animal.name;
  });
  const answer = await inquirer.prompt({
    type: "list",
    name: "options",
    message: "Display:",
    choices: asciiNames,
  });
  return handleDevAnswer(answer.options);
}

async function handleDevAnswer(choice) {
  animalData.map((animal) => {
    if (choice === animal.name) {
      console.clear();
      console.log(
        jungleGradient.multiline(introFrames[introFrames.length - 1])
      );
      console.log(gradient("yellow", "orange")("Exhibits: "));
      console.log();
      console.log(titleGradient.multiline(animal.ascii));
      console.log();
      console.log(
        jungleGradient.multiline(
          "oooooooooooooooooooooooooooooooooooooooooooooooooooooo"
        )
      );
    }
  });
  await devMenu2();
}

async function devMenu2() {
  console.log();
  const answer = await inquirer.prompt({
    type: "list",
    name: "options",
    message: "Display:",
    choices: ["go back"],
  });
  return handleDevAnswer2(answer.options);
}

async function handleDevAnswer2(choice) {
  if (choice === "go back") {
    await devMenu();
  }
}

async function enterZoo() {
  console.clear();
  console.log(jungleGradient.multiline(introFrames[introFrames.length - 1]));
  console.log(gradient("yellow", "orange")("Exhibits: "));
  if (usersAnimals.length === 1) {
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
    await zooMenu();
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
  const animalEncountered = await getRandomAnimal();
  console.log(titleGradient.multiline(getBiome(animalEncountered)));
  console.log(
    jungleGradient.multiline(
      "oooooooooooooooooooooooooooooooooooooooooooooooooooooo"
    )
  );
  console.log();
  const spinner = createSpinner("Exploring the vast wilderness...").start();
  await exploring();
  console.clear();
  console.log(jungleGradient.multiline(introFrames[introFrames.length - 1]));
  console.log(coloredAnimal(animalEncountered));
  console.log(
    jungleGradient.multiline(
      "oooooooooooooooooooooooooooooooooooooooooooooooooooooo"
    )
  );
  console.log();
  console.log("Scientific Name: " + titleGradient(animalEncountered.type));
  console.log();
  console.log(
    "Rarity: " + titleGradient(animalEncountered.rarity.capitalize())
  );
  console.log();
  spinner.success({
    text: "You encountered a wild " + animalEncountered.name.trim() + ".",
  });
  await exploreOptions(animalEncountered);
}

async function exploreOptions(animal) {
  console.log();
  const answer = await inquirer.prompt({
    type: "list",
    name: "options",
    message: "Select an option:",
    choices: ["Catch", "Run"],
  });

  return handleExploreOptions(answer.options, animal);
}

async function handleExploreOptions(choice, animal) {
  if (choice === "Catch") {
    //GAME SYSTEM CATCH MAYBE?
    usersAnimals.push(animal);
    const spinner = createSpinner("Catching animal...").start();
    await exploring();
    spinner.success({
      text: "You successfully caught the wild " + animal.name.trim() + ".",
    });
    await sleep();
    await welcomeScreen();
  } else {
    await welcomeScreen();
  }
}

function getBiome(animal) {
  for (let i = 0; i < encounterFrames.length; i++) {
    if (encounterFrames[i].type === animal.biome) {
      return encounterFrames[i].ascii;
    }
  }
}

function coloredAnimal(animal) {
  if (animal.color === "blue") {
    return gradient("blue", "blue").multiline(animal.ascii);
  } else if (animal.color === "green") {
    return gradient("green", "green").multiline(animal.ascii);
  } else if (animal.color === "pink") {
    return gradient("pink", "pink").multiline(animal.ascii);
  } else if (animal.color === "red") {
    return gradient("red", "red").multiline(animal.ascii);
  } else if (animal.color === "yellow") {
    return gradient("yellow", "yellow").multiline(animal.ascii);
  } else if (animal.color === "orange") {
    return gradient("orange", "orange").multiline(animal.ascii);
  } else if (animal.color === "magenta") {
    return gradient("magenta", "magenta").multiline(animal.ascii);
  } else if (animal.color === "cyan") {
    return gradient("cyan", "cyan").multiline(animal.ascii);
  } else if (animal.color === "white") {
    return gradient("white", "white").multiline(animal.ascii);
  } else if (animal.color === "cristal") {
    return gradient.cristal.multiline(animal.ascii);
  } else if (animal.color === "teen") {
    return gradient.teen.multiline(animal.ascii);
  } else if (animal.color === "mind") {
    return gradient.mind.multiline(animal.ascii);
  } else if (animal.color === "morning") {
    return gradient.morning.multiline(animal.ascii);
  } else if (animal.color === "vice") {
    return gradient.vice.multiline(animal.ascii);
  } else if (animal.color === "passion") {
    return gradient.passion.multiline(animal.ascii);
  } else if (animal.color === "fruit") {
    return gradient.fruit.multiline(animal.ascii);
  } else if (animal.color === "instagram") {
    return gradient.instagram.multiline(animal.ascii);
  } else if (animal.color === "atlas") {
    return gradient.atlas.multiline(animal.ascii);
  } else if (animal.color === "retro") {
    return gradient.retro.multiline(animal.ascii);
  } else if (animal.color === "summer") {
    return gradient.summer.multiline(animal.ascii);
  } else if (animal.color === "pastel") {
    return gradient.pastel.multiline(animal.ascii);
  } else if (animal.color === "rainbow") {
    return gradient.rainbow.multiline(animal.ascii);
  }
}

async function getRandomAnimal() {
  const rarityVal = getRandomInt(1, 100);
  const randomColor = await getRandomColor();
  let randomAnimal = {
    name: "",
    type: "",
    biome: "",
    color: "",
    description: "",
    ascii: ``,
    rarity: "",
  };
  if (rarityVal >= 95 && rarityVal <= 100) {
    // 5%
    //go into legendary array, make a random value from 0 to legendaryarray.length, use that val to get a random legendsary
    const index = getRandomInt(0, legendaryAnimals.length - 1);
    randomAnimal.name = legendaryAnimals[index].name;
    randomAnimal.type = legendaryAnimals[index].type;
    randomAnimal.biome = legendaryAnimals[index].biome;
    randomAnimal.color = randomColor;
    randomAnimal.description = legendaryAnimals[index].description;
    randomAnimal.ascii = legendaryAnimals[index].ascii;
    randomAnimal.rarity = legendaryAnimals[index].rarity;
    return randomAnimal;
  } else if (rarityVal >= 70 && rarityVal <= 94) {
    //25%
    //epic
    const index = getRandomInt(0, epicAnimals.length - 1);
    randomAnimal.name = epicAnimals[index].name;
    randomAnimal.type = epicAnimals[index].type;
    randomAnimal.biome = epicAnimals[index].biome;
    randomAnimal.color = randomColor;
    randomAnimal.description = epicAnimals[index].description;
    randomAnimal.ascii = epicAnimals[index].ascii;
    randomAnimal.rarity = epicAnimals[index].rarity;
    return randomAnimal;
  } else if (rarityVal >= 40 && rarityVal <= 69) {
    //30%
    const index = getRandomInt(0, rareAnimals.length - 1);
    randomAnimal.name = rareAnimals[index].name;
    randomAnimal.type = rareAnimals[index].type;
    randomAnimal.biome = rareAnimals[index].biome;
    randomAnimal.color = randomColor;
    randomAnimal.description = rareAnimals[index].description;
    randomAnimal.ascii = rareAnimals[index].ascii;
    randomAnimal.rarity = rareAnimals[index].rarity;
    return randomAnimal;
  } else {
    //45%
    const index = getRandomInt(0, commonAnimals.length - 1);
    randomAnimal.name = commonAnimals[index].name;
    randomAnimal.type = commonAnimals[index].type;
    randomAnimal.biome = commonAnimals[index].biome;
    randomAnimal.color = randomColor;
    randomAnimal.description = commonAnimals[index].description;
    randomAnimal.ascii = commonAnimals[index].ascii;
    randomAnimal.rarity = commonAnimals[index].rarity;
    return randomAnimal;
  }
}

async function getRandomColor() {
  const colorVal = getRandomInt(1, 100);
  if (colorVal >= 90 && colorVal <= 100) {
    const index = getRandomInt(0, legendaryColorArray.length - 1);
    return legendaryColorArray[index];
  } else if (colorVal >= 50 && colorVal <= 89) {
    const index = getRandomInt(0, rareColorArray.length - 1);
    return rareColorArray[index];
  } else {
    const index = getRandomInt(0, commonColorArray.length - 1);
    return commonColorArray[index];
  }
}

async function displayAnimalList() {
  console.log(
    titleGradient(`                    _ _.-'\`-._ _
                   ;.'________'.;
        _________n.[____________].n_________
       |""_""_""_""||==||==||==||""_""_""_""]
       |"""""""""""||..||..||..||"""""""""""|
       |LI LI LI LI||LI||LI||LI||LI LI LI LI|
       |.. .. .. ..||..||..||..||.. .. .. ..|
       |LI LI LI LI||LI||LI||LI||LI LI LI LI|
    ,,;;,;;;,;;;,;;;,;;;,;;;,;;;,;;,;;;,;;;,;;,,
   ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;`)
  );
  console.log();
}

async function zooMenu() {
  console.log();
  const answer = await inquirer.prompt({
    type: "list",
    name: "options",
    message: "Display:",
    choices: usersAnimals,
  });
  return handleZooAnswer(answer.options);
}

async function handleZooAnswer(choice) {
  let selectedAnimal;
  for (let i = 0; i < usersAnimals.length; i++) {
    if (choice === "[GO BACK]") {
      console.clear();
      await welcomeScreen();
    } else if (choice === usersAnimals[i].name) {
      //get object, display ascii, and other stuff in side the objects properties, etc
      selectedAnimal = usersAnimals[i];
    }
  }
  console.log(
    `                                                                                                                                                                                \n
                                                                                                                                                                                     \n
                                                                                                                                                                                     \n
                                                                                                                                                                                     \n
                                                                                                                                                                                     \n
                                                                                                                                                                                     \n
                                                                                                                                                                                     \n
                                                                                                                                                                                     \n
                                                                                                                                                                                     \n
                                                                                                                                                                                     \n
                                                                                                                                                                                     \n
                                                                                                                                                                                     \n
                                                                                                                                                                                     \n
                                                                                                                                                                                     \n
                                                                                                                                                                                     \n
                                                                                                                                                                                     \n
                                                                                                                                                                                     \n
                                                                                                                                                                                     \n
                                                                                                                                                                                     \n
                                                                                                                                                                                     \n
                                                                                                                                                                                     \n`
  );
  console.clear();

  console.log(jungleGradient.multiline(introFrames[introFrames.length - 1]));

  if (selectedAnimal.color === "rainbow") {
    console.log(gradient.rainbow.multiline(selectedAnimal.ascii));
  } else {
    console.log(
      gradient(selectedAnimal.color, selectedAnimal.color).multiline(
        selectedAnimal.ascii
      )
    );
  }
  console.log(
    jungleGradient.multiline(
      "oooooooooooooooooooooooooooooooooooooooooooooooooooooo"
    )
  );
  console.log();
  console.log(titleGradient.multiline(selectedAnimal.description));
  console.log();
  console.log(
    "Scientific Name: " + titleGradient(selectedAnimal.type.capitalize())
  );
  console.log();
  console.log("Found in: " + titleGradient(selectedAnimal.biome.capitalize()));
  console.log();
  console.log("Color: " + titleGradient(selectedAnimal.color.capitalize()));
  console.log();
  console.log("Rarity: " + titleGradient(selectedAnimal.rarity.capitalize()));
  await returnMenu(selectedAnimal);
}

async function returnMenu(selectedAnimal) {
  console.log();
  const answer = await inquirer.prompt({
    type: "list",
    name: "options",
    message: "Select an option:",
    choices: ["Release", "[GO BACK]"],
  });
  return handleReturnMenu(answer.options, selectedAnimal);
}

async function handleReturnMenu(choice, selectedAnimal) {
  if (choice === "Release") {
    for (let i = 0; i < usersAnimals.length; i++) {
      if (selectedAnimal.name === usersAnimals[i].name) {
        const spinner = createSpinner(
          "Releasing " + selectedAnimal.name + "..."
        ).start();
        await exploring();
        usersAnimals.splice(i, 1);
        spinner.success({
          text: selectedAnimal.name + " was released back into the wild!",
        });
        await enterZoo();
      }
    }
  } else {
    await enterZoo();
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});

await welcome();
