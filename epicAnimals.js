const epicAnimals = [
  {
    name: "Alligator ",
    type: "Alligator mississippiensis",
    biome: "city",
    color: "",
    description: `
      Alligators, along with other crocodilians, have 
      gone through very little evolutionary change 
      since the time of the dinosaurs. American 
      alligators appeared about 84 million years ago, 
      while their ancestors evolved more than 200 
      million years ago. The only older reptiles 
      are turtles and tortoises. In fact, alligators 
      are more closely related to dinosaurs than to 
      other modern reptiles.`,
    ascii: `              _  _
      _ _      (0)(0)-._  _.-'^^'^^'^^'^^'^^'--.
     (.(.)----'\`        ^^'                /^   ^^-._
     (    \`                 \\             |    _    ^^-._
      VvvvvvvVv~~\`__,/.._>  /:/:/:/:/:/:/:/\\  (_..,______^^-.
       \`^^^^^^^^\`/  /   /  /\`^^^^^^^^^>^^>^\`>  >        _\`)  )
                (((\`   (((\`          (((\`  (((\`        \`'--'^`,
    rarity: "epic",
  },
  {
    name: "Whale     ",
    type: "Cetacea",
    biome: "sea",
    color: "",
    description: `
      Whales have sleek, streamlined bodies that move easily through 
      the water. They are the only mammals, other than manatees 
      (seacows), that live their entire lives in the water, and the 
      only mammals that have adapted to life in the open oceans. 
      Whales breathe air.`,
    ascii: `     __________...----..____..-'\`\`-..___
      ,'.                                  \`\`\`--.._
     :                                             \`\`._
     |                           --                    \`\`.
     |                   -.-      -.     -   -.            \`.
     :                     __           --            .     \\
      \`._____________     (  \`.   -.-      --  -   .   \`     \\
         \`-----------------\\   \\_.--------..__..--.._ \`. \`.   :
                            \`--'                     \`-._ .   |
                                                         \`.\`  |
                                                           \\\` |
                                                            \\ |
                                                            / \\\`.
                                                           /  _\\-'
                                                          /_,'`,
    rarity: "epic",
  },
  {
    name: "Bear      ",
    type: "Ursus arctos",
    biome: "forest",
    color: "",
    description: `
      Among all bear species, both the grizzly bear and polar bear
      take the crown as the strongest. Weighing more than around 
      800 pounds — the maximum recorded size is twice that figure 
      — an individual male grizzly is equivalent to around five 
      humans in strength … and even more when enraged.`,
    ascii: `      _      _
         : \`.--.' ;              _....,_
         .'      \`.      _..--'"'       \`-._
        :          :_.-'"                  .\`.
        :  6    6  :                     :  '.;
        :          :                      \`..';
        \`: .----. :'                          ;
          \`._Y _.'               '           ;
            'U'      .'          \`.         ;
               \`:   ;\`-..___       \`.     .'\`.
               _:   :  :    \`\`\`"''"'\`\`.    \`.  \`.
             .'     ;..'            .'       \`.'\`
            \`.......'              \`........-'\``,
    rarity: "epic",
  },
  {
    name: "Snake     ",
    type: "Serpentes",
    biome: "desert",
    color: "",
    description: `
      Contrary to popular lore, a snake's jaws do not come 
      “unhinged” to make this possible, however. The 
      mandibles of a snakes jaw are not rigidly joined 
      at the front like a human chin but by an elastic 
      ligament that allows them to spread apart.`,
    ascii: `    Y
    .-^-.
   /     \\      .- ~ ~ -.
  ()     ()    /   _ _   \`.                     _ _ _
   \\_   _/    /  /     \\   \\                . ~  _ _  ~ .
     | |     /  /       \\   \\             .' .~       ~-. \`.
     | |    /  /         )   )           /  /             \`.\`.
     \\ \\_ _/  /         /   /           /  /                \`'
      \\_ _ _.'         /   /           (  (
                      /   /             \\  \\
                     /   /               \\  \\
                    /   /                 )  )
                   (   (                 /  /
                    \`.  \`.             .'  /
                      \`.   ~ - - - - ~   .'
                         ~ . _ _ _ _ . ~`,
    rarity: "epic",
  },
  {
    name: "Elephant  ",
    type: "Loxodonta",
    biome: "desert",
    color: "",
    description: `
      In addition to beatings, handlers use sleep-deprivation, 
      hunger, and thirst to “break” the elephants' spirit and 
      make them submissive to their owners. It's a ritual that 
      exists, in varying forms and degrees of cruelty, in 
      virtually every country in Asia that has domesticated 
      elephants.`,
    ascii: `                            _
                            .' \`'.__
                           /      \\ \`'"-,
          .-''''--...__..-/ .     |      \\
        .'               ; :'     '.  a   |
       /                 | :.       \\     =\\
      ;                   \\':.      /  ,-.__;.-;\`
     /|     .              '--._   /-.7\`._..-;\`
    ; |       '                |\`-'      \\  =|
    |/\\        .   -' /     /  ;         |  =/
    (( ;.       ,_  .:|     | /     /\\   | =|
     ) / \`\\     | \`""\`;     / |    | /   / =/
       | ::|    |      \\    \\ \\    \\ \`--' =/
      /  '/\\    /       )    |/     \`-...-\`
     /    | |  \`\\    /-'    /;
     \\  ,,/ |    \\   D    .'  \\
      \`""\`   \\  nnh  D_.-'L__nnh
              \`"""\``,
    rarity: "epic",
  },
  {
    name: "Wolf",
    type: "Canis lupus",
    biome: "forest",
    color: "",
    description: `
      Like many human beings, wolves live in extended families 
      which are called packs. Pack life insures the care and 
      feeding of the young, and allows wolves to defend their 
      common territory. Wolves live in packs because cooperation 
      allows them to bring down larger prey.`,
    ascii: `                              __
                              .d$$b
                            .' TO$;\\
                           /  : TP._;
                          / _.;  :Tb|
                         /   /   ;j$j
                     _.-"       d$$$$
                   .' ..       d$$$$;
                  /  /P'      d$$$$P. |\\
                 /   "      .d$$$P' |\\^"l
               .'           \`T$P^"""""  :
           ._.'      _.'                ;
        \`-.-".-'-' ._.       _.-"    .-"
      \`.-" _____  ._              .-"
     -(.g$$$$$$$b.              .'
       ""^^T$$$P^)            .(:
         _/  -"  /.'         /:/;
      ._.'-'\`-'  ")/         /;/;
   \`-.-"..--""   " /         /  ;
  .-" ..--""        -'          :
  ..--""--.-"         (\\      .-(\\
    ..--""              \`-\\(\\/;\`
      _.                      :
                              ;\`-
                             :\\
                             ;     `,
    rarity: "epic",
  },
  {
    name: "Amoeba",
    type: "It's an Amoeba!",
    biome: "city",
    color: "",
    description: `
      "Amoeba" is a term that describes a simple eukaryotic 
      organism that moves in a characteristic crawling fashion. 
      However, a comparison of the genetic content of the 
      various amoebas shows that these organisms are not 
      necessarily closely related to each other.`,
    ascii: `             ,,,,,,,,
             ,|||\`\`\`\`||||
       ,,,,|||||       ||,
    ,||||\`\`\`\`\`\`\`       \`||
  ,|||\`                 |||,
  ||\`     ....,          \`|||
  ||     ::::::::          |||,
  ||     :::::::'     ||    \`\`|||,
  ||,     :::::'               \`|||
  \`||,                           |||
   \`|||,       ||          ||    ,||
     \`||                        |||\`
      ||                   ,,,||||
      ||              ,||||||\`\`\`
     ,||         ,,|||||\`
    ,||\`   ||   |||\`
   |||\`         ||
  ,||           ||
  ||\`           ||
  |||,         |||
   \`|||,,    ,|||
     \`\`||||||||\``,
    rarity: "epic",
  },
  {
    name: "Kangaroo",
    type: "Macropodidae",
    biome: "city",
    color: "",
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
  {
    name: "Tas. Dev'l",
    type: "Sarcophilus harrisii",
    biome: "city",
    color: "",
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
];

export default epicAnimals;
