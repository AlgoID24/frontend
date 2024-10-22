import { cn } from "@/lib/utils";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

export default function Component({
  steps = ["Step 1", "Step 2", "Step 3"],
  currentStep = 1,
}: StepperProps) {
  return (
    <div className="w-full mx-auto p-4">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-1 first:flex-[2] last:items-end group first:items-start flex-col"
          >
            <div
              className={cn(
                "text-sm font-medium mb-2 -translate-x-3.5 group-last:translate-x-3.5 transition-all",
                index + 1 <= currentStep && "text-blue-500",
              )}
            >
              {step}
            </div>
            <div className="relative overflow-hidden z-0 flex flex-col group-first:items-start group-last:items-end w-full">
              <div
                className={cn(
                  "w-4 h-4 rounded-full z-50 transition-all",
                  index + 1 <= currentStep ? "bg-blue-500" : "bg-gray-300",
                )}
              />
              {index < steps.length && (
                <div
                  className={cn(
                    "absolute top-2 w-full h-0.5 group-last:right-0 transition-all",
                    index + 1 < currentStep ? "bg-blue-500" : "bg-gray-300",
                  )}
                  style={{ width: "calc(100% + 1rem)" }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
