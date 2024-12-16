import { PackageJSON } from './PackageJSON';

export function format(pkgObj: Partial<PackageJSON>): Partial<PackageJSON> {
  const prettyPkg: any = {};

  ['private', 'version', 'name', 'description'].forEach(key => {
    const value = pkgObj[key];
    delete pkgObj[key];

    if (value) {
      prettyPkg[key] = value;
    }
  });

  return { ...prettyPkg, ...pkgObj };
}
