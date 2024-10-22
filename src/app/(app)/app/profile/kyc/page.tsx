"use client";

import MediaCapture from "@/components/atoms/a-media-capture";
import { Button } from "@/components/ui/button";
import { FileUploader } from "@/components/ui/dropzone";
import Stepper from "@/components/ui/stepper";
import { H3 } from "@/components/ui/typography";
import React from "react";

const ProfileKYCPage = () => {
  const [currentStep, setCurretnStep] = React.useState(1);

  return (
    <div className="w-full p-8">
      <div className="flex flex-col px-16 gap-8 items-center bg-white p-4 rounded-3xl">
        <Stepper
          steps={["Step 1", "Step 2", "Step 3"]}
          currentStep={currentStep}
        />
        {currentStep === 1 && (
          <div className="flex w-full flex-col gap-4 items-center">
            <H3>Upload a proof of your identity</H3>
            <FileUploader />
          </div>
        )}
        {currentStep === 2 && (
          <div className="flex flex-col gap-4 items-center">
            <H3>Facial Recognition</H3>
            <MediaCapture />
          </div>
        )}
        <div className="flex gap-2 justify-end items-end w-full">
          <Button type="button" onClick={() => setCurretnStep((c) => c - 1)}>
            Back
          </Button>
          <Button type="button" onClick={() => setCurretnStep((c) => c + 1)}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileKYCPage;
