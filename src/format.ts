import { PartialPackageJSON } from './PackageJSON';

export function format(pkgObj: PartialPackageJSON): PartialPackageJSON {
  const prettyPkg: PartialPackageJSON = {};

  ['private', 'name', 'version', 'description'].forEach(key => {
    const value = pkgObj[key];
    delete pkgObj[key];

    if (value) {
      prettyPkg[key] = value;
    }
  });

  return { ...prettyPkg, ...pkgObj };
}
