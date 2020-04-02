#!/usr/bin/env node --experimental-modules

import clear from 'clear'
import chalk from 'chalk'
import figlet from 'figlet'
import quickSort from './algorithms/sorting/quicksort.js'
import mergeSort from './algorithms/sorting/merge-sort.js'


function drawUsageMenu() {
  return `
      Perform algorithm command.

      Usage:   algo [OPTIONS] COMMAND
      
      Options:
        -h, --help       Print help and quit
        -v, --version    Print version information and quit
      
      Commands:
        quicksort       Deploy stack or service according to stack dependencies
        merge-sort      Remove stack or service according to stack dependencies 
        
        binary-search   Remove stack or service according to stack dependencies 

      
      Run 'algo COMMAND --help for more information on a command.'
  
  `;
}

clear();


console.log(
  chalk.yellow(
    figlet.textSync('Algo', { horizontalLayout: 'full' })
  )
);

if (process.argv.length <= 2) {
  console.log(drawUsageMenu())
  process.exit()
}

let algorithms = ['quicksort', 'merge-sort']
let [, command, algorithm, parameter] = process.argv;

try {
  let data = JSON.parse(parameter);

  if(!algorithms.some(algorithm)) {
    console.log(chalk.red(`The algorithm does not exist`))
    process.exit()
  }


  switch (algorithm) {
    case 'quicksort':
      quickSort(data)
      break;
    case 'merge-sort':
      mergeSort(data)
      break;
  }
} catch (e) {
  if (e instanceof SyntaxError) {
    console.log(`${command} ${algorithm} ${chalk.bgRed(parameter)}`)
    console.log(chalk.red(`The parameter  has not a valid JSON syntax.`))
    process.exit()
  }
}

