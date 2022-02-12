#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
import { nPlayer } from "@miqilin21/node-player";
import introFrames from "./introFrames.js";
import titleFrames from "./titleFrames.js";
import encounterType from "./encouterType.js";
import inquirer from "inquirer";
import animalData from "./animalData.js";

let usersAnimals = [
  {
    name: "Dog",
    type: "Canis lupus familiaris",
    biome: "forest",
    color: "blue",
    ascii: `   |\\_/|                  
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
    ascii: `              _         _
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

const titleGradient = gradient("orange", "orange");
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
  console.log(textGradient(`[animal info]`));
  console.log();
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
        usersAnimals.splice(i, 1);
        console.log(selectedAnimal.name + "released back into the wild");
        await sleep();
        await enterZoo();
      }
    }
  } else {
    await enterZoo();
  }
}
await welcome();
await mainMenu();
