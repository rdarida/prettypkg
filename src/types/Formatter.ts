import { Key, PackageJSON } from './PackageJSON';

export type Formatter = (
  key: Key,
  pkgOrig: Partial<PackageJSON>
) => PackageJSON[Key] | undefined;
