import { Key, PackageJSON } from '../types';
import { sortProperties } from '../utils';

type Dependencies = { [key: string]: string };

export function dependenciesFormatter(
  key: Key,
  pkgOrig: Partial<PackageJSON>
): Dependencies | undefined {
  const result: Dependencies = {};
  const dependencies = pkgOrig[key] as Dependencies;

  if (!dependencies) return undefined;

  return sortProperties(dependencies);
}
