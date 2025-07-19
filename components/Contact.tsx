'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mostafaelgazar68@gmail.com',
      href: 'mailto:mostafaelgazar68@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+201115473491',
      href: 'tel:+201115473491'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cairo, Egypt',
      href: '#'
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mostafaelgazar48', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mostafa-elgazar-710077150/', label: 'LinkedIn' },
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h2>
          <p className="text-primary-light text-lg md:text-xl max-w-3xl mx-auto">
            I am eager to connect with you and hear your thoughts. Let's discuss your next project!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center">
                    <info.icon className="text-primary-light w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-primary-light text-sm">{info.label}</p>
                    <a
                      href={info.href}
                      className="text-text hover:text-primary-light transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center text-text hover:text-primary-light transition-colors duration-300"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-primary-dark rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-text font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-primary text-text px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-text font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-primary text-text px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-text font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full bg-primary text-text px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label className="block text-text font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-primary text-text px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 