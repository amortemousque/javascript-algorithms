#!/usr/bin/env node --experimental-modules

import clear from 'clear'
import chalk from 'chalk'
import quickSort from './algorithms/sorting/quicksort.js'
import mergeSort from './algorithms/sorting/merge-sort.js'
import ValidationError from './utils/error.js';
import { drawUsageMenu, parseParameter, usageMenuRequested, drawTitle } from './utils/utils.js';

clear()

drawTitle('Algo')

if (usageMenuRequested())
  drawUsageMenu()

let algorithms = ['quicksort', 'mergeSort']
let [, command, algorithm, parameter] = process.argv;

try {
  let data = parseParameter(parameter);
  if (data === false)
    throw new ValidationError(`${command} ${algorithm} ${chalk.bgRed(parameter || ' ')} \n ${chalk.red(`The parameter has not a valid JSON syntax.`)}`);

  if (!algorithms.includes(algorithm))
    throw new ValidationError(`${command} ${chalk.bgRed(algorithm)} ${parameter || ''} \n ${chalk.red(`The algorithm does not exist`)}`);

  switch (algorithm) {
    case 'quicksort':
      quickSort(data || [9, 3, 15, 6, 8, 10])
      break;
    case 'mergeSort':
      mergeSort(data || [9, 3, 15, 6, 8, 10])
      break;
  }

} catch (e) {
  if (e instanceof ValidationError) {
    console.error(e.message)
    process.exit()
  } else {
    throw e;
  }
}

