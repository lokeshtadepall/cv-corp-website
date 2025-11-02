import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Users } from 'lucide-react'

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/30 -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Users size={16} />
                Join 1000+ Students
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Empowering Careers through{' '}
              <span className="text-primary">Hands-On Learning</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              DESHON DEVSOL provides comprehensive training in <span className="font-semibold text-foreground">DevOps</span> and{' '}
              <span className="font-semibold text-foreground">Data Science</span>, focusing on building strong fundamentals, 
              practical skills, and communication excellence for real-world success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                onClick={() => scrollToSection('courses')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 group"
              >
                Explore Courses
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14"
              >
                <BookOpen className="mr-2" size={20} />
                Contact Us
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border/50">
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Students Trained</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">95%</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">15+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Expert Trainers</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ef6d2647-542d-4736-89c0-79e178043a41/generated_images/modern-technology-and-teamwork-banner-il-1fd0e9e1-20251102062324.jpg"
                alt="Technology and Teamwork"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="hidden lg:block absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="hidden lg:block absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
