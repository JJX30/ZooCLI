const commonAnimals = [
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
    ascii: `                    |\\_/|                  
                    | @ @   Woof! 
                    |   <>              _  
                    |  _/\\------____ ((| |))
                    |               \`--' |   
                ____|_       ___|   |___.' 
              /_/_____/____/_______|`,
    rarity: "common",
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
    ascii: `                     ___    ___
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
    ascii: `       ___.-''''-.
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
    ascii: `                     /\\ /\\ 
                    ((ovo))
                    ():::()
                      VVV`,
    rarity: "common",
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
    ascii: `                 .-"""-.
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
    ascii: `                                 ,.---.   
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
    ascii: `                      /\`·.\¸
                     /\¸...\¸\`:·
                 \¸.·\´  \¸   \`·.\¸.·\´)
                : © ):\´;      \¸  {
                 \`·.\¸ \`·  \¸.·\´\\\`·\¸)
                     \`\\\\\´\´\\\¸.·\´`,
    rarity: "common",
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
    ascii: `                  ,--.     .--.
                 /    \\. ./    \\
                /  /\\ / " \\ /\\  \\
               / _/  {~~v~~}  \\_ \\
              /     {   |   }     \\
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
    ascii: `                                )/_
                      _.--..---"-,--c_
                 \\L..'           ._O__)_
         ,-.     _.+  _  \\..--( /              
           \`\\.-''__.-' \\ (     \\_      
             \`'''       \`\\__   /\\
                         ')`,
    rarity: "common",
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
    ascii: `                  _                        
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
                 \`*-*   \`*-*  \`*-*'`,
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
    ascii: `           /|       |\\
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
                  |  |  |           \\   /   |
                  \\  \\  |           |  / \\  |
                   | || |           | |   | |
                   | || |           | |   | |
                   | || |           | |   | |
                   |_||_|           |_|   |_|
                  /_//_/           /_/   /_/`,
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
    ascii: `                                  ,     ,
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
travelling even on short car journeys extremely stressful.)`,
    ascii: `                           ,
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
    ascii: `                        (
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
    name: "Frog      ",
    type: "Rhinella marina",
    biome: "city",
    color: "",
    description: `
Frogs were the first land animals with vocal cords. Male 
frogs have vocal sacs—pouches of skin that fill with air. 
These balloons resonate sounds like a megaphone, and 
some frog sounds can be heard from a mile away.`,
    ascii: `                     _         _
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

export default commonAnimals;
