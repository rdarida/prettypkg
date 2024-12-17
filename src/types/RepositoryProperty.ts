import { TypeAndUrl } from './TypeAndUrl';

export type RepositoryProperty = string | (TypeAndUrl & { directory: string });
