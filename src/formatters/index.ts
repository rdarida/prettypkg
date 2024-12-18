import { PackageJSON } from '../types';

type Formatter = (value: any) => any;

export function getFormatter(key: keyof PackageJSON): Formatter {
  switch (key) {
    default:
      return (value: any) => value;
  }
}
