import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ExternalLink, ArrowRight, Star, BookOpen, Code, Rocket, RefreshCw } from "lucide-react";
import { FormData } from "./CareerForm";

interface CareerPath {
  id: string;
  title: string;
  match: number;
  description: string;
  whyMatch: string[];
  skills: string[];
  averageSalary: string;
  timeline: string;
  resources: {
    roadmap: string;
    courses: { title: string; url: string; type: 'free' | 'paid' }[];
    projects: string[];
  };
}

interface CareerResultsProps {
  formData: FormData;
  onReset: () => void;
}

const CAREER_PATHS: Record<string, CareerPath> = {
  frontend: {
    id: 'frontend',
    title: 'Frontend Development',
    match: 0,
    description: 'Build beautiful, interactive user interfaces that users love to interact with.',
    whyMatch: [],
    skills: ['HTML/CSS', 'JavaScript', 'React/Vue', 'Design Systems', 'Responsive Design'],
    averageSalary: '$60,000 - $120,000',
    timeline: '6-12 months',
    resources: {
      roadmap: 'https://roadmap.sh/frontend',
      courses: [
        { title: 'The Odin Project', url: 'https://theodinproject.com', type: 'free' },
        { title: 'React Complete Guide', url: 'https://udemy.com', type: 'paid' }
      ],
      projects: ['Personal Portfolio', 'Todo App', 'Weather App', 'E-commerce Site']
    }
  },
  backend: {
    id: 'backend',
    title: 'Backend Development',
    match: 0,
    description: 'Build the server-side logic, databases, and APIs that power applications.',
    whyMatch: [],
    skills: ['Python/Node.js', 'Databases', 'APIs', 'Cloud Services', 'Security'],
    averageSalary: '$70,000 - $140,000',
    timeline: '8-14 months',
    resources: {
      roadmap: 'https://roadmap.sh/backend',
      courses: [
        { title: 'CS50', url: 'https://cs50.harvard.edu', type: 'free' },
        { title: 'FastAPI Course', url: 'https://fastapi.tiangolo.com', type: 'free' }
      ],
      projects: ['REST API', 'Authentication System', 'Database Design', 'Microservices']
    }
  },
  data: {
    id: 'data',
    title: 'Data Analysis',
    match: 0,
    description: 'Turn raw data into actionable insights that drive business decisions.',
    whyMatch: [],
    skills: ['Python/R', 'SQL', 'Excel', 'Visualization', 'Statistics'],
    averageSalary: '$65,000 - $125,000',
    timeline: '4-10 months',
    resources: {
      roadmap: 'https://roadmap.sh/data-science',
      courses: [
        { title: 'Kaggle Learn', url: 'https://kaggle.com/learn', type: 'free' },
        { title: 'Python for Data Science', url: 'https://coursera.org', type: 'paid' }
      ],
      projects: ['Sales Dashboard', 'Customer Segmentation', 'Predictive Model', 'A/B Testing']
    }
  },
  uiux: {
    id: 'uiux',
    title: 'UI/UX Design',
    match: 0,
    description: 'Design intuitive and beautiful user experiences that solve real problems.',
    whyMatch: [],
    skills: ['Figma/Sketch', 'User Research', 'Prototyping', 'Design Systems', 'Psychology'],
    averageSalary: '$55,000 - $110,000',
    timeline: '4-8 months',
    resources: {
      roadmap: 'https://roadmap.sh/ux-design',
      courses: [
        { title: 'Google UX Design Certificate', url: 'https://coursera.org/google-ux', type: 'paid' },
        { title: 'Figma Academy', url: 'https://figma.com/academy', type: 'free' }
      ],
      projects: ['App Redesign', 'User Journey Map', 'Design System', 'Usability Testing']
    }
  },
  devops: {
    id: 'devops',
    title: 'DevOps Engineering',
    match: 0,
    description: 'Automate and streamline development processes to deploy software efficiently.',
    whyMatch: [],
    skills: ['Linux', 'Docker', 'AWS/Azure', 'CI/CD', 'Infrastructure as Code'],
    averageSalary: '$75,000 - $150,000',
    timeline: '10-16 months',
    resources: {
      roadmap: 'https://roadmap.sh/devops',
      courses: [
        { title: 'AWS Free Tier', url: 'https://aws.amazon.com/free', type: 'free' },
        { title: 'Docker Mastery', url: 'https://udemy.com', type: 'paid' }
      ],
      projects: ['CI/CD Pipeline', 'Container Orchestration', 'Monitoring Dashboard', 'Infrastructure Automation']
    }
  },
  aiml: {
    id: 'aiml',
    title: 'AI/ML Engineering',
    match: 0,
    description: 'Build intelligent systems that can learn and make predictions from data.',
    whyMatch: [],
    skills: ['Python', 'Machine Learning', 'Deep Learning', 'Data Processing', 'MLOps'],
    averageSalary: '$80,000 - $160,000',
    timeline: '12-18 months',
    resources: {
      roadmap: 'https://roadmap.sh/ai-data-scientist',
      courses: [
        { title: 'fast.ai', url: 'https://fast.ai', type: 'free' },
        { title: 'Andrew Ng ML Course', url: 'https://coursera.org/learn/machine-learning', type: 'paid' }
      ],
      projects: ['Image Classifier', 'Chatbot', 'Recommendation System', 'Time Series Prediction']
    }
  }
};

