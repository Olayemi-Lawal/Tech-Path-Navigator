import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Coffee, Zap, Target } from "lucide-react";

interface LearningTimeStepProps {
  selected: string;
  onChange: (learningTime: string) => void;
}

const LEARNING_TIME_OPTIONS = [
  {
    id: "1-3",
    label: "1-3 hours/week",
    icon: Coffee,
    description: "Perfect for busy schedules",
    recommendation: "Gradual progress with micro-learning",
  },
  {
    id: "4-8",
    label: "4-8 hours/week",
    icon: Clock,
    description: "Balanced learning approach",
    recommendation: "Steady progress with consistent practice",
  },
  {
    id: "9-15",
    label: "9-15 hours/week",
    icon: Target,
    description: "Serious commitment to growth",
    recommendation: "Accelerated learning with project-based approach",
  },
  {
    id: "16+",
    label: "16+ hours/week",
    icon: Zap,
    description: "Intensive learning mode",
    recommendation: "Bootcamp-style immersive learning",
  },
];

export const LearningTimeStep = ({ selected, onChange }: LearningTimeStepProps) => {
  const selectedOption = LEARNING_TIME_OPTIONS.find((o) => o.id === selected);

  return (
    <div className="space-y-4">
      <p className="text-muted-foreground">
        How much time can you realistically dedicate to learning each week? Be honest – consistency matters more than quantity.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {LEARNING_TIME_OPTIONS.map((option) => {
          const isSelected = selected === option.id;
          const Icon = option.icon;

          return (
            <Button
              key={option.id}
              variant={isSelected ? "ai" : "glass"}
              className={`h-auto p-4 flex items-start text-left transition-all duration-300 ${
                isSelected ? "scale-105 shadow-glow" : "hover:scale-102"
              }`}
              onClick={() => onChange(option.id)}
            >
              <Icon className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 ${isSelected ? 'text-primary-foreground' : 'text-primary'}`} />
              <div className="flex-1">
                <div className="font-medium">{option.label}</div>
                <p className={`text-sm ${isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {option.description}
                </p>
              </div>
            </Button>
          );
        })}
      </div>

      {selectedOption && (
        <div className="mt-6 p-4 bg-gradient-secondary rounded-lg">
          <p className="text-sm text-muted-foreground mb-1">Recommended approach:</p>
          <p className="text-sm text-foreground font-medium">{selectedOption.recommendation}</p>
        </div>
      )}
    </div>
  );
};



      