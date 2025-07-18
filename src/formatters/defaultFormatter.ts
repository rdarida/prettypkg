import { Key, PackageJSON } from '../types';

export function defaultFormatter(
  key: Key,
  pkgOrig: Partial<PackageJSON>
): any | undefined {
  return pkgOrig[key];
}
