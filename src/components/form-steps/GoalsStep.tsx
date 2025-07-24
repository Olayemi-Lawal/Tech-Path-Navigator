import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Home, Rocket, DollarSign, GraduationCap, Building } from "lucide-react";

interface GoalsStepProps {
  selected: string[];
  onChange: (goals: string[]) => void;
}

const GOALS = [
  { id: 'remote-job', label: 'Remote Work', icon: Home, description: 'Work from anywhere with flexible schedule' },
  { id: 'freelancing', label: 'Freelancing', icon: Briefcase, description: 'Be your own boss and choose projects' },
  { id: 'startup', label: 'Build Products', icon: Rocket, description: 'Create apps or start your own company' },
  { id: 'high-salary', label: 'High Income', icon: DollarSign, description: 'Maximize earning potential in tech' },
  { id: 'learning', label: 'Continuous Learning', icon: GraduationCap, description: 'Always growing and exploring new tech' },
  { id: 'big-tech', label: 'Big Tech Company', icon: Building, description: 'Work at Google, Apple, Meta, etc.' }
];

export const GoalsStep = ({ selected, onChange }: GoalsStepProps) => {
  const toggleGoal = (goalId: string) => {
    const newSelected = selected.includes(goalId)
      ? selected.filter(id => id !== goalId)
      : [...selected, goalId];
    onChange(newSelected);
  };

  return (
    <div className="space-y-4">
      <p className="text-muted-foreground">
        What are your main career aspirations? Select all that resonate with you.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {GOALS.map((goal) => {
          const isSelected = selected.includes(goal.id);
          const Icon = goal.icon;
          
          return (
            <Button
              key={goal.id}
              variant={isSelected ? "ai" : "glass"}
              className={`h-auto p-4 flex flex-col items-start text-left transition-all duration-300 ${
                isSelected ? 'scale-105 shadow-glow' : 'hover:scale-102'
              }`}
              onClick={() => toggleGoal(goal.id)}
            >
              <div className="flex items-center gap-3 w-full mb-2">
                <Icon className={`w-5 h-5 ${isSelected ? 'text-primary-foreground' : 'text-primary'}`} />
                <span className="font-medium">{goal.label}</span>
                {isSelected && (
                  <Badge variant="secondary" className="ml-auto">Selected</Badge>
                )}
              </div>
              <p className={`text-sm ${isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                {goal.description}
              </p>
            </Button>
          );
        })}
      </div>
      
      {selected.length > 0 && (
        <div className="mt-6 p-4 bg-gradient-secondary rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">Your career goals:</p>
          <div className="flex flex-wrap gap-2">
            {selected.map((goalId) => {
              const goal = GOALS.find(g => g.id === goalId);
              return (
                <Badge key={goalId} variant="secondary">
                  {goal?.label}
                </Badge>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};