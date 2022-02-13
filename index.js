#!/usr/bin/env node

import chalk from "chalk";
import gradient from "gradient-string";
import introFrames from "./introFrames.js";
import titleFrames from "./titleFrames.js";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import animalData from "./animalData.js";
import commonAnimals from "./animalData.js";

let usersAnimals = [
  {
    name: "Dog",
    type: "Canis lupus familiaris",
    biome: "forest",
    color: "blue",
    description: `
Dogs can smell thousands of times better than humans. 
Their noses have millions more scent receptors—for 
example, a human nose averages 5 million while a 
Dachshund's nose has 125 million—making them useful 
in sniffing out drugs, dead bodies, bed bugs, 
explosives, and more.`,
    ascii: `                 |\\_/|                  
                 | @ @   Woof! 
                 |   <>              _  
                 |  _/\\------____ ((| |))
                 |               \`--' |   
              ____|_       ___|   |___.' 
              /_/_____/____/_______|`,
    rarity: "common",
  },
  {
    name: "Cat",
    type: "Felis catus",
    biome: "forest",
    color: "green",
    description: `
Predation by domestic cats is the number-one direct, 
human-caused threat to birds in the United States and 
Canada. In the United States alone, outdoor cats kill 
approximately 2.4 billion birds every year. Although 
this number may seem unbelievable, it represents the 
combined impact of tens of millions of outdoor cats.`,
    ascii: `                      _                        
                    \\\`*-.                    
                     )  _\`-.                 
                    .  : \`. .                
                    : _   '  \\               
                    ; *\` _.   \`*-._          
                    \`-.-'          \`-.       
                      ;       \`       \`.     
                      :.       .        \\    
                      . \\  .   :   .-'   .   
                      '  \`+.;  ;  '      :   
                      :  '  |    ;       ;-. 
                      ; '   : :\`-:     _.\`* ;
                   .*' /  .*' ; .*\`- +'  \`*' 
                   \`*-*   \`*-*  \`*-*'        
`,
    rarity: "common",
  },
  {
    name: "Moose",
    type: "Alces alces",
    biome: "forest",
    color: "rainbow",
    description: `
If an antler is knocked against a tree during the 
velvet stage, it will bleed. ... At full size, 
antlers harden beneath their velvet and the blood 
supply stops. The dead and dry velvet peels off 
in strips, aided by the bucks' vigorous rubbing 
against trees and bushes. Most bucks shed their 
antlers in January and February.`,
    ascii: `             ,
       ,   , |-_      ,           ,  ,
      (_  ,' ( \\)  :  |           ' ,'
        \\_(  ( :| _,_,'     ''',  ;,'
      ,   '\\_\\\\ ',-'          ,', ,,    ,
     ,'  ,   '\\ ,| ,           ''_.',   ',  ,
  .' ,  ',:   )\\ |,'           '-- (     ',-'
  ',,'    ':_;)_,'\\               ) \\__,,-'
(__(:_ ,      \\ ,  \\_            / ,--''
    \\_,'_,     \\\\ /''-,        __) )
      '._',__ ._\\(_   ____,--''_,-'
    (_') (   )(  /_''',___,--''--.'
      / __===((_(_)  (,"";"
     (/'  ,"7,---.__,""_;"    
        _,-""" __   ("" ""--..___..----.........--------""""""---._  _
   _,--"      ;O") )))  \`\` :.\`\`:.\` \`\` \`\`\` \`  \`\`  .\`\`\` . .. ; . .::""":"=
  (( "(  7/,,  \`  )  :      : \` : \`        .      . \`\` . .. ; ::..:"  :)\\
   \\__'__,._  ,,,""    :               :    .      . \`\` . .. ;: .. :" :((\\
            """",      :              :.     .    .  \`\` . ..; . :.:" :  "\`
                \\;;     :           ::.       .   .    \`\` : .:. : .:";
                |; ;     :        ...:        .       , ;;:. ;. : . :;
                |;  ;     ::    ..::\`        .     , ,,;;;) ;. : ..:;:
                ;;   ;;      ..::\` ;;;  ,  ,   ,  ,  ,;;;;) . : ..:; :
                \`;;    ;;;  :::\`\`;;; ;;;,,;;,;;,,;;,;;;;;( ; .. :.; (
                 \`;;;     __    :: (;;;;;;;;;;;;;;;;;;;;;_\\  ; ;. ; :
                  \`;;;;;;\`;:"\\";;:/""\`\`\`\`\`\`\`\`\`\`\`\`\`"""""    \\;;;. / :(
                    \`\`\`\` \\:::|;;;/                          \\;;;;| :\\
                          |::;;;;;                           ":;;;|::\\
                          ::;\\;;;;                            ":;;\\::(
                          ::; \\;;|                             \\;;(:::)
                          |:; |;;|                             );;)|::/
                          /:: \\;;;                             ;;/ \\:|
                          ;:: |;;)                            ;;|  ;:|
                          ;::  ;;|                            ;;|  ;:|
                         ./:;  /;|                           ;;/   ;:|
                       _.;:(  /;(                         _./:(   _;:(
                      ;__;-\\\`;_;_\\\\                      ;__;-\\  ;;_;\\\\`,
    rarity: "common",
  },
  {
    name: "Frog",
    type: "Rhinella marina",
    biome: "city",
    color: "green",
    description: `
Frogs were the first land animals with vocal cords. Male 
frogs have vocal sacs—pouches of skin that fill with air. 
These balloons resonate sounds like a megaphone, and 
some frog sounds can be heard from a mile away.`,
    ascii: `                  _         _
      __   ___.--'_\`.     .'_\`--.___   __
     ( _\`.'. -   'o\` )   ( 'o\`   - .\`.'_ )
     _\\.'_'      _.-'     \`-._      \`_\`./_
    ( \\\`. )    //\\\`         '/\\\\    ( .'/ )
     \\_\`-'\`---'\\\\__,       ,__//\`---'\`-'_/
      \\\`        \`-\\         /-'        '/
       \`                               '     `,
    rarity: "common",
  },
  {
    name: "Tas. Dev'l",
    type: "Sarcophilus harrisii",
    biome: "city",
    color: "yellow",
    description: `
Tasmanian 'devils' are named for the sound they make. In 
fact, the first European settlers to enter Tasmania (the 
southern state where they are found) began hearing 
unearthly, blood-curdling shrieks and growls from 
deep within the bush, making them imagine that 
demons surrounded them in the wilderness. Hence: 
Tasmanian 'devils'.`,
    ascii: `                                              ^             
                                             / \\           ^
                       _,-~~~--~~~--._      (   \\         / \\
                   _,-'               \`.__  (    \\_.---._/   )
                 ,'                       \`-(_\` -'       \`-. )   
                /       "--..                \\.'           \`/  
               ,             \`-.              :  _  .-.  _  : 
              /                 ;             : (0).oYo.(0) ;
            /                    \`             \\.-'V'"'V'-./
           /                     '              \\\\^     ^//
  /\\      /                      '     :    : .-'\\\\^   ^//
 ;  \\    ;   /                  ,'  _.-\`.    \`. : \\\\^_^//
 ;   \\   ;  ;\`.               ,'~~-'     \`.    \`.\`.\`-.-'
  \\   |_/   ;  \`.        /-'/___.---.      \`-.   \`.\`---.
   \\       /     |      /____.---.)))         \`-. \`---.\\
    \\_____/      (____________))))\\\\\\            \`-.\\\\\\\\
                               \\\\\\\\`,
    rarity: "epic",
  },
  {
    name: "Rhinoceros",
    type: "Rhinocerotidae",
    biome: "desert",
    color: "orange",
    description: `
The names of black and white rhinos are misleading - as 
both are actually grey. The white rhino is said to have 
gotten its name from the Afrikaans word for wide ('wyd'), 
referring to its wide, square lip (in contrast, black 
rhinos have a pointy upper lip). Early English explorers 
mistook this word for 'white' and consequently named 
this species 'white' rhino, and the other 'black' rhino 
to differentiate.`,
    ascii: `              _                 __                 
      __.--**"""**--...__..--**""""*-.            
    .'                                \`-.         
  .'                         _           \\        
 /                         .'        .    \\   _._ 
:                         :          :\`*.  :-'.' ;
;    \`                    ;          \`.) \\   /.-' 
:     \`                             ; ' -*   ;    
       :.    \\           :       :  :        :    
 ;     ; \`.   \`.         ;     \` |  '             
 |         \`.            \`. -*"*\\; /        :     
 |    :     /\`-.           \`.    \\/\`.'  _    \`.   
 :    ;    :    \`*-.__.-*""":\`.   \\ ;  'o\` \`. /   
       ;   ;                ;  \\   ;:       ;:   ,/
  |  | |                       /\`  | ,      \`*-*'/ 
  \`  : :  :                /  /    | : .    ._.-'  
   \\  \\ ,  \\              :   \`.   :  \\ \\   .'     
    :  *:   ;             :    |\`*-'   \`*+-*       
    \`**-*\`""               *---*`,
    rarity: "rare",
  },
  {
    name: "Kangaroo",
    type: "Macropodidae",
    biome: "city",
    color: "red",
    description: `
Unlike other animals, kangaroos are not born with muscles. 
They are underdeveloped when they are born. Hence, joeys 
stay in their mother's pouch. As they grow at around six 
months, they have well-developed muscles other body parts 
and they leave their mother's pouch and start hopping on 
each foot.`,
    ascii: `                                                  _  _
                                                 (\\\\( \\
                                                  \`.\\-.)
                              _...._            _,-'   \`-.
\\                           ,'      \`-._.---.,-'       .  \\
 \\\`.                      ,'                               \`.
  \\ \`-...__              /                           .   .:  y
   \`._     \`\`--..__     /                           ,'\`---._/
      \`-._         \`\`--'                      |    /_
          \`.._                   _            ;   <_ \\
              \`--.___             \`.           \`-._ \\ \\
                     \`--<           \`.     (\\ _/)/ \`.\\/
                         \\            \\     \``,
    rarity: "epic",
  },
  { name: "[GO BACK]" },
];

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
  console.log(gradient("yellow", "orange")("Exhibits: "));
  if (usersAnimals.length === 0) {
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

async function displayEncounter() {
  const randomVal = getRandomInt(1, 100);
  const biome;

  if (randomVal >= 96 && randomVal <= 100) { // 5%
    //go into legendary array, make a random value from 0 to legendaryarray.length, use that val to get a random legendsary
  } else if(randomVal >=95 && randomVal <= 76){ //20%
    //epic
  }else if(randomVal >= 75 && randomVal <= 46){ //30%

  }else { //45%
    
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
  sconsole.log();
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
    titleGradient("Scientific Name: " + selectedAnimal.type.capitalize())
  );
  console.log();
  console.log(titleGradient("Found in: " + selectedAnimal.biome.capitalize()));
  console.log();
  console.log(titleGradient("Color: " + selectedAnimal.color.capitalize()));
  console.log();
  console.log(titleGradient("Rarity: " + selectedAnimal.rarity.capitalize()));
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
await mainMenu();
