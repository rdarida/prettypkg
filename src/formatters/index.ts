import { Formatter, Key } from '../types';
import { defaultFormatter } from './defaultFormatter';
import { dependenciesFormatter } from './dependenciesFormatter';
import { privateFormatter } from './privateFormatter';

const formatters: Map<Key, Formatter> = new Map();
formatters.set('dependencies', dependenciesFormatter);
formatters.set('devDependencies', dependenciesFormatter);
formatters.set('optionalDependencies', dependenciesFormatter);
formatters.set('overrides', dependenciesFormatter);
formatters.set('peerDependencies', dependenciesFormatter);
formatters.set('private', privateFormatter);

export function getFormatter(key: Key): Formatter {
  return formatters.get(key) ?? defaultFormatter;
}
