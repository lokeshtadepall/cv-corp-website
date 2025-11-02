"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Clock, ArrowRight, Server, Database, GitBranch, Container, Cloud, BarChart3, Brain, Code2 } from 'lucide-react'

export default function CoursesSection() {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null)

  const devOpsCourses = [
    {
      id: 'linux',
      title: 'Linux Fundamentals',
      description: 'Master the foundation of DevOps with comprehensive Linux system administration',
      duration: '4 weeks',
      topics: ['Command Line Basics', 'File System Management', 'User & Permission Management', 'Process Management', 'Shell Basics'],
      icon: Server,
      color: 'text-orange-600'
    },
    {
      id: 'shell-scripting',
      title: 'Shell Scripting',
      description: 'Automate tasks and workflows with powerful shell scripting techniques',
      duration: '3 weeks',
      topics: ['Bash Scripting', 'Variables & Control Flow', 'Functions & Loops', 'Text Processing', 'Automation Scripts'],
      icon: Code2,
      color: 'text-green-600'
    },
    {
      id: 'python-devops',
      title: 'Python for DevOps',
      description: 'Learn Python programming for automation and DevOps workflows',
      duration: '4 weeks',
      topics: ['Python Basics', 'File Handling', 'API Integration', 'Automation Libraries', 'DevOps Tools'],
      icon: Code2,
      color: 'text-blue-600'
    },
    {
      id: 'git',
      title: 'Git & Version Control',
      description: 'Master version control and collaborative development workflows',
      duration: '2 weeks',
      topics: ['Git Fundamentals', 'Branching & Merging', 'GitHub/GitLab', 'Pull Requests', 'CI/CD Integration'],
      icon: GitBranch,
      color: 'text-red-600'
    },
    {
      id: 'docker',
      title: 'Docker & Containerization',
      description: 'Build, ship, and run applications with container technology',
      duration: '4 weeks',
      topics: ['Docker Basics', 'Images & Containers', 'Dockerfile', 'Docker Compose', 'Container Registry'],
      icon: Container,
      color: 'text-blue-500'
    },
    {
      id: 'kubernetes',
      title: 'Kubernetes',
      description: 'Orchestrate containerized applications at scale with Kubernetes',
      duration: '5 weeks',
      topics: ['K8s Architecture', 'Pods & Deployments', 'Services & Ingress', 'ConfigMaps & Secrets', 'Helm Charts'],
      icon: Cloud,
      color: 'text-blue-700'
    },
    {
      id: 'jenkins',
      title: 'Jenkins & CI/CD',
      description: 'Implement continuous integration and deployment pipelines',
      duration: '3 weeks',
      topics: ['Jenkins Setup', 'Pipeline Creation', 'Build Automation', 'Testing Integration', 'Deployment Strategies'],
      icon: Server,
      color: 'text-red-500'
    },
    {
      id: 'terraform',
      title: 'Terraform & IaC',
      description: 'Manage infrastructure as code with Terraform',
      duration: '4 weeks',
      topics: ['IaC Concepts', 'Terraform Basics', 'Providers & Resources', 'State Management', 'Modules & Best Practices'],
      icon: Cloud,
      color: 'text-purple-600'
    }
  ]

  const dataScienceCourses = [
    {
      id: 'python-ds',
      title: 'Python for Data Science',
      description: 'Master Python programming for data analysis and manipulation',
      duration: '4 weeks',
      topics: ['Python Fundamentals', 'NumPy & Pandas', 'Data Manipulation', 'File I/O', 'Data Cleaning'],
      icon: Code2,
      color: 'text-blue-600'
    },
    {
      id: 'statistics',
      title: 'Statistics & Probability',
      description: 'Build strong statistical foundations for data analysis',
      duration: '3 weeks',
      topics: ['Descriptive Statistics', 'Probability Theory', 'Hypothesis Testing', 'Distributions', 'Statistical Inference'],
      icon: BarChart3,
      color: 'text-green-600'
    },
    {
      id: 'data-analysis',
      title: 'Data Analysis & Visualization',
      description: 'Transform data into insights with visualization tools',
      duration: '4 weeks',
      topics: ['Matplotlib & Seaborn', 'Data Exploration', 'Visualization Best Practices', 'Dashboard Creation', 'Storytelling with Data'],
      icon: Database,
      color: 'text-purple-600'
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      description: 'Build predictive models with ML algorithms and techniques',
      duration: '6 weeks',
      topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Training', 'Feature Engineering', 'Model Evaluation'],
      icon: Brain,
      color: 'text-indigo-600'
    },
    {
      id: 'deep-learning',
      title: 'AI & Deep Learning',
      description: 'Explore neural networks and artificial intelligence fundamentals',
      duration: '5 weeks',
      topics: ['Neural Networks', 'TensorFlow/PyTorch', 'CNN & RNN', 'Transfer Learning', 'AI Applications'],
      icon: Brain,
      color: 'text-pink-600'
    },
    {
      id: 'projects',
      title: 'Practical Projects',
      description: 'Apply your skills to real-world data science problems',
      duration: '4 weeks',
      topics: ['End-to-End Projects', 'Industry Case Studies', 'Model Deployment', 'Portfolio Building', 'Capstone Project'],
      icon: BarChart3,
      color: 'text-orange-600'
    }
  ]

  return (
    <section id="courses" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Courses We Offer
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive training programs designed to take you from fundamentals to industry-ready professional.
          </p>
        </div>

        {/* DevOps Track */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-3">
              <Server size={18} />
              <span className="font-semibold">Track 01</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">DevOps Engineering Track</h3>
            <p className="text-muted-foreground">Build, deploy, and manage modern infrastructure with industry-leading DevOps tools</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {devOpsCourses.map((course) => {
              const Icon = course.icon
              const isExpanded = expandedCourse === course.id
              
              return (
                <Card key={course.id} className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg group">
                  <CardHeader>
                    <div className={`p-3 ${course.color} bg-primary/5 rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon size={24} />
                    </div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription className="text-sm">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Clock size={16} />
                      <span>{course.duration}</span>
                    </div>
                    
                    {isExpanded && (
                      <div className="mb-4 animate-in fade-in slide-in-from-top-2">
                        <p className="text-sm font-medium text-foreground mb-2">Topics Covered:</p>
                        <ul className="space-y-1">
                          {course.topics.map((topic, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1">
                              <span className="text-primary mt-1">•</span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setExpandedCourse(isExpanded ? null : course.id)}
                      className="w-full text-primary hover:text-primary hover:bg-primary/10 group/btn"
                    >
                      {isExpanded ? 'Show Less' : 'Learn More'}
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Data Science Track */}
        <div>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-3">
              <Database size={18} />
              <span className="font-semibold">Track 02</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Data Science & AI Track</h3>
            <p className="text-muted-foreground">Transform data into insights with machine learning, AI, and advanced analytics</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataScienceCourses.map((course) => {
              const Icon = course.icon
              const isExpanded = expandedCourse === course.id
              
              return (
                <Card key={course.id} className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg group">
                  <CardHeader>
                    <div className={`p-3 ${course.color} bg-primary/5 rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon size={24} />
                    </div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription className="text-sm">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Clock size={16} />
                      <span>{course.duration}</span>
                    </div>
                    
                    {isExpanded && (
                      <div className="mb-4 animate-in fade-in slide-in-from-top-2">
                        <p className="text-sm font-medium text-foreground mb-2">Topics Covered:</p>
                        <ul className="space-y-1">
                          {course.topics.map((topic, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1">
                              <span className="text-primary mt-1">•</span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setExpandedCourse(isExpanded ? null : course.id)}
                      className="w-full text-primary hover:text-primary hover:bg-primary/10 group/btn"
                    >
                      {isExpanded ? 'Show Less' : 'Learn More'}
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button 
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
          >
            Enroll in a Course Today
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  )
}
