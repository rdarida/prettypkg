import { Key, PackageJSON } from '../types';

export function privateFormatter(
  key: Key,
  pkgOrig: Partial<PackageJSON>
): boolean | undefined {
  const value = Boolean(pkgOrig[key]);
  return value ? value : undefined;
}
