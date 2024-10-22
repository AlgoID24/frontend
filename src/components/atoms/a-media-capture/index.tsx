"use client";

import React from "react";
import OouiCamera from "~icons/ooui/camera.jsx";
import IcRoundClose from "~icons/ic/round-close.jsx";
import { Button } from "@/components/ui/button";
import faceapi from "face-api.js";

const MediaCapture = () => {
  const mediaStream = React.useRef<MediaStream>();
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    (async () => {
      if (navigator.mediaDevices) {
        await navigator.mediaDevices
          .getUserMedia({
            video: {
              width: { min: 640, ideal: 1920, max: 1920 },
              height: { min: 480, ideal: 1080, max: 1080 },
            },
          })
          .then((stream) => {
            mediaStream.current = stream;
            if (videoRef.current) {
              videoRef.current.srcObject = mediaStream.current;
            }
          })
          .catch((reason) => {
            alert(`Failed to capture media. Reason: ${reason}`);
          });
      }
    })();
  }, []);

  const capture = React.useCallback(async () => {
    if (videoRef.current) {
      const detection = await faceapi
        .detectSingleFace(videoRef.current)
        .withFaceLandmarks()
        .withAgeAndGender();

      console.log(detection);
    }
  }, []);

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <video
        ref={videoRef}
        muted
        autoPlay
        playsInline
        className="w-full aspect-video bg-black rounded-lg"
      />
      <div className="flex items-center gap-2">
        <Button
          onClick={capture}
          type="button"
          className="text-xl p-2 h-14 aspect-square rounded-full"
        >
          <OouiCamera />
          <span className="sr-only">Capture</span>
        </Button>
        <Button className="text-xl p-2 h-14 aspect-square rounded-full">
          <IcRoundClose />
          <span className="sr-only">Clear Capture</span>
        </Button>
      </div>
    </div>
  );
};

export default MediaCapture;
