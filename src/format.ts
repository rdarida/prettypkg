import { getFormatter } from './formatters';
import { PackageJSON } from './types';

const PACKAGE_JSON_KEYS: (keyof PackageJSON)[] = [
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

  PACKAGE_JSON_KEYS.forEach(key => {
    if (!(key in pkgObj)) return;

    const formatter = getFormatter(key);
    const value = formatter(pkgObj[key]);
    delete pkgObj[key];

    if (value !== undefined) {
      prettyPkg = { ...prettyPkg, [key]: value };
    }
  });

  return { ...prettyPkg, ...pkgObj };
}
