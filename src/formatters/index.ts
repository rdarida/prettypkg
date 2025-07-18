import { Formatter, Key } from '../types';
import { defaultFormatter } from './defaultFormatter';
import { dependenciesFormatter } from './dependenciesFormatter';
import { privateFormatter } from './privateFormatter';

const formatters: Map<Key, Formatter> = new Map();
formatters.set('dependencies', dependenciesFormatter);
formatters.set('devDependencies', dependenciesFormatter);
formatters.set('optionalDependencies', dependenciesFormatter);
formatters.set('peerDependencies', dependenciesFormatter);
formatters.set('private', privateFormatter);

export function getFormatter<T>(key: Key): Formatter {
  const formatter = formatters.get(key);

  if (formatter) return formatter;

  return defaultFormatter;
}
