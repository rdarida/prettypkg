#!/usr/bin/env node
import yargs from 'yargs';
import { join } from 'path';
import { existsSync } from 'fs';

import { greet } from '.';

(argv => {
  console.log(greet());
  console.log(argv);

  const pkgPath = join(process.cwd(), 'package.json');

  if (!existsSync(pkgPath)) {
    return;
  }

  console.log(join(process.cwd(), 'package.json'));
})(yargs.scriptName('prettypkg').usage('$0 [args]').help().argv);
