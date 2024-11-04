import { atom } from "jotai";
import { FormSchema } from "@/components/atoms/a-profile-info-form";

interface KYCData extends FormSchema {}

export const kycAtom = atom<KYCData | undefined>(undefined);
export const stepAtom = atom(0); // Initial step set to 0
