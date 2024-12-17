import { PackageJSON } from './PackageJSON';

type PartialPackageJSON = Partial<PackageJSON>;

const PACKAGE_JSON_KEYS: (keyof PackageJSON)[] = [
  'private',
  'name',
  'version'
];

export function format(pkgObj: PartialPackageJSON): PartialPackageJSON {
  let prettyPkg: PartialPackageJSON = {};

  PACKAGE_JSON_KEYS.forEach(key => {
    const value = pkgObj[key];
    delete pkgObj[key];

    if (value !== undefined) {
      prettyPkg = { ...prettyPkg, [key]: value };
    }
  });

  return { ...prettyPkg, ...pkgObj };
}
