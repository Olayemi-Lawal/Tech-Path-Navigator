import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Zap, Star, ArrowRight, Sparkles, Target } from "lucide-react";
import { CareerForm, FormData } from "@/components/CareerForm";
import { CareerResults } from "@/components/CareerResults";

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'form' | 'results'>('landing');
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleStartAssessment = () => {
    setCurrentView('form');
  };

  const handleFormComplete = (data: FormData) => {
    setFormData(data);
    setCurrentView('results');
  };

  const handleReset = () => {
    setFormData(null);
    setCurrentView('landing');
  };

  if (currentView === 'form') {
    return (
      <div className="min-h-screen bg-gradient-subtle py-8 px-4">
        <div className="container mx-auto">
          <CareerForm onComplete={handleFormComplete} />
        </div>
      </div>
    );
  }

  if (currentView === 'results' && formData) {
    return (
      <div className="min-h-screen bg-gradient-subtle py-8 px-4">
        <div className="container mx-auto">
          <CareerResults formData={formData} onReset={handleReset} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Floating AI Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6 animate-float shadow-glow">
              <Brain className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
              AI Career Path Navigator
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Confused about which tech career suits you? Let our AI analyze your interests, skills, and goals to recommend the perfect path forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" onClick={handleStartAssessment} className="flex items-center gap-3">
                <Sparkles className="w-5 h-5" />
                Start AI Assessment
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>5-minute personalized analysis</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our intelligent assessment analyzes multiple factors to find your perfect tech career match
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center hover:scale-105 transition-all duration-300 group">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle>Smart Analysis</CardTitle>
              <CardDescription>
                Answer questions about your interests, current skills, career goals, and work style preferences
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center hover:scale-105 transition-all duration-300 group">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                <Brain className="w-8 h-8 text-accent-foreground" />
              </div>
              <CardTitle>AI Matching</CardTitle>
              <CardDescription>
                Our algorithm weighs your responses against career requirements to find your best matches
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center hover:scale-105 transition-all duration-300 group">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle>Actionable Results</CardTitle>
              <CardDescription>
                Get personalized recommendations with learning resources, roadmaps, and project ideas
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Career Paths Preview */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Career Paths</h2>
          <p className="text-muted-foreground text-lg">
            Discover which of these exciting tech careers aligns with your profile
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: 'Frontend Development', salary: '$60K - $120K', desc: 'Build beautiful user interfaces' },
            { title: 'Backend Development', salary: '$70K - $140K', desc: 'Create server-side logic and APIs' },
            { title: 'Data Analysis', salary: '$65K - $125K', desc: 'Turn data into actionable insights' },
            { title: 'UI/UX Design', salary: '$55K - $110K', desc: 'Design amazing user experiences' },
            { title: 'DevOps Engineering', salary: '$75K - $150K', desc: 'Automate and streamline processes' },
            { title: 'AI/ML Engineering', salary: '$80K - $160K', desc: 'Build intelligent systems' }
          ].map((career) => (
            <Card key={career.title} className="bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{career.title}</CardTitle>
                <CardDescription>{career.desc}</CardDescription>
                <div className="text-sm font-medium text-primary">{career.salary}</div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8 bg-gradient-primary/10 rounded-2xl p-12 backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Find Your Path?</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands who have discovered their perfect tech career. Start your personalized assessment now.
          </p>
          <Button variant="hero" size="lg" onClick={handleStartAssessment} className="flex items-center gap-3">
            <Brain className="w-5 h-5" />
            Start Your AI Assessment
            <ArrowRight className="w-5 h-5" />
          </Button>
          <p className="text-sm text-muted-foreground">
            ✨ Free • 5 minutes • Personalized results
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-border/50">
        <div className="text-center text-sm text-muted-foreground">
          <p>Developed by <span className="text-primary font-medium">Lawal Olayemi M.</span></p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
