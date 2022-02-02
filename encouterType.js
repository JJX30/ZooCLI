const encounterFrames = [
  {
    ascii: `
          /  \\ \\
         /** \\
        /**** \\   / \\
       /       \\ /** \\
      /  / \\    /     \\        / \\    / \\  / \\      / \\            / \\/ \\/ \\  / \\
     /  /   \\  /       \\      /   \\/ \\/   \\/   \\  / \\/   \\/ \\  / \\  / \\/ / /   \\/   \\
    /  /     \\/ / \\      \\    /     \\  \\  /     \\/ /   /   \\/   \\/   \\  /     \\    \\
   /  /       \\/   \\/ \\    \\  /       \\    /   /     \\
__/__/_______/___/__ \\___ \\__________________________________________________`,
    type: "mountain",
  },
  {
    ascii: `           ,,                               .-.
          || |                               ) )
          || |   ,                          '-'
          || |  | |
          || '--' |
    ,,    || .----'
   || |   || |
   |  '---'| |
   '------.| |                                  _____
   ((_))  || |      (  _                       / /|\\ \\
   (o o)  || |      ))("),                    | | | | |
____\\_/___||_|_____((__^_))____________________\\_\\|/_/__ldb`,
    type: "desert",
  },
  {
    ascii: `              .
               					
              |					
     .               /				
      \       I     				
                  /
        \  ,g88R_
          d888(\`  ).                   _
 -  --==  888(     ).=--           .+(\`  )\`.
)         Y8P(       '\`.          :(   .    )
        .+(\`(      .   )     .--  \`.  (    ) )
       ((    (..__.:'-'   .=(   )   \` _\`  ) )
\`.     \`(       ) )       (   .  )     (   )  ._
  )      \` __.:'   )     (   (   ))     \`-'.:(\`  )
)  )  ( )       --'       \`- __.'         :(      ))
.-'  (_.'          .')                    \`(    )  ))
                  (_  )                     \` __.:'
                                        	
--..,___.--,--'\`,---..-.--+--.,,-,,..._.--..-._.-a:f--.`,
    type: "sky",
  },
  {
    ascii: `                       .|
                       | |
                       |'|            ._____
               ___    |  |            |.   |' .---"|
       _    .-'   '-. |  |     .--'|  ||   | _|    |
    .-'|  _.|  |    ||   '-__  |   |  |    ||      |
    |' | |.    |    ||       | |   |  |    ||      |
 ___|  '-'     '    ""       '-'   '-.'    '\`      |____
jgs~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`,
    type: "city",
  },
  {
    ascii: `               ,@@@@@@@,
       ,,,.   ,@@@@@@/@@,  .oo8888o.
    ,&%%&%&&%,@@@@@/@@@@@@,8888\\88/8o
   ,%&\\%&&%&&%,@@@\\@@@/@@@88\\88888/88'
   %&&%&%&/%&&%@@\\@@/ /@@@88888\\88888'
   %&&%/ %&%%&&@@\\ V /@@' \`88\8 \`/88'
   \`&%\ \` /%&'    |.|        \\ '|8'
       |o|        | |         | |
       |.|        | |         | |
jgs \\\\/ ._\\//_/__/  ,\\_//__\\\\/.  \\_//__/_`,
    type: "forest",
  },
];

export default encounterFrames;
