const introFrames = [
  `      ,,,                      ,,,
     {{{}}    ,,,             {{{}}    ,,,
  ,,, ~Y~    {{{}},,,      ,,, ~Y~    {{{}},,, 
 {{}}} |/,,,  ~Y~{{}}}    {{}}} |/,,,  ~Y~{{}}}
  ~Y~ \\|{{}}}/\\|/ ~Y~  ,,, ~Y~ \\|{{}}}/\\|/ ~Y~  ,,,
  \\|/ \\|/~Y~  \\|,,,|/ {{}}}\\|/ \\|/~Y~  \\|,,,|/ {{}}}
  \\|/ \\|/\\|/  \\{{{}}/  ~Y~ \\|/ \\|/\\|/  \\{{{}}/  ~Y~
  \\|/\\\\|/\\|/ \\\\|~Y~//  \\|/ \\|/\\\\|/\\|/ \\\\|~Y~//  \\|/
 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`,
  `      ,,,                      ,,,
     {{{}}    ,,,             {{{}}    ,,,
  ,,, ~Y~    {{{}},,,      ,,, ~Y~    {{{}},,, 
 {{}}} |/,,,  ~Y~{{}}}    {{}}} |/,,,  ~Y~{{}}}
  ~Y~ \\|{{}}}/\\|/ ~Y~  ,,, ~Y~ \\|{{}}}/\\|/ ~Y~  ,,,
  \\|/ \\|/~Y~  \\|,,,|/ {{}}}\\|/ \\|/~Y~  \\|,,,|/ {{}}}
  \\|/ \\|/\\|/  \\{{{}}/  ~Y~ \\|/ \\|/\\|/  \\{{{}}/  ~Y~
  \\|/\\\\|/\\|/ \\\\|~Y~//  \\|/ \\|/\\\\|/\\|/ \\\\|~Y~//  \\|/
 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`,
  `       ,,,                    ,,, 
      {{{}}    ,,,           {{{}}      ,,,
 ,,,  ~Y~     {{{}},        ,,,~Y~     {{{}},
 {}}}  |/ ,,, ~Y~{}}}      {{}}}|/ ,,, ~Y~{}}}
  ~Y~ \\|/{{}}}\\|/ ~Y~ ,,,  ~Y~ \\| {{}}}\\|/ ~Y~ ,,, 
  \\|/ \\|/~Y~  \\| ,,,/{{}}} \\|/ \\|/~Y~  \\| ,,,/{{}}} 
  \\|/ \\|/\\|/  \\|{{{}}  ~Y~ \\|/ \\|/\\|/  \\ {{{}}  ~Y~
  \\|/\\\\|/\\|/ \\\\|~Y~//  \\|/ \\|/\\\\|/\\|/ \\\\|~Y~//  \\|/
 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`,
  `      ,,,                      ,,,
     {{{}}    ,,,             {{{}}    ,,,
  ,,, ~Y~    {{{}},,,      ,,, ~Y~    {{{}},,,
 {{}}} |/,,,  ~Y~{{}}}    {{}}} |/,,,  ~Y~{{}}}
  ~Y~ \\|{{}}}/\\|/ ~Y~  ,,, ~Y~ \\|{{}}}/\\|/ ~Y~  ,,,
  \\|/ \\|/~Y~  \\|,,,|/ {{}}}\\|/ \\|/~Y~  \\|,,,|/ {{}}}
  \\|/ \\|/\\|/  \\{{{}}/  ~Y~ \\|/ \\|/\\|/  \\{{{}}/  ~Y~
  \\|/\\\\|/\\|/ \\\\|~Y~//  \\|/ \\|/\\\\|/\\|/ \\\\|~Y~//  \\|/
 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`,
  `     ,,,                        ,,,
    {{{}}    ,,,               {{{}}  ,,,
   ,,,~Y~   {{{}}  ,,,    ,,,  ~Y~   {{{}}  ,,, 
  {{}}}|,,,   ~Y~ {{}}}  {{}}}  |/,,   ~Y~ {{}}}
  ~Y~ \\{{}}} /\\|/ ~Y~   ,,,~Y~ \\|{}}} /\\|/ ~Y~   ,,,
  \\|/ \\|/~Y~  \\,,, |/  {{}}}|/ \\|/~Y~  \\,,, |/  {{}}}
  \\|/ \\|/\\|/  {{{}} /  ~Y~ \\|/ \\|/\\|/  {{{}} /  ~Y~
  \\|/\\\\|/\\|/ \\\\|~Y~//  \\|/ \\|/\\\\|/\\|/ \\\\|~Y~//  \\|/
 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`,
  `      ,,,                      ,,,
     {{{}}    ,,,             {{{}}    ,,,
  ,,, ~Y~    {{{}},,,      ,,, ~Y~    {{{}},,, 
 {{}}} |/,,,  ~Y~{{}}}    {{}}} |/,,,  ~Y~{{}}}
  ~Y~ \\|{{}}}/\\|/ ~Y~  ,,, ~Y~ \\|{{}}}/\\|/ ~Y~  ,,,
  \\|/ \\|/~Y~  \\|,,,|/ {{}}}\\|/ \\|/~Y~  \\|,,,|/ {{}}}
  \\|/ \\|/\\|/  \\{{{}}/  ~Y~ \\|/ \\|/\\|/  \\{{{}}/  ~Y~
  \\|/\\\\|/\\|/ \\\\|~Y~//  \\|/ \\|/\\\\|/\\|/ \\\\|~Y~//  \\|/
 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`,
  `       ,,,                    ,,,
      {{{}}    ,,,           {{{}}      ,,,
 ,,,  ~Y~     {{{}},        ,,,~Y~     {{{}}, 
 {}}}  |/ ,,, ~Y~{}}}      {{}}}|/ ,,, ~Y~{}}}
  ~Y~ \\|/{{}}}\\|/ ~Y~ ,,,  ~Y~ \\| {{}}}\\|/ ~Y~ ,,,
  \\|/ \\|/~Y~  \\| ,,,/{{}}} \\|/ \\|/~Y~  \\| ,,,/{{}}}
  \\|/ \\|/\\|/  \\|{{{}}  ~Y~ \\|/ \\|/\\|/  \\ {{{}}  ~Y~
  \\|/\\\\|/\\|/ \\\\|~Y~//  \\|/ \\|/\\\\|/\\|/ \\\\|~Y~//  \\|/
 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`,
  `      ,,,                      ,,,
     {{{}}    ,,,             {{{}}    ,,,
  ,,, ~Y~    {{{}},,,      ,,, ~Y~    {{{}},,, 
 {{}}} |/,,,  ~Y~{{}}}    {{}}} |/,,,  ~Y~{{}}}
  ~Y~ \\|{{}}}/\\|/ ~Y~  ,,, ~Y~ \\|{{}}}/\\|/ ~Y~  ,,,
  \\|/ \\|/~Y~  \\|,,,|/ {{}}}\\|/ \\|/~Y~  \\|,,,|/ {{}}}
  \\|/ \\|/\\|/  \\{{{}}/  ~Y~ \\|/ \\|/\\|/  \\{{{}}/  ~Y~
  \\|/\\\\|/\\|/ \\\\|~Y~//  \\|/ \\|/\\\\|/\\|/ \\\\|~Y~//  \\|/
 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`,
];

export default introFrames;
