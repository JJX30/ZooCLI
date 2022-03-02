const legendaryAnimals = [
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
    ascii: `                 ,.
                 \\ '.
                  >   ).--.
                   >  ( o ,=====-
                 <\`'---.   \`.
                  /,    )    )
                   /^/^'    /
                       ) \\v/))  
                       /. \\'    
                     ( ( ) )
                      . /
                     / /
                    : '
                     /
                   .' \`.`,
    rarity: "legendary",
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
The name Brachiosaurus, in fact, means "arm lizard".`,
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
                |   |/             _\\   \\        =~-.__________.-~~~~~~~~~'''
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
    ascii: `                                               _
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
];

export default legendaryAnimals;
