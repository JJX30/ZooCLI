const rareAnimals = [
  {
    name: "Hippo     ",
    type: "Hippopotamus amphibius",
    biome: "forest",
    color: "",
    description: `
    Ungainly as it is, the hippopotamus is the 
    world's deadliest large land mammal, killing 
    an estimated 500 people per year in Africa. 
    Hippos are aggressive creatures, and they 
    have very sharp teeth.`,
    ascii: `                     c~~p ,---------.
                ,---'oo  )           \\
               ( O O                  )/
                \`=^='                 /
                      \\    ,     .   /
                      \\\\  |-----'|  /
                      ||__|    |_|__|`,
    rarity: "rare",
  },
  {
    name: "Aardvark  ",
    type: "Orycteropus afer",
    biome: "desert",
    color: "",
    description: `
      Aardvarks look a bit like pigs, with 
      rabbit-like ears and a kangaroo's tail, 
      yet they are not related to any of 
      these animals. In fact, one of their 
      closest living relatives is the elephant!`,
    ascii: `                    _,,......_
                   ,-'          \`'--.
                ,-'  _              '-.
       (\`.    ,'   ,  \`-.              \`.
        \\ \\  -    / )    \\               \\
         \`\\\`-^^^, )/      |     /         :
           )^ ^ ^V/            /          '.
           |      )            |           \`.
           9   9 /,--,\\    |._:\`         .._\`.
           |    /   /  \`.  \\    \`.      (   \`.\`.
           |   / \\  \\    \\  \\     \`--\\   )    \`.\`.___
          .;;./  '   )   '   )       ///'       \`-"'
          \`--'   7//\\    ///\\`,
    rarity: "rare",
  },
  {
    name: "Eagle     ",
    type: "Haliaeetus leucocephalus",
    biome: "sky",
    color: "",
    description: `
      Eagles are monogamous, so generally mate for life. They 
      have strong site fidelity, so a mating pair tend to reuse 
      the same nest year after year. Nests, composed of sticks, 
      vegetation, and downy feathers, are built by both males and 
      females.`,
    ascii: `                 .---.        .-----------
                /     \\  __  /    ------
               / /     \\(  )/    -----
              //////   ' \\/ \`   ---
             //// / // :    : ---
            // /   /  /\`    '--
           //          //..\\\\
                  ====UU====UU====
                      '//||\\\\\`
                        ''\`\``,
    rarity: "rare",
  },
  {
    name: "Bat       ",
    type: "Chiroptera",
    biome: "city",
    color: "",
    description: `
      Bats produce echolocation by emitting high frequency sound 
      pulses through their mouth or nose and listening to the echo.
      With this echo, the bat can determine the size, shape and 
      texture of objects in its environment.`,
    ascii: `              =/\\                 /\\=
              / \\'._   (\\_/)   _.'/ \\
             / .''._'--(o.o)--'_.''. \\
            /.' _/ |\`'=/ " \\='\`| \\_ \`.\\
           /\` .' \`\\;-,'\\___/',-;/\` '. '\\
          /.-'       \`\\(-V-)/\`       \`-.\\
          \`            "   "            \``,
    rarity: "rare",
  },
  {
    name: "Sea-turtle",
    type: "Chelonioidea",
    biome: "sea",
    color: "",
    description: `
      Green sea turtles are unique among sea turtles in that they are 
      primarily herbivores, eating mostly seagrasses and algae. This diet 
      is what gives their cartilage and fat a greenish color (not their 
      shells), which is where their name comes from.`,
    ascii: `                  _,.---.---.---.--.._ 
              _.-' \`--.\`---.\`---'-. _,\`--.._
             /\`--._ .'.     \`.     \`,\`-.\`-._\\
            ||   \\  \`.\`---.__\`__..-\`. ,'\`-._/
       _  ,\`\\ \`-._\\   \\    \`.    \`_.-\`-._,\`\`-.
    ,\`   \`-_ \\/ \`-.\`--.\\    _\\_.-'\\__.-\`-.\`-._\`.
   (_.o> ,--. \`._/'--.-\`,--\`  \\_.-'       \\\`-._ \\
    \`---'    \`._ \`---._/__,----\`           \`-. \`-\\
              /_, ,  _..-'                    \`-._\\
              \\_, \\/ ._(
               \\_, \\/ ._\\
                \`._,\\/ ._\\
                  \`._// ./\`-._
                    \`-._-_-_.-'`,
    rarity: "rare",
  },
  {
    name: "Mouse     ",
    type: "Mus musculus",
    biome: "city",
    color: "",
    description: `
      The mouse genome is very similar to our own, making mouse 
      genetic research particularly useful for the study of human 
      diseases. Mice are cost effective because they are cheap 
      and easy to look after.`,
    ascii: `               _     __,..---""-._                 ';-,
          ,    _/_),-"\`             '-.                \`\\\\
         \\|.-"\`    -_)                 '.                ||
         /\`   a   ,                      \\              .'/
         '.___,__/                 .-'    \\_        _.-'.'
            |\\  \\      \\         /\`        _\`""""""\`_.-'
               _/;--._, >        |   --.__/ \`""""""\`
             (((-'  __//\`'-......-;\\      )
                  (((-'       __//  '--. /
                            (((-'    __//
                                   (((-'`,
    rarity: "rare",
  },
  {
    name: "Tortoise    ",
    type: "Testudines",
    biome: "forest",
    color: "",
    description: `
      According to scientific studies, the typical lifespan 
      of a pet tortoise is between 50 and 100 years. However, 
      several studies have revealed that wild tortoises can 
      live up to 150 years and beyond. In 2006, a 
      (reportedly) 255-year-old gigantic tortoise 
      named Adwaitya died.`,
    ascii: `                    __
           .,-;-;-,. /'_\\
         _/_/_/_|_\\_\\) /
       '-<_><_><_><_>=/\\
         \`/_/====/_/-'\\_\\
          ""     ""    ""`,
    rarity: "rare",
  },
  {
    name: "Donkey    ",
    type: "Equus asinus",
    biome: "desert",
    color: "",
    description: `
      For thousands of years donkeys have been the 'helping hooves' 
      of humankind - they are the original beasts of burden. 
      In many countries of the world, and in many situations, 
      they are used as the preferred mode of transport. 
      Donkeys are much more of an all terrain animal than 
      horses. Donkeys are in fact a highly intelligent 
      animal despite popular misconception.`,
    ascii: `                                 |\\    /|
                                ___| \\,,/_/
                             ---__/ \\/    \\
                            __--/     (D)  \\
                            _ -/    (_      \\
                           // /       \\_ /  -\\
     __-------_____--___--/           / \\_ O o)
    /                                 /   \\__/
   /                                 /
  ||          )                   \\_/\\
  ||         /              _      /  |
  | |      /--______      ___\\    /\\  :
  | /   __-  - _/   ------    |  |   \\ \\
   |   -  -   /                | |     \\ )
   |  |   -  |                 | )     | |
    | |    | |                 | |    | |
    | |    < |                 | |   |_/
    < |    /__\\                <  \\
    /__\\                       /___\\`,
    rarity: "rare",
  },
  {
    name: "Dolphin   ",
    type: "Delphinus",
    biome: "sea",
    color: "",
    description: `
      Dolphins demonstrate the ability to do all of these 
      things and most scientists agree that dolphins are 
      very intelligent. They are notoriously talented 
      mimics and quick learners; they demonstrate self-awareness, 
      problem-solving, and empathy, innovation, teaching 
      skills, grief, joy and playfulness.`,
    ascii: `                                    _
                                 _.-~~.)
           _.--~~~~~---....__  .' . .,'
         ,'. . . . . . . . . .~- ._ (
        ( .. .g. . . . . . . . . . .~-._
     .~__.-~    ~\`. . . . . . . . . . . -.
     \`----..._      ~-=~~-. . . . . . . . ~-.
               ~-._   \`-._ ~=_~~--. . . . . .~.
                | .~-.._  ~--._-.    ~-. . . . ~-.
                 \\ .(   ~~--.._~'       \`. . . . .~-.                ,
                  \`._\         ~~--.._    \`. . . . . ~-.    .- .   ,'/
  _  . _ . -~\\        _ ..  _          ~~--.\`_. . . . . ~-_     ,-','\`  .
               \` ._           ~                ~--. . . . .~=.-'. /. \`
         - . -~            -. _ . - ~ - _   - ~     ~--..__~ _,. /   \\  - ~
                . __ ..                   ~-               ~~_. (  \`
  )\`. _ _               \`-       ..  - .    . - ~ ~ .    \\    ~-\` \` \`  \`. _
        _      _`,
    rarity: "rare",
  },
  {
    name: "Rhinoceros",
    type: "Rhinocerotidae",
    biome: "desert",
    color: "",
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
    name: "Possum",
    type: "Didelphidae",
    biome: "city",
    color: "",
    description: `
      "Playing possum" is an idiomatic phrase which means 
      "pretending to be dead". It comes from a characteristic 
      of the Virginia opossum, which is famous for pretending 
      to be dead when threatened.`,
    ascii: `              :     :
          __    |     |    _,_
         (  ~~^-l_____],.-~  /
          \\    ")\\ "^k. (_,-"
           \`>._  ' _ \`\\  \\
        _.-~/'^k. (0)  \` (0
     .-~   {    ~\` ~    ..T
    /   .   "-..       _.-'
   /    Y        .   "T
  Y     l         ~-./l_
  |      \\          . .<'
  |       \`-.._  __,/"r'
  l   .-~~"-.    /    I
   Y         Y "~[    |
    \\         \\_.^--, [
     \\            _~> |
      \\      ___)--~  |
       ^.       :     l
         ^.   _.j     |
           Y    I     |
           l    l     I
            Y    \\    |        
             \\    ^.  |
              \\     ~-^.
               ^.       ~"--.,_
                |~-._          ~-.
                |    ~Y--.,_      ^.
                :     :     "x      \\
                              \\      \\.
                               \\      ]
                                ^._  .^
                                   ~~`,
    rarity: "rare",
  },
];

export default rareAnimals;
