#!/usr/bin/env node
import { join } from 'node:path';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { PrettyPkgOptions, prettypkg } from '.';

yargs(hideBin(process.argv))
  .scriptName('prettypkg')
  .usage<PrettyPkgOptions>(
    '$0 [options]',
    'Format package.json files.',
    yargs =>
      yargs
        .option('path', {
          type: 'string',
          describe: 'Path to the package.json file.',
          default: join(process.cwd(), 'package.json')
        })
        .option('write', {
          type: 'boolean',
          describe: 'Edit the files in-place.',
          default: false
        }),
    options => prettypkg(options)
  )
  .help()
  .strict()
  .parseSync();
