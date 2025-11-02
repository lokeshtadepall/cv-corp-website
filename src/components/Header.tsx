"use client"

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-xl sm:text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              DESHON DEVSOL
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary hover:bg-accent"
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary hover:bg-accent"
            >
              Who We Are
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('courses')}
              className="text-foreground hover:text-primary hover:bg-accent"
            >
              Courses
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-primary hover:bg-accent"
            >
              Skills
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary hover:bg-accent"
            >
              Contact
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Enroll Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 border-t border-border animate-in fade-in slide-in-from-top-2">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('home')}
              className="w-full justify-start text-foreground hover:text-primary hover:bg-accent"
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="w-full justify-start text-foreground hover:text-primary hover:bg-accent"
            >
              Who We Are
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('courses')}
              className="w-full justify-start text-foreground hover:text-primary hover:bg-accent"
            >
              Courses
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('skills')}
              className="w-full justify-start text-foreground hover:text-primary hover:bg-accent"
            >
              Skills
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
              className="w-full justify-start text-foreground hover:text-primary hover:bg-accent"
            >
              Contact
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
            >
              Enroll Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
