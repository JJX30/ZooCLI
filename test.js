// function pbcopy(data) {
//   var proc = require("child_process").spawn("pbcopy");
//   proc.stdin.write(data);
//   proc.stdin.end();
// }

// pbcopy(`           _.- ~~^^^'~- _ __ .,.- ~ ~ ~  ~  -. _
// ________,'       ::.                       _,-  ~ -.
// ((      ~_\\   -s-  ::                     ,'          ;,
// \\\\       <.._ .;;;\`                     ;           }  \`',
//  \`\`======='    _ _- _ (   }             \`,          ,'\\,  \`,
//               ((/ _ _,i   ! _ ~ - -- - _ _'_-_,_,,,'    \\,  ;
//                  ((((____/            (,(,(, ____>        \\,'`);
import clipboard from "clipboardy";

clipboard.writeSync("🦄");
