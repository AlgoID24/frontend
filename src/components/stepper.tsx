'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface StepperProps {
  steps: string[]
  initialStep?: number
}

export function Stepper({ steps, initialStep = 1 }: StepperProps = { steps: ['Step 1', 'Step 2', 'Step 3'] }) {
  const [currentStep, setCurrentStep] = useState(initialStep)

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length))
  }

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
                  index + 1 <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                )}
              >
                {index + 1}
              </div>
              <div className="mt-2 text-sm font-medium">{step}</div>
            </div>
          ))}
        </div>
        <div className="relative mt-4">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-muted" />
          <div
            className="absolute top-1/2 left-0 h-1 bg-primary transition-all duration-300 ease-in-out"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </div>
      <div className="mt-8 space-y-4">
        <p className="text-center text-lg font-medium">
          Current Step: {currentStep} - {steps[currentStep - 1]}
        </p>
        <div className="flex justify-between">
          <Button onClick={handlePrevious} disabled={currentStep === 1}>
            Previous
          </Button>
          <Button onClick={handleNext} disabled={currentStep === steps.length}>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}