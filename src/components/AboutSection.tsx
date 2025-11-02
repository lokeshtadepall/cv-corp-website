import { Target, Eye, Lightbulb, Users2, TrendingUp, MessageSquare } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground">
            DESHON DEVSOL is more than a training institute—we're your partner in career transformation.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16">
          <Card className="border-primary/20 hover:border-primary/40 transition-colors hover:shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower individuals with practical, industry-relevant skills in DevOps and Data Science, 
                    while nurturing their communication abilities and professional confidence to excel in the tech industry.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors hover:shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Eye className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading training institute recognized for creating industry-ready professionals 
                    who combine technical excellence with strong communication skills and collaborative mindsets.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Teaching Approach */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Our Teaching Approach</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe in learning by doing. Our methodology focuses on practical, hands-on experience combined with strong theoretical foundations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Lightbulb className="text-primary" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Practical Training</h4>
                <p className="text-sm text-muted-foreground">
                  Real-world projects and hands-on labs to build practical expertise that employers value.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Users2 className="text-primary" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Collaborative Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Team-based projects that mirror real workplace dynamics and foster collaboration skills.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <TrendingUp className="text-primary" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Career Readiness</h4>
                <p className="text-sm text-muted-foreground">
                  Industry-aligned curriculum with resume building, interview prep, and job placement support.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <MessageSquare className="text-primary" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Communication Focus</h4>
                <p className="text-sm text-muted-foreground">
                  English communication and presentation skills integrated into every course module.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Target className="text-primary" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Strong Fundamentals</h4>
                <p className="text-sm text-muted-foreground">
                  Building solid foundations before advancing to complex topics ensures lasting understanding.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Users2 className="text-primary" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Expert Mentorship</h4>
                <p className="text-sm text-muted-foreground">
                  Learn from industry professionals with years of real-world DevOps and Data Science experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
