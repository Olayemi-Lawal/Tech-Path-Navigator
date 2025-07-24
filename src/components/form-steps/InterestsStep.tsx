// InterestStep.tsx
import React from "react";

interface InterestStepProps {
  steps: { icon: React.ReactNode; title: string; description: string }[];
}

const InterestStep: React.FC<InterestStepProps> = ({ steps }) => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestStep;
