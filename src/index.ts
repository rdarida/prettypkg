import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { EOL } from 'node:os';

import { format } from './format';

export type PrettyPkgOptions = {
  path: string;
  write: boolean;
};

export function prettypkg({ path, write }: PrettyPkgOptions): void {
  if (!existsSync(path)) {
    return;
  }

  try {
    const pkgRaw = readFileSync(path, { encoding: 'utf-8' });
    const pkgObj = JSON.parse(pkgRaw);
    const prettyPkg = JSON.stringify(format(pkgObj), null, 2);

    if (write) {
      writeFileSync(path, prettyPkg + EOL);
    }
    else {
      console.log(prettyPkg);
    }
  }
  catch (e: any) {
    console.error(e);
  }
}
