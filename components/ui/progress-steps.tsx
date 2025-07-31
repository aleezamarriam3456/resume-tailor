"use client"
import { cn } from "@/lib/utils";

interface Step {
  number: number;
  title: string;
  active: boolean;
}

interface ProgressStepsProps {
  steps: Step[];
}

export function ProgressSteps({ steps }: ProgressStepsProps) {
  return (
    <div className="flex items-center justify-between max-w-2xl mx-auto">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className="flex items-center">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                step.active
                  ? "bg-primary text-white"
                  : "bg-slate-200 text-slate-400"
              )}
            >
              {step.number}
            </div>
            <span
              className={cn(
                "ml-3 text-sm font-medium",
                step.active ? "text-primary" : "text-slate-400"
              )}
            >
              {step.title}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className="flex-1 h-0.5 bg-slate-200 mx-4">
              <div
                className={cn(
                  "h-full transition-all duration-300",
                  step.active ? "bg-primary" : "bg-slate-200"
                )}
                style={{
                  width: step.active ? "100%" : "0%",
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
