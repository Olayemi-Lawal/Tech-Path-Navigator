import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Palette, Code, BarChart3, Cog, Users, Lightbulb } from "lucide-react";

interface InterestsStepProps {
  selected: string[];
  onChange: (interests: string[]) => void;
}

const INTERESTS = [
  { id: 'design', label: 'Design & Visuals', icon: Palette, description: 'Creating beautiful interfaces and user experiences' },
  { id: 'logic', label: 'Logic & Problem Solving', icon: Code, description: 'Building algorithms and solving complex problems' },
  { id: 'data', label: 'Data & Analytics', icon: BarChart3, description: 'Finding insights from data and patterns' },
  { id: 'automation', label: 'Automation & Systems', icon: Cog, description: 'Building tools that make processes efficient' },
  { id: 'collaboration', label: 'Team Collaboration', icon: Users, description: 'Working with others to build amazing products' },
  { id: 'innovation', label: 'Innovation & AI', icon: Lightbulb, description: 'Exploring cutting-edge technology and AI' }
];

export const InterestsStep = ({ selected, onChange }: InterestsStepProps) => {
  const toggleInterest = (interestId: string) => {
    const newSelected = selected.includes(interestId)
      ? selected.filter(id => id !== interestId)
      : [...selected, interestId];
    onChange(newSelected);
  };

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground text-sm sm:text-base">
        Select all areas that genuinely interest you. This helps us understand what motivates you.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {INTERESTS.map((interest) => {
          const isSelected = selected.includes(interest.id);
          const Icon = interest.icon;

          return (
            <Button
              key={interest.id}
              variant={isSelected ? "ai" : "glass"}
              className={`w-full h-auto p-4 flex flex-col items-start text-left transition-all duration-300 rounded-xl ${
                isSelected ? 'scale-100 shadow-md' : 'hover:scale-[1.02]'
              }`}
              onClick={() => toggleInterest(interest.id)}
            >
              <div className="flex items-center gap-3 w-full mb-2 flex-wrap">
                <Icon className={`w-5 h-5 shrink-0 ${isSelected ? 'text-primary-foreground' : 'text-primary'}`} />
                <span className="font-medium text-sm sm:text-base">{interest.label}</span>
                {isSelected && (
                  <Badge variant="secondary" className="ml-auto">Selected</Badge>
                )}
              </div>
              <p className={`text-xs sm:text-sm break-words ${isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                {interest.description}
              </p>
            </Button>
          );
        })}
      </div>

      {selected.length > 0 && (
        <div className="mt-6 p-4 bg-gradient-secondary rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">Selected interests:</p>
          <div className="flex flex-wrap gap-2">
            {selected.map((interestId) => {
              const interest = INTERESTS.find(i => i.id === interestId);
              return (
                <Badge key={interestId} variant="secondary">
                  {interest?.label}
                </Badge>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
