import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Paintbrush,
  Globe,
  Terminal,
  FileSpreadsheet,
} from "lucide-react";

interface SkillsStepProps {
  selected: string[];
  onChange: (skills: string[]) => void;
}

const SKILLS = [
  { id: "html-css", label: "HTML/CSS", icon: Code2, level: "Frontend", description: "Basic web markup and styling" },
  { id: "javascript", label: "JavaScript", icon: Code2, level: "Frontend", description: "Programming for web interactivity" },
  { id: "python", label: "Python", icon: Terminal, level: "Backend", description: "Versatile programming language" },
  { id: "sql", label: "SQL", icon: Database, level: "Data", description: "Database querying and management" },
  { id: "excel", label: "Excel/Spreadsheets", icon: FileSpreadsheet, level: "Data", description: "Data analysis and organization" },
  { id: "design-tools", label: "Design Tools (Figma/Adobe)", icon: Paintbrush, level: "Design", description: "Visual design and prototyping" },
  { id: "git", label: "Git/Version Control", icon: Terminal, level: "General", description: "Code versioning and collaboration" },
  { id: "none", label: "I'm a complete beginner", icon: Globe, level: "Beginner", description: "Ready to start my tech journey" },
];

export const SkillsStep = ({ selected, onChange }: SkillsStepProps) => {
  const toggleSkill = (skillId: string) => {
    if (skillId === "none") {
      onChange(["none"]);
      return;
    }

    const newSelected = selected.includes(skillId)
      ? selected.filter((id) => id !== skillId)
      : [...selected.filter((id) => id !== "none"), skillId];

    onChange(newSelected);
  };

  const groupedSkills: Record<string, typeof SKILLS> = {};
  for (const skill of SKILLS) {
    if (!groupedSkills[skill.level]) groupedSkills[skill.level] = [];
    groupedSkills[skill.level].push(skill);
  }

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        Select your current skills. Don't worry if you're just starting - everyone begins somewhere!
      </p>

      {Object.entries(groupedSkills).map(([level, skills]) => (
        <div key={level} className="space-y-3">
          <h4 className="font-medium text-primary">{level}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {skills.map((skill) => {
              const isSelected = selected.includes(skill.id);
              const Icon = skill.icon;

              return (
                <Button
                  key={skill.id}
                  variant={isSelected ? "ai" : "glass"}
                  className={`h-auto p-3 flex items-start text-left transition-all duration-300 ${
                    isSelected ? "scale-105 shadow-glow" : "hover:scale-102"
                  }`}
                  onClick={() => toggleSkill(skill.id)}
                >
                  <Icon
                    className={`w-4 h-4 mt-0.5 mr-3 flex-shrink-0 ${
                      isSelected ? "text-primary-foreground" : "text-primary"
                    }`}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{skill.label}</span>
                      {isSelected && (
                        <Badge variant="secondary" className="text-xs">
                          ✓
                        </Badge>
                      )}
                    </div>
                    <p
                      className={`text-xs ${
                        isSelected
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      {skill.description}
                    </p>
                  </div>
                </Button>
              );
            })}
          </div>
        </div>
      ))}

      {selected.length > 0 && !selected.includes("none") && (
        <div className="mt-6 p-4 bg-gradient-secondary rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">Your current skillset:</p>
          <div className="flex flex-wrap gap-2">
            {selected.map((skillId) => {
              const skill = SKILLS.find((s) => s.id === skillId);
              return skill ? (
                <Badge key={skillId} variant="secondary">
                  {skill.label}
                </Badge>
              ) : null;
            })}
          </div>
        </div>
      )}
    </div>
  );
};
