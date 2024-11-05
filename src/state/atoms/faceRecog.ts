import { atom } from "jotai";
import * as faceapi from "face-api.js";

export const faceRecognitionAtom = atom<faceapi.FaceDetection | undefined>(
  undefined,
);
export const modelsLoadedAtom = atom<boolean>(false);
