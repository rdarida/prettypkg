#!/usr/bin/env node
import yargs from 'yargs';
import { join } from 'path';

import { greet } from '.';

(argv => {
  console.log(greet());
  console.log(argv);
  console.log(join(process.cwd(), 'package.json'));
})(yargs.scriptName('prettypkg').usage('$0 [args]').help().argv);
