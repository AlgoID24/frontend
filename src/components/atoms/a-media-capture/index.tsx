"use client";

import React from "react";
import OouiCamera from "~icons/ooui/camera.jsx";
import IcRoundClose from "~icons/ic/round-close.jsx";
import { Button } from "@/components/ui/button";
import * as faceapi from "face-api.js";
import Image from "next/image";
import { useAtom } from "jotai";
import { capturedImageAtom, modelsLoadedAtom } from "@/state/atoms/faceRecog"; 

const MediaCapture = () => {
  const mediaStream = React.useRef<MediaStream>();
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [capturedImageURL, setCapturedImageURL] = useAtom(capturedImageAtom); 
  const [modelsLoaded, setModelsLoaded] = useAtom(modelsLoadedAtom); 

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

  React.useEffect(() => {
    async function loadModels() {
      try {
        await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
        await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
        await faceapi.nets.ageGenderNet.loadFromUri("/models");
        await faceapi.nets.faceRecognitionNet.loadFromUri("/models");

        setModelsLoaded(true);
        console.log("Models loaded");
      } catch (error) {
        console.error("Error loading models:", error);
      }
    }

    loadModels();
  }, [setModelsLoaded]);

  const capture = React.useCallback(async () => {
    if (videoRef.current && modelsLoaded) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const imageUrl = canvas.toDataURL("image/png");
        setCapturedImageURL(imageUrl); 

        try {
          console.log("Detecting face");
          const detection = await faceapi
            .detectSingleFace(videoRef.current)
            .withFaceLandmarks()
            .withAgeAndGender()
            .withFaceDescriptor();

          console.log(JSON.parse(JSON.stringify(detection?.detection)));
        } catch (err) {
          console.error("Face detection error:", err);
        }
      }
    }
  }, [modelsLoaded, setCapturedImageURL]);

  const clearCapture = () => {
    setCapturedImageURL(undefined); 
    videoRef.current?.play();
  };

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <div className="w-full aspect-video overflow-hidden bg-black rounded-lg">
        <Image
          width={1920}
          height={1080}
          src={capturedImageURL ?? ""}
          style={{ display: capturedImageURL ? "block" : "none" }}
          alt="face-capture"
        />
        <video
          ref={videoRef}
          muted
          autoPlay
          playsInline
          style={{ display: !capturedImageURL ? "block" : "none" }}
          className="w-full aspect-video"
        />
      </div>
      <div className="flex items-center gap-2">
        <Button
          onClick={capture}
          type="button"
          className="text-xl p-2 h-14 aspect-square rounded-full"
        >
          <OouiCamera />
          <span className="sr-only">Capture</span>
        </Button>
        <Button
          onClick={clearCapture}
          className="text-xl p-2 h-14 aspect-square rounded-full"
        >
          <IcRoundClose />
          <span className="sr-only">Clear Capture</span>
        </Button>
      </div>
    </div>
  );
};

export default MediaCapture;
