import type { Answer } from '../types';

export function findMostVotedOption(arr: Answer[]) {
  return arr.sort((a, b) => arr.filter((v) => v.id === a.id).length - arr.filter((v) => v.id === b.id).length).pop();
}
