import { atom } from 'jotai';

export const capturedImageAtom = atom<string | undefined>(undefined);
export const modelsLoadedAtom = atom<boolean>(false);
