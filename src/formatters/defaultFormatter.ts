import { Key, PackageJSON } from '../types';

export function defaultFormatter<K extends Key>(
  key: Key,
  pkgOrig: Partial<PackageJSON>
): PackageJSON[K] | undefined {
  return pkgOrig[key] as PackageJSON[K] | undefined;
}
