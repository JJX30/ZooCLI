const animalData = [
  {
    name: "Dog       ",
    type: "Canis lupus familiaris",
    biome: "forest",
    color: "",
    description: `
    Dogs can smell thousands of times better than humans. 
    Their noses have millions more scent receptors—for 
    example, a human nose averages 5 million while a 
    Dachshund's nose has 125 million—making them useful 
    in sniffing out drugs, dead bodies, bed bugs, 
    explosives, and more.`,
    ascii: `     |\\_/|                  
     | @ @   Woof! 
     |   <>              _  
     |  _/\\------____ ((| |))
     |               \`--' |   
 ____|_       ___|   |___.' 
/_/_____/____/_______|`,
    rarity: "common",
  },
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
    ascii: `      c~~p ,---------.
 ,---'oo  )           \\
( O O                  )/
 \`=^='                 /
       \\    ,     .   /
       \\\\  |-----'|  /
       ||__|    |_|__|`,
    rarity: "rare",
  },
  {
    name: "Scorpion  ",
    type: "Scorpiones",
    biome: "desert",
    color: "",
    description: `
    Thanks to low metabolic rates, many 
    scorpions can survive long periods 
    between meals. They often feed every 
    couple of weeks, but in some cases, 
    they're known to go six to 12 months 
    without eating.`,
    ascii: ` ___    ___
( _<    >_ )
//        \\\\
\\\\___..___//
 \`-(    )-'
   _|__|_
  /_|__|_\\
  /_|__|_\\
  /_\\__/_\\
   \\ || /  _)
     ||   ( )
     \\\\___//
      \`---'`,
    rarity: "common",
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
    name: "Camel     ",
    type: "Camelus",
    biome: "desert",
    color: "",
    description: `
    A camel's hump does not hold water at 
    all - it actually stores fat. The camel 
    uses it as nourishment when food is scarce. 
    If a camel uses the fat inside the hump, 
    the hump will become limp and droop down. 
    With proper food and rest the hump will 
    return to normal.`,
    ascii: ` ___.-''''-.
/___  @    |
',,,,.     |         _.'''''''._
     '     |        /           \\
     |     \\    _.-'             \\
     |      '.-'                  '-.
     |                               ',
     |                                '',
      ',,-,                           ':;
           ',,| ;,,                 ,' ;;
              ! ; !'',,,',',,,,'!  ;   ;:
             : ;  ! !       ! ! ;  ;   :;
             ; ;   ! !      ! !  ; ;   ;,
            ; ;    ! !     ! !   ; ;     
            ; ;    ! !    ! !     ; ;
           ;,,      !,!   !,!     ;,;
           /_I      L_I   L_I     /_I`,
    rarity: "common",
  },
  {
    name: "Hum. bird ",
    type: "Trochilidae",
    biome: "sky",
    color: "",
    description: `
    Hummingbirds hearts can beat as fast as 1,260 beats 
    per minute, which is the rate measured in a 
    Blue-throated Hummingbird, or as slow as 50-180 beats 
    per minute on a cold night when they experience torpor, 
    a hibernation-like state.`,
    ascii: `  __/)       __
-(__(  ---@./ww
    \\)     (\\
            "\``,
    rarity: "legendary",
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
    ascii: `      .---.        .-----------
     /     \\  __  /    ------x
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
    name: "Owl       ",
    type: "Strigiformes",
    biome: "sky",
    color: "",
    description: `
    Owl legs are long, but perhaps even more surprising is 
    how thin they are. Compared to the rest of the animal, 
    an owl's legs can look extraordinarily slim and delicate! 
    This, along with short thighs and long feet, are primarily 
    adaptations for a single purpose: flight.`,
    ascii: ` /\\ /\\ 
((ovo))
():::()
  VVV`,
    rarity: "common",
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
    ascii: `    =/\\                 /\\=
    / \\'._   (\\_/)   _.'/ \\
   / .''._'--(o.o)--'_.''. \\
  /.' _/ |\`'=/ " \\='\`| \\_ \`.\\
 /\` .' \`\\;-,'\\___/',-;/\` '. '\\
/.-' jgs   \`\\(-V-)/\`       \`-.\\
\`            "   "            \``,
    rarity: "rare",
  },
  {
    name: "Otter     ",
    type: "Lutrinae",
    biome: "sea",
    color: "",
    description: `
    Sea otters have been known to crack open shells on their chests 
    using rocks as they float on their backs, but they've also been 
    observed using rocks along the shoreline as “anvils” to crack 
    open mussels, clams and crabs.`,
    ascii: `  .-"""-.
 /      o\\
|    o   0).-.
|       .-;(_/     .-.
 \\     /  /)).---._|  \`\\   ,
  '.  '  /((       \`'-./ _/|
    \\  .'  )        .-.;\`  /
     '.             |  \`\\-'
       '._        -'    /
          \`\`""--\`------\``,
    rarity: "common",
  },
  {
    name: "Lobster   ",
    type: "Nephropidae",
    biome: "sea",
    color: "",
    description: `
    Each lobster has two different claws, a larger crusher claw and 
    a smaller pincher claw. ... The pincher claw, or ripper claw, is 
    used to tear apart softer prey such as worms or fish. These claws 
    can be on different sides of a lobster's body, as the crusher claw 
    is always on the lobster's dominant side.`,
    ascii: `                         ,.---.   
               ,,,,     /    _ \`.
                \\\\\\\\   /      \\  )
                 |||| /\\/\`\`-.__\\/
                 ::::/\\/_
 {{\`-.__.-'(\`(^^(^^^(^ 9 \`.========='
{{{{{{ { ( ( (  (   (-----:=
 {{.-'~~'-.(,(,,(,,,(__6_.'=========.
                 ::::\\/\\ 
                 |||| \\/\\  ,-'/\\
                ////   \\ \`\` _/  )
               ''''     \\  \`   /
                         \`---''`,
    rarity: "common",
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
    ascii: `               _,.---.---.---.--.._ 
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
    name: "Platypus  ",
    type: "Ornithorhynchus anatinus",
    biome: "sea",
    color: "",
    description: `
    The platypus is one of the few living mammals to produce venom. 
    The venom is made in venom glands that are connected to hollow
    spurs on their hind legs; it is primarily made during the mating 
    season. While the venom's effects are described as extremely 
    painful, it is not lethal to humans.`,
    ascii: `           _.- ~~^^^'~- _ __ .,.- ~ ~ ~  ~  -. _
 ________,'       ::.                       _,-  ~ -.
((      ~_\\   -s-  ::                     ,'          ;,
 \\\\       <.._ .;;;\`                     ;           }  \`',
  \`\`======='    _ _- _ (   }             \`,          ,'\\,  \`,
               ((/ _ _,i   ! _ ~ - -- - _ _'_-_,_,,,'    \\,  ;
                  ((((____/            (,(,(, ____>        \\,'`,
    rarity: "common",
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
    ascii: `    __________...----..____..-'\`\`-..___
    ,'.                                  \`\`\`--.._
   :                                             \`\`._
   |                           --                    \`\`.
   |                   -.-      -.     -   -.        \`.
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
    name: "Goldfish      ",
    type: "Carassius auratus",
    biome: "sea",
    color: "",
    description: `
    Most goldfish keepers will have heard the “fact” that goldfish 
    memory spans are just three seconds long — but is it true? 
    Scientists have proven that goldfish memory spans are nowhere 
    near as short as three seconds. Your goldfish can actually 
    remember things for at least five months.`,
    ascii: `      /\`·.\¸
     /\¸...\¸\`:·
 \¸.·\´  \¸   \`·.\¸.·\´)
: © ):\´;      \¸  {
 \`·.\¸ \`·  \¸.·\´\\\`·\¸)
     \`\\\\\´\´\\\¸.·\´`,
    rarity: "common",
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
    name: "Cockroach ",
    type: "Blattodea",
    biome: "city",
    color: "",
    description: `
    Cockroaches have extremely strong and flexible exoskeletons, 
    which make them almost impossible to squish, withstand the 
    hardest stomp or the toughest newspaper. They can also 
    flatten themselves to fit into tight spaces and crevices, 
    making for an easy getaway.`,
    ascii: `     ,--.     .--.
    /    \\. ./    \\
   /  /\\ / " \\ /\\  \\
  / _/  {~~v~~}  \\_ \\
 /     {   |   }     \
;   /\\{    |    }/\\   \\
| _/  {    |    }  \\_  :
|     {    |    }      |
|    /{    |    }\\     |
|   / {    |    } \\    |
|  /  {    |    }  \\   |
|  \\  \\    |    /  /   |
|   \\  \\   |   /  /    |
\\    \\  \\  |  /  /     /
 \\   /   ~~~~~   \\    /    `,
    rarity: "common",
  },
  {
    name: "Ant       ",
    type: "Formicidae",
    biome: "city",
    color: "",
    description: `
    Ants use trail pheromones to help other members of the colony 
    get from their nest to a food source and return to the nest 
    again in an efficient manner. Alarm pheromones are used by 
    aphids to warn other aphids that a predator is on the prowl.`,
    ascii: ` \\  \\  
 |__/ _   .-.
(o_o)(_\`>(   )
 { }//||\\\\\`-'`,
    rarity: "common",
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
    name: "Lizard    ",
    type: "Anolis sagrei",
    biome: "desert",
    color: "",
    description: `
    The Brown anole is a small lizard native to Cuba and the 
    Bahamas. This species is highly invasive. In its introduced 
    range, it reaches exceptionally high population densities, 
    is capable of expanding its range very quickly, and both 
    outcompetes and consumes many species of native lizards.`,
    ascii: `                       )/_
             _.--..---"-,--c_
        \\L..'           ._O__)_
,-.     _.+  _  \\..--( /              
  \`\\.-''__.-' \\ (     \\_      
    \`'''       \`\\__   /\\
                ')`,
    rarity: "common",
  },
  {
    name: "Tricera.  ",
    type: "Ceratopsidae",
    biome: "forest",
    color: "",
    description: `
    Triceratops is the most commonly recovered dinosaur in 
    the uppermost Cretaceous deposits of western North America, 
    and its remains have been found throughout the region. 
    Although many other large ceratopsians have been discovered 
    in massive bone beds representing numerous individuals, 
    Triceratops has only rarely been found in groups of 
    three or more individuals.`,
    ascii: `                        . - ~ ~ ~ - .
      ..     _      .-~               ~-.
     //|     \\ \`..~                      \`.
    || |      }  }              /       \\  \\
(\\   \\\\ \\~^..'                 |         }  \\
 \\\`.-~  o      /       }       |        /    \\
 (__          |       /        |       /      \`.
  \`- - ~ ~ -._|      /_ - ~ ~ ^|      /- _      \`.
              |     /          |     /     ~-.     ~- _
              |_____|          |_____|         ~ - . _ _~_-_`,
    rarity: "legendary",
  },
  {
    name: "Ankylo.   ",
    type: "Ankylosauridae",
    biome: "desert",
    color: "",
    description: `
    Often compared to an army tank or bus, Ankylosaurus was a 
    heavily armored dinosaur with a large club-like protrusion 
    at the end of its tail. Ankylosaurus means "fused lizard" 
    in Greek, and it was given that name because bones in its 
    skull and other parts of its body were fused, making the 
    dinosaur extremely rugged.`,
    ascii: `                     /~~~~~~~~~~~~\\_
 _+=+_             _[~  /~~~~~~~~~~~~\\_
{""|""}         [~~~    [~   /~~~~~~~~~\\_
 """:-'~[~[~"~[~  ((++     [~  _/~~~~~~~~\\_
      '=_   [    ,==, ((++    [    /~~~~~~~\\-~~~-.
         ~-_ _=+-(   )/   ((++  .~~~.[~~~~(  {@} \\\`.
                 /   }\\ /     (     }     (   .   ''}
                (  .+   \\ /  //     )    / .,  """"/
                \\\\  \\     \\ (   .+~~\\_  /.= /'""""
                <"_V_">      \\\\  \\    ~~~~~~\\\\  \\
                              \\\\  \\          \\\\  \\
                              <"_V_">        <"_V_">`,
    rarity: "legendary",
  },
  {
    name: "Brachio.  ",
    type: "Saurischia",
    biome: "mountain",
    color: "",
    description: `
    Brachiosaurus was an unusual dinosaur that lived 155.7 
    million to 150.8 million years ago during the mid- to 
    late Jurassic Period. Specimens have been found primarily 
    in the fossil-rich Morrison Formation in North America, 
    but the dinosaur did not resemble any of the others that 
    roamed the region. Its long neck made it look like a 
    giraffe, and its forelegs were longer than its hind legs. 
    The name Brachiosaurus, in fact, means "arm lizard."`,
    ascii: `   _
 .~q\`,
{__,  \\
    \\' \\
     \\  \\
      \\  \\
       \\  \`._            __.__
        \\    ~-._  _.==~~     ~~--.._
         \\        '                  ~-.
          \\      _-   -_                \`.
           \\    /       }        .-    .  \\
            \`. |      /  }      (       ;  \\
              \`|     /  /       (       :   '\\
               \\    |  /        |      /       \\    
                |     /\`-.______.\\     |^-.      \\
                |   |/           (     |   \`.      \\_
                |   ||            ~\\   \\      '._    \`-.._____..----.._=__
                |   |/             _\\   \\      =~-.__________.-~~~~~~~~~'''
              .o'___/            .o______}`,
    rarity: "legendary",
  },
  {
    name: "V-Raptor  ",
    type: "Dromaeosauridae",
    biome: "sea",
    color: "",
    description: `
    These dinosaurs had different carbon isotopes in the 
    smallest and largest teeth discovered, which suggests 
    the raptors didn't feed their young. And it showed 
    that they changed what they ate as they grew bigger. 
    This means they likely didn't hunt in packs, the 
    researchers said.`,
    ascii: `                                                     ___._
                                                   .'  <0>'-.._
                                                  /  /.--.____")
                                                 |   \\   __.-'~
                                                 |  :  -'/
                                                /:.  :.-'
__________                                     | : '. |
'--.____  '--------.______       _.----.-----./      :/
        '--.__            \`'----/       '-.      __ :/
              '-.___           :           \\   .'  )/
                    '---._           _.-'   ] /  _/
                         '-._      _/     _/ / _/
                             \\_ .-'____.-'__< |  \\___
                               <_______.\\    \\_\\_---.7
                              |   /'=r_.-'     _\\\\ =/
                          .--'   /            ._/'>
                        .'   _.-'
                       / .--'
                      /,/
                      |/\`)
                      'c=,`,
    rarity: "legendary",
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
    name: "Unicorn   ",
    type: "Equus unicornus",
    biome: "mountain",
    color: "",
    description: `
    The unicorn appeared in early Mesopotamian artworks, and 
    it also was referred to in the ancient myths of India 
    and China. The earliest description in Greek literature 
    of a single-horned (Greek monokerōs, Latin unicornis) 
    animal was by the historian Ctesias (c. 400 BCE), who 
    related that the Indian wild ass was the size of a horse,
    with a white body, purple head, and blue eyes, and on 
    its forehead was a cubit-long horn coloured red at 
    the pointed tip, black in the middle, and white at 
    the base.`,
    ascii: `                                            _
                                           //
                                          //
                                      \\  // ,
                                     |\\/ /_/|
                                    /\\ )  )\\\\/
                                   /(   \\  / \\
                                  /(   J \`(   \\
                                 / ) | _\\     /
                                /|)  \\  eJ    L
                               |  \\ L \\   L   L
                              /  \\  J  \`. J   L
                              |  )   L   \\/   \\
                             /  \\    J   (\\   /
           _....___         |  \\      \\   \\\`\`\`
    ,.._.-'        '''--...-||\\     -. \\   \\
  .'.=.'                    \`         \`.\\ [ Y
 /   /                                  \\]  J
Y / Y                                    Y   L
| | |          \\                         |   L
| | |           Y                        A  J
|   I           |                       /I\\ /
|    \\          I             \\        ( |]/|
J     \\         /._           /        -tI/ |
 L     )       /   /'-------'J           \`'-:.
 J   .'      ,'  ,' ,     \\   \`'-.__          \\
  \\ T      ,'  ,'   )\\    /|        ';'---7   /
   \\|    ,'L  Y...-' / _.' /         \\   /   /
    J   Y  |  J    .'-'   /         ,--.(   /
     L  |  J   L -'     .'         /  |    /\\
     |  J.  L  J     .-;.-/       |    \\ .' /
     J   L\`-J   L____,.-'\`        |  _.-'   |
      L  J   L  J                  \`\`  J    |
      J   L  |   L                     J    |
       L  J  L    \\                    L    \\
       |   L  ) _.'\\                    ) _.'\\
       L    \\('\`    \\                  ('\`    \\
        ) _.'\\\`-....'                   \`-....'
       ('\`    \\
        \`-.___/     `,
    rarity: "legendary",
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
    name: "Cat       ",
    type: "Felis catus",
    biome: "forest",
    color: "",
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
    name: "Moose     ",
    type: "Alces alces",
    biome: "forest",
    color: "",
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
    name: "Deer      ",
    type: "Cervidae",
    biome: "forest",
    color: "",
    description: `
    A male deer is called a buck but some larger males are 
    referred to as stags. A Female deer is called a doe or 
    hind. A young deer is called a fawn. Bucks and does can 
    be distinguished from each other by the presence of 
    antlers. Female Caribou (Reindeer) are the only 
    female deer which grow antlers`,
    ascii: `   /|       |\\
\`__\\\\       //__'
   ||      ||
 \\__\`\\     |'__/
   \`_\\\\   //_'
   _.,:---;,._
   \\_:     :_/
     |@. .@|
     |     |
     ,\\.-./ \\
     ;;\`-'   \`---__________-----.-.
     ;;;                         \\_\\
     ';;;                         |
      ;    |                      ;
       \\   \\     \\        |      /
        \\_, \\    /        \\     |\\
          |';|  |,,,,,,,,/ \\    \\ \\_
          |  |  |           \   /   |
          \\  \\  |           |  / \\  |
           | || |           | |   | |
           | || |           | |   | |
           | || |           | |   | |
           |_||_|           |_|   |_|
          /_//_/           /_/   /_/
`,
    rarity: "common",
  },
  {
    name: "Cow       ",
    type: "Bos taurus",
    biome: "forest",
    color: "",
    description: `
    Cows can see almost 360 degrees. As a result of this 
    near-panoramic view, they can watch for predators from 
    all angles. However, they don't see well straight in 
    front of them and they will typically turn their head 
    to look at you.`,
    ascii: `                      ,     ,
                  ___('-&&&-')__
                 '.__./     \\__.'
     _     _     _ .-'  6  6 \\
   /\` \`--'( ('--\` \`\\         |
  /        ) )      \\ \\ _   _|
 |        ( (        | (0_._0)
 |         ) )       |/ '---'
 |        ( (        |\\_
 |         ) )       |( \\,
  \\       ((\`       / )__/
   |     /:))\\     |   d
   |    /:((::\\    |
   |   |:::):::|   |
   /   \\::&&:::/   \\
   \\   /;U&::U;\\   /
    | | | u:u | | |
    | | \\     / | |
    | | _|   | _| |
    / \\""\`   \`""/ \\
   | __|       | __|
   \`"""\`       \`"""\``,
    rarity: "common",
  },
  {
    name: "Rabbit    ",
    type: "Oryctolagus cuniculus",
    biome: "forest",
    color: "",
    description: `
    Rabbits are banned from some ferries. Legend has it that 
    bunnies being transported for food chewed through the 
    hull of a 17th century ship, causing the deaths of many 
    sailors. To this day, you cannot bring your bun with 
    you should you wish to cross the Channel on Brittany 
    Ferries. (Not that you would want to as rabbits find 
    travelling even on short car journeys extremely stressful.)
    `,
    ascii: `         ,
        /|      __
       / |   ,-~ /
      Y :|  //  /
      | jj /( .^
      >-"~"-v"
     /       Y
    jo  o    |
   ( ~T~     j
    >._-' _./
   /   "~"  |
  Y     _,  |
 /| ;-"~ _  l
/ l/ ,-"~    \\
\\//\\/      .- \\
 Y        /    Y        
 l       I     !
 ]\\      _\\    /"\\
(" ~----( ~   Y.  )`,
    rarity: "common",
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
    name: "Spider",
    type: "Araneae",
    biome: "city",
    color: "",
    description: `
    Spider dragline silk has a tensile strength of roughly 
    1.3 GPa. The tensile strength listed for steel might be 
    slightly higher - e.g. 1.65 GPa, but spider silk is a 
    much less dense material, so that a given weight of 
    spider silk is five times as strong as the same weight 
    of steel.`,
    ascii: `              (
               )
              (
        /\\  .-"""-.  /\\
       //\\\\/  ,,,  \\//\\\\
       |/\\| ,;;;;;, |/\\|
       //\\\\\\;-"""-;///\\\\
      //  \\/   .   \\/  \\\\
     (| ,-_| \\ | / |_-, |)
       //\`__\\.-.-./__\`\\\\
      // /.-(() ())-.\\ \\\\
     (\\ |)   '---'   (| /)
      \` (|           |) \`
        \\)           (/`,
    rarity: "common",
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
  {
    name: "Frog      ",
    type: "Rhinella marina",
    biome: "city",
    color: "",
    description: `
    Frogs were the first land animals with vocal cords. Male 
    frogs have vocal sacs—pouches of skin that fill with air. 
    These balloons resonate sounds like a megaphone, and 
    some frog sounds can be heard from a mile away.`,
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
];
export default animalData;
