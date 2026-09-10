import { Module } from '../types';
import { DEFAULT_NETWORK_MODULE } from './networkModule';
import { DEFAULT_ENGLISH_MODULE } from './englishModule';
import { DEFAULT_MATH_MODULE } from './mathModule';

export { DEFAULT_NETWORK_MODULE, DEFAULT_ENGLISH_MODULE, DEFAULT_MATH_MODULE };

export const ALL_DEFAULT_MODULES: Module[] = [
  DEFAULT_NETWORK_MODULE,
  DEFAULT_ENGLISH_MODULE,
  DEFAULT_MATH_MODULE,
];

export function getDefaultModuleById(id: string): Module {
  const found = ALL_DEFAULT_MODULES.find((m) => m.id === id);
  return found || DEFAULT_NETWORK_MODULE;
}