const calculateCareerMatches = (formData: FormData): CareerPath[] => {
  const paths = Object.values(CAREER_PATHS);
  
  paths.forEach(path => {
    let score = 0;
    const reasons: string[] = [];
    
    // Interest matching
    if (formData.interests.includes('design') && ['frontend', 'uiux'].includes(path.id)) {
      score += 25;
      reasons.push('Your interest in design aligns perfectly with this field');
    }
    if (formData.interests.includes('logic') && ['backend', 'data', 'aiml', 'devops'].includes(path.id)) {
      score += 25;
      reasons.push('Your love for logic and problem-solving is ideal here');
    }
    if (formData.interests.includes('data') && ['data', 'aiml'].includes(path.id)) {
      score += 30;
      reasons.push('Your data interest makes this a natural fit');
    }
    if (formData.interests.includes('automation') && ['devops', 'backend'].includes(path.id)) {
      score += 25;
      reasons.push('Your automation interest aligns with this career');
    }
    if (formData.interests.includes('innovation') && ['aiml', 'frontend'].includes(path.id)) {
      score += 20;
      reasons.push('Perfect for exploring cutting-edge technology');
    }
    
    // Skills matching
    if (formData.skills.includes('html-css') && path.id === 'frontend') {
      score += 20;
      reasons.push('Your HTML/CSS skills give you a head start');
    }
    if (formData.skills.includes('python') && ['backend', 'data', 'aiml'].includes(path.id)) {
      score += 20;
      reasons.push('Your Python skills are highly valuable here');
    }
    if (formData.skills.includes('sql') && ['data', 'backend'].includes(path.id)) {
      score += 15;
      reasons.push('Your SQL knowledge is directly applicable');
    }
    if (formData.skills.includes('design-tools') && ['uiux', 'frontend'].includes(path.id)) {
      score += 20;
      reasons.push('Your design tool experience is a major advantage');
    }
    if (formData.skills.includes('none') && ['frontend', 'uiux'].includes(path.id)) {
      score += 10;
      reasons.push('Great entry point for beginners');
    }
    
    // Goals matching
    if (formData.goals.includes('remote-job') && ['frontend', 'backend', 'data'].includes(path.id)) {
      score += 15;
      reasons.push('Excellent remote work opportunities');
    }
    if (formData.goals.includes('freelancing') && ['frontend', 'uiux'].includes(path.id)) {
      score += 15;
      reasons.push('High demand for freelance work');
    }
    if (formData.goals.includes('high-salary') && ['aiml', 'devops', 'backend'].includes(path.id)) {
      score += 15;
      reasons.push('Among the highest-paying tech roles');
    }
    if (formData.goals.includes('big-tech') && ['frontend', 'backend', 'aiml'].includes(path.id)) {
      score += 10;
      reasons.push('High demand at major tech companies');
    }
    
    // Work style matching
    if (formData.workStyle.includes('visual') && ['frontend', 'uiux'].includes(path.id)) {
      score += 15;
      reasons.push('Perfect for visual and creative work');
    }
    if (formData.workStyle.includes('analytical') && ['data', 'aiml', 'backend'].includes(path.id)) {
      score += 15;
      reasons.push('Ideal for analytical minds');
    }
    if (formData.workStyle.includes('independent') && ['backend', 'data'].includes(path.id)) {
      score += 10;
      reasons.push('Great for focused individual work');
    }
    if (formData.workStyle.includes('collaborative') && ['frontend', 'uiux'].includes(path.id)) {
      score += 10;
      reasons.push('Involves close collaboration with teams');
    }
    
    path.match = Math.min(100, score);
    path.whyMatch = reasons.slice(0, 3);
  });
  
  return paths.sort((a, b) => b.match - a.match);
};

