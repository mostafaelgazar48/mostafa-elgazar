'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mostafaelgazar48', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mostafa-elgazar-710077150/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:mostafaelgazar68@gmail.com', label: 'Email' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-primary-dark py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/me.jpeg"
                  alt="Mostafa Elgazar"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-white font-oswald font-semibold text-xl">
                Mostafa Nabil Elgazar
              </span>
            </div>
            <p className="text-primary-light mb-4">
              Backend developer passionate about creating robust, scalable solutions 
              with modern technologies and best practices.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-text hover:text-primary-light transition-colors duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-text text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {navigationLinks.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-primary-light hover:text-text transition-colors duration-300 text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-text text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-primary-light">
              <p>Email: mostafaelgazar68@gmail.com</p>
              <p>Phone: +201115473491</p>
              <p>Location: Cairo, Egypt</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-primary mt-8 pt-8 text-center"
        >
          <p className="text-primary-light">
            © {currentYear} Mostafa Elgazar. All rights reserved.
          </p>
          <p className="text-primary-light text-sm mt-2">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 