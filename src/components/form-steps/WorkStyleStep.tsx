import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Brain, Users2, User, Clock, Zap } from "lucide-react";

interface WorkStyleStepProps {
  selected: string[];
  onChange: (workStyle: string[]) => void;
}

const WORK_STYLES = [
  { id: 'visual', label: 'Visual & Creative', icon: Eye, description: 'I love working with colors, layouts, and aesthetics' },
  { id: 'analytical', label: 'Analytical & Logical', icon: Brain, description: 'I enjoy breaking down complex problems step by step' },
  { id: 'collaborative', label: 'Team Collaboration', icon: Users2, description: 'I thrive when working closely with others' },
  { id: 'independent', label: 'Independent Work', icon: User, description: 'I prefer focusing deeply on tasks alone' },
  { id: 'structured', label: 'Structured Process', icon: Clock, description: 'I like clear plans and organized workflows' },
  { id: 'flexible', label: 'Fast & Flexible', icon: Zap, description: 'I adapt quickly and enjoy dynamic environments' }
];

export const WorkStyleStep = ({ selected, onChange }: WorkStyleStepProps) => {
  const toggleWorkStyle = (styleId: string) => {
    const newSelected = selected.includes(styleId)
      ? selected.filter(id => id !== styleId)
      : [...selected, styleId];
    onChange(newSelected);
  };

  return (
    <div className="space-y-4">
      <p className="text-muted-foreground">
        How do you prefer to work? Understanding your work style helps match you with the right career path.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {WORK_STYLES.map((style) => {
          const isSelected = selected.includes(style.id);
          const Icon = style.icon;
          
          return (
            <Button
              key={style.id}
              variant={isSelected ? "ai" : "glass"}
              className={`h-auto p-4 flex flex-col items-start text-left transition-all duration-300 ${
                isSelected ? 'scale-105 shadow-glow' : 'hover:scale-102'
              }`}
              onClick={() => toggleWorkStyle(style.id)}
            >
              <div className="flex items-center gap-3 w-full mb-2">
                <Icon className={`w-5 h-5 ${isSelected ? 'text-primary-foreground' : 'text-primary'}`} />
                <span className="font-medium">{style.label}</span>
                {isSelected && (
                  <Badge variant="secondary" className="ml-auto">Selected</Badge>
                )}
              </div>
              <p className={`text-sm ${isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                {style.description}
              </p>
            </Button>
          );
        })}
      </div>
      
      {selected.length > 0 && (
        <div className="mt-6 p-4 bg-gradient-secondary rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">Your work style preferences:</p>
          <div className="flex flex-wrap gap-2">
            {selected.map((styleId) => {
              const style = WORK_STYLES.find(s => s.id === styleId);
              return (
                <Badge key={styleId} variant="secondary">
                  {style?.label}
                </Badge>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};