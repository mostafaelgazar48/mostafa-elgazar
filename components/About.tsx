'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Calendar, Award, Users, Clock, Target, Building } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  const personalInfo = [
    { icon: Mail, label: 'Email', value: 'mostafaelgazar68@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+201115473491' },
    { icon: MapPin, label: 'Location', value: 'Cairo, Egypt' },
    { icon: Calendar, label: 'Experience', value: '5+ Years' },
  ]

  const skillCategories = [
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'NestJS', 'TypeScript', 'REST APIs', 'Microservices', 'Event-Driven Design', 'RabbitMQ', 'Geofencing', 'AVL Integration'],
      icon: Award,
    },
    {
      title: 'Databases & ORMs',
      skills: ['PostgreSQL', 'MongoDB', 'Mongoose', 'TypeORM', 'Database Design', 'Database Optimization'],
      icon: Users,
    },
    {
      title: 'Development Tools',
      skills: ['Git', 'Docker', 'Swagger', 'CI/CD', 'Unit Testing', 'Agile', 'Scrum', 'TDD'],
      icon: Clock,
    },
    {
      title: 'Frontend & Other',
      skills: ['React.js', 'Redux', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Code Reviews', 'Knowledge Sharing', 'Financial APIs', 'Investment Analytics'],
      icon: Target,
    },
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-primary-light text-lg md:text-xl max-w-3xl mx-auto">
            Experienced back-end developer with over 5 years of hands-on experience in creating robust solutions using Node.js, PostgreSQL, and MongoDB. 
            Strong problem-solving skills and passion for software development, eager to take on new industry challenges.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Section */}
            <div className="bg-gray-800 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-600 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/me.jpeg"
                    alt="Mostafa Elgazar"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-white text-xl sm:text-2xl font-bold">Mostafa Nabil Elgazar</h3>
                  <p className="text-gray-300 text-base sm:text-lg">Senior Backend Developer</p>
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <info.icon className="text-primary-light w-5 h-5" />
                    <div>
                      <span className="text-primary-light text-sm">{info.label}: </span>
                      <span className="text-text">{info.value}</span>
                    </div>
                  </div>
                ))}
                
                {/* Education */}
                <div className="border-t border-gray-700 pt-4 mt-4">
                  <h4 className="text-text font-semibold mb-3">Education</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Award className="text-primary-light w-5 h-5" />
                      <div>
                        <span className="text-primary-light text-sm">Degree: </span>
                        <span className="text-text">BSc. of Computer Science</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Building className="text-primary-light w-5 h-5" />
                      <div>
                        <span className="text-primary-light text-sm">University: </span>
                        <span className="text-text">Benha University</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="text-primary-light w-5 h-5" />
                      <div>
                        <span className="text-primary-light text-sm">Period: </span>
                        <span className="text-text">2015 - 2019</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
                <button className="btn-primary text-sm sm:text-base py-2 sm:py-3">Hire Me</button>
                <a 
                  href="/mostafa-elgazar.pdf"
                  download="Mostafa-Elgazar-CV.pdf"
                  className="btn-secondary cursor-pointer text-sm sm:text-base py-2 sm:py-3"
                >
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-dark rounded-xl p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <category.icon className="text-primary-light w-6 h-6" />
                  <h3 className="text-text text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-primary text-text px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 