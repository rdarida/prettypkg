import { PackageJSON } from './PackageJSON';

const PACKAGE_JSON_KEYS: (keyof PackageJSON)[] = [
  'private',
  'name',
  'version',
  'description',
  'license',
  'author',
  'contributors',
  'funding',
  'homepage'
];

type Formatter = (value: any) => any;

function getFormatter(key: keyof PackageJSON): Formatter {
  switch (key) {
    default:
      return (value: any) => value;
  }
}

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
