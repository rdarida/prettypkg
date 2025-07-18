import { Key, PackageJSON } from '../types';

type Dependencies = { [key: string]: string };

export function dependenciesFormatter(
  key: Key,
  pkgOrig: Partial<PackageJSON>
): Dependencies | undefined {
  const result: Dependencies = {};
  const dependencies = pkgOrig[key] as Dependencies;

  if (!dependencies) return undefined;

  Object.keys(dependencies)
    .sort()
    .forEach(k => {
      result[k] = dependencies[k];
    });

  return result;
}