export const CareerResults = ({ formData, onReset }: CareerResultsProps) => {
  const careerMatches = calculateCareerMatches(formData);
  const topMatch = careerMatches[0];
  const otherMatches = careerMatches.slice(1, 3);
  
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-gradient-primary px-4 py-2 rounded-full text-primary-foreground text-sm font-medium">
          <Star className="w-4 h-4" />
          Analysis Complete
        </div>
        <h2 className="text-3xl font-bold">Your AI Career Recommendation</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Based on your interests, skills, and goals, here's your personalized tech career path
        </p>
      </div>

      {/* Top Match */}
      <Card className="bg-gradient-primary text-primary-foreground shadow-glow animate-slide-up">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Rocket className="w-6 h-6" />
                {topMatch.title}
              </CardTitle>
              <p className="text-primary-foreground/80 mt-2">{topMatch.description}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{topMatch.match}%</div>
              <div className="text-sm text-primary-foreground/80">Match</div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Why it matches */}
          <div>
            <h4 className="font-semibold mb-2">Why this fits you perfectly:</h4>
            <ul className="space-y-1">
              {topMatch.whyMatch.map((reason, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full mt-2 flex-shrink-0" />
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-primary-foreground/80">Average Salary</div>
              <div className="font-semibold">{topMatch.averageSalary}</div>
            </div>
            <div>
              <div className="text-sm text-primary-foreground/80">Learning Timeline</div>
              <div className="font-semibold">{topMatch.timeline}</div>
            </div>
          </div>

          {/* Skills to learn */}
          <div>
            <h4 className="font-semibold mb-2">Key Skills to Master:</h4>
            <div className="flex flex-wrap gap-2">
              {topMatch.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Learning resources */}
          <div>
            <h4 className="font-semibold mb-3">Start Your Journey:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="glass" className="h-auto p-4 text-left bg-primary-foreground/10" asChild>
                <a href={topMatch.resources.roadmap} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5" />
                    <div>
                      <div className="font-medium">Learning Roadmap</div>
                      <div className="text-xs text-primary-foreground/70">Step-by-step guide</div>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </div>
                </a>
              </Button>
              
              <Button variant="glass" className="h-auto p-4 text-left bg-primary-foreground/10" asChild>
                <a href={topMatch.resources.courses[0]?.url} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5" />
                    <div>
                      <div className="font-medium">{topMatch.resources.courses[0]?.title}</div>
                      <div className="text-xs text-primary-foreground/70">
                        {topMatch.resources.courses[0]?.type === 'free' ? 'Free Course' : 'Premium Course'}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </div>
                </a>
              </Button>
            </div>
          </div>

          {/* First projects */}
          <div>
            <h4 className="font-semibold mb-2">Beginner Projects to Build:</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {topMatch.resources.projects.slice(0, 4).map((project) => (
                <div key={project} className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  {project}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Other good matches */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Other Great Options for You</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherMatches.map((career) => (
            <Card key={career.id} className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{career.title}</CardTitle>
                  <div className="text-right">
                    <Progress value={career.match} className="w-16 h-2 mb-1" />
                    <div className="text-sm font-medium">{career.match}%</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{career.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Salary: </span>
                    <span className="font-medium">{career.averageSalary}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Timeline: </span>
                    <span className="font-medium">{career.timeline}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="ai" size="lg" asChild>
          <a href={topMatch.resources.roadmap} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Rocket className="w-5 h-5" />
            Start Learning {topMatch.title}
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
        
        <Button variant="ghost" size="lg" onClick={onReset} className="flex items-center gap-2">
          <RefreshCw className="w-5 h-5" />
          Take Assessment Again
        </Button>
      </div>
    </div>
  );
};
