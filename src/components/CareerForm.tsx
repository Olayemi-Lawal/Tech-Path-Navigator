import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { InterestsStep } from "./form-steps/InterestsStep";
import { SkillsStep } from "./form-steps/SkillsStep";
import { GoalsStep } from "./form-steps/GoalsStep";
import { WorkStyleStep } from "./form-steps/WorkStyleStep";
import { LearningTimeStep } from "./form-steps/LearningTimeStep";

export interface FormData {
  interests: string[];
  skills: string[];
  goals: string[];
  workStyle: string[];
  learningTime: string;
}

interface CareerFormProps {
  onComplete: (data: FormData) => void;
}

const STEPS = [
  { id: 'interests', title: 'Interests', description: 'What excites you most?' },
  { id: 'skills', title: 'Skills', description: 'What are your current abilities?' },
  { id: 'goals', title: 'Goals', description: 'What do you want to achieve?' },
  { id: 'workStyle', title: 'Work Style', description: 'How do you prefer to work?' },
  { id: 'learningTime', title: 'Learning Time', description: 'How much time can you dedicate?' }
];

export const CareerForm = ({ onComplete }: CareerFormProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    interests: [],
    skills: [],
    goals: [],
    workStyle: [],
    learningTime: ''
  });

  const progress = ((currentStep + 1) / STEPS.length) * 100;

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onComplete(formData);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0: return formData.interests.length > 0;
      case 1: return formData.skills.length > 0;
      case 2: return formData.goals.length > 0;
      case 3: return formData.workStyle.length > 0;
      case 4: return formData.learningTime !== '';
      default: return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <InterestsStep selected={formData.interests} onChange={(interests) => updateFormData('interests', interests)} />;
      case 1:
        return <SkillsStep selected={formData.skills} onChange={(skills) => updateFormData('skills', skills)} />;
      case 2:
        return <GoalsStep selected={formData.goals} onChange={(goals) => updateFormData('goals', goals)} />;
      case 3:
        return <WorkStyleStep selected={formData.workStyle} onChange={(workStyle) => updateFormData('workStyle', workStyle)} />;
      case 4:
        return <LearningTimeStep selected={formData.learningTime} onChange={(learningTime) => updateFormData('learningTime', learningTime)} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Career Assessment
          </h2>
          <span className="text-sm text-muted-foreground">
            Step {currentStep + 1} of {STEPS.length}
          </span>
        </div>
        <Progress value={progress} className="h-2 mb-2" />
        <div className="flex justify-between text-xs text-muted-foreground">
          {STEPS.map((step, index) => (
            <div key={step.id} className={`flex items-center gap-1 ${index <= currentStep ? 'text-primary' : ''}`}>
              {index < currentStep && <CheckCircle className="w-3 h-3" />}
              {step.title}
            </div>
          ))}
        </div>
      </div>

      {/* Form Card */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up">
        <CardHeader>
          <CardTitle className="text-xl">{STEPS[currentStep].title}</CardTitle>
          <CardDescription>{STEPS[currentStep].description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {renderStep()}
          
          {/* Navigation */}
          <div className="flex justify-between pt-6">
            <Button
              variant="ghost"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>
            
            <Button
              variant="ai"
              onClick={nextStep}
              disabled={!isStepValid()}
              className="flex items-center gap-2"
            >
              {currentStep === STEPS.length - 1 ? 'Get Recommendation' : 'Next'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};