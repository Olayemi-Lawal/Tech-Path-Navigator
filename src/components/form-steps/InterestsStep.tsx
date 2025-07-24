// InterestStep.tsx
import React from "react";

interface InterestStepProps {
  steps: { icon: React.ReactNode; title: string; description: string }[];
}

const InterestStep: React.FC<InterestStepProps> = ({ steps }) => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
          How It Works
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{step.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestStep;

