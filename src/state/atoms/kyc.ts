import { FormSchema } from "@/components/atoms/a-profile-info-form";
import { atom } from "jotai";

interface KYCData extends FormSchema {}

const kycAtom = atom<KYCData | undefined>(undefined);

export default kycAtom;
