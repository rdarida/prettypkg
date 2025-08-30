#!/usr/bin/env node
import yargs from 'yargs';
import { join } from 'path';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { EOL } from 'os';

import { format } from '.';

(argv => {
  const pkgPath = join(process.cwd(), 'package.json');

  if (!existsSync(pkgPath)) {
    return;
  }

  try {
    const pkgRaw = readFileSync(pkgPath, { encoding: 'utf-8' });
    const pkgObj = JSON.parse(pkgRaw);
    const prettyPkg = JSON.stringify(format(pkgObj), null, 2);

    if (argv.write) {
      writeFileSync(pkgPath, prettyPkg + EOL);
    } else {
      console.log(prettyPkg);
    }
  } catch (e: any) {
    console.error(e);
  }
})(
  yargs
    .scriptName('prettypkg')
    .usage('$0 [options]')
    .help()
    .options({
      write: {
        type: 'boolean',
        describe: 'Edit the files in-place.',
        default: false
      }
    })
    .parseSync()
);
