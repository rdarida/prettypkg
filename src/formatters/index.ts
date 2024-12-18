import { Formatter, Key } from '../types';
import { defaultFormatter } from './defaultFormatter';
import { privateFormatter } from './privateFormatter';

const formatters: Map<Key, Formatter> = new Map();
formatters.set('private', privateFormatter);

export function getFormatter<T>(key: Key): Formatter {
  const formatter = formatters.get(key);

  if (formatter) return formatter;

  return defaultFormatter;
}
