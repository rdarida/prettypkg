import { Key, PackageJSON } from './types';
import { getFormatter } from './formatters';
import { sortProperties } from './utils';

const packageJsonKeys: Key[] = [
  'private',
  'name',
  'productName',
  'version',
  'description',
  'keywords',
  'license',
  'author',
  'contributors',
  'funding',
  'homepage',
  'repository',
  'bugs',
  'type',
  'exports',
  'main',
  'module',
  'types',
  'bin',
  'files',
  'scripts',
  'dependencies',
  'peerDependencies',
  'peerDependenciesMeta',
  'optionalDependencies',
  'bundleDependencies',
  'devDependencies',
  'overrides'
];

export function format(pkgObj: Partial<PackageJSON>): Partial<PackageJSON> {
  let prettyPkg: Partial<PackageJSON> = {};

  packageJsonKeys.forEach(key => {
    if (!(key in pkgObj)) return;

    const formatter = getFormatter(key);
    const value = formatter(key, pkgObj);
    delete pkgObj[key];

    if (value !== undefined) {
      prettyPkg = { ...prettyPkg, [key]: value };
    }
  });

  return { ...prettyPkg, ...sortProperties(pkgObj) };
}
