"use client";

import MediaCapture from "@/components/atoms/a-media-capture";
import ProfileInfoForm from "@/components/atoms/a-profile-info-form";
import { Button } from "@/components/ui/button";
import { FileUploader } from "@/components/ui/dropzone";
import Stepper from "@/components/ui/stepper";
import { H3 } from "@/components/ui/typography";
import { useCustomSearchParams } from "@/hooks/use-search-params";
import React from "react";

const ProfileKYCPage = () => {
  const { getSearchParams, setSearchParams } = useCustomSearchParams();
  const step = Number(getSearchParams["step"] ?? "0");

  const handleNextStep = () => {
    setSearchParams({ step: step + 1 });
  };

  return (
    <div className="w-full p-8">
      <div className="flex flex-col px-16 gap-8 items-center bg-white p-4 rounded-3xl">
        <Stepper steps={["Step 1", "Step 2", "Step 3"]} currentStep={step} />
        
        {(step === 1 || step === 0) && <ProfileInfoForm onNextStep={handleNextStep} />}
        
        {step === 2 && (
          <div className="flex w-full flex-col gap-4 items-center">
            <H3>Upload a proof of your identity</H3>
            <FileUploader />
          </div>
        )}

        {step === 3 && (
          <div className="w-full flex flex-col gap-4 items-center">
            <H3>Facial Recognition</H3>
            <MediaCapture />
          </div>
        )}

        {step >= 2 && (
          <Button
            onClick={handleNextStep}
            className="mt-4"
            disabled={step >= 3} 
          >
            {step < 3 ? "Next" : "Submit"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProfileKYCPage;
