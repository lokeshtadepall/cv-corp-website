import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">DESHON DEVSOL</h3>
            <p className="text-primary-foreground/90 text-sm leading-relaxed">
              Empowering careers through hands-on learning in DevOps and Data Science. Building strong fundamentals and communication skills for real-world success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#courses" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#skills" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Communication Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/90">
                  123 Training Street, Tech City, TC 12345
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+1234567890" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@deshondevsol.com" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  info@deshondevsol.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-primary-foreground/90 mb-2">Upcoming Batches</p>
              <p className="text-xs text-primary-foreground/80">Join our next batch starting soon!</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} DESHON DEVSOL. All rights reserved. | Empowering Careers through Hands-On Learning
          </p>
        </div>
      </div>
    </footer>
  )
}
