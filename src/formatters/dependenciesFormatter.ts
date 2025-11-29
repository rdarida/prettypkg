import { Dictionary, Key, PackageJSON } from '../types';
import { sortProperties } from '../utils';

export function dependenciesFormatter(
  key: Key,
  pkgOrig: Partial<PackageJSON>
): Dictionary<string> | undefined {
  const dependencies = pkgOrig[key] as Dictionary<string>;

  if (!dependencies) return undefined;

  return sortProperties(dependencies);
}
