'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const workExperience = [
    {
      period: '2022/06 - Present',
      role: 'Backend Developer',
      company: 'Obeikan Digital Solutions',
      location: 'Cairo, Egypt',
      description: 'Architecting and developing microservices for scalability, modularity, and system performance in large-scale applications. Leading design and implementation of complex business logic and backend services.',
      technologies: ['Node.js', 'Microservices', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Docker']
    },
    {
      period: '2021/10 - 2022/06',
      role: 'Backend Developer',
      company: 'GermaniaTek',
      location: 'Nasr City, Egypt',
      description: 'Developed APIs for mobile applications focused on real-time content collaboration and editing. Built and maintained CRM system for efficient content management and workflow automation.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'CRM Systems', 'Agile']
    },
    {
      period: '2021/06 - 2021/09',
      role: 'Backend Developer',
      company: 'Egyptian Engineering Group',
      location: 'Cairo, Egypt',
      description: 'Developed APIs for mobile applications with real-time content collaboration. Built and maintained CRM system for content management and workflow automation.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'CRM Systems', 'Agile']
    }
  ]

  const careerJourney = [
    {
      year: '2022',
      title: 'Backend Developer at Obeikan',
      description: 'Leading microservices architecture and complex business logic implementation for large-scale applications.'
    },
    {
      year: '2021',
      title: 'Backend Developer at GermaniaTek',
      description: 'Developed real-time APIs and CRM systems for mobile applications and content management.'
    },
    {
      year: '2021',
      title: 'Backend Developer at EEG',
      description: 'Started career with API development and CRM system implementation for mobile applications.'
    }
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Work Experience</h2>
          <p className="text-primary-light text-lg md:text-xl max-w-3xl mx-auto">
            My professional journey in backend development, from junior developer to senior roles, 
            with expertise in modern technologies and scalable solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Work History</h3>
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary-dark rounded-xl p-6 card-hover"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-text text-xl font-semibold mb-2">{job.role}</h4>
                      <div className="flex items-center space-x-4 text-primary-light text-sm">
                        <div className="flex items-center space-x-1">
                          <Building size={16} />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-primary-light">
                      <Calendar size={16} />
                      <span className="text-sm">{job.period}</span>
                    </div>
                  </div>
                  <p className="text-primary-light mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary text-text px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Career Journey */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Career Journey</h3>
            <div className="space-y-6">
              {careerJourney.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary-dark rounded-xl p-6 card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-text font-bold">{milestone.year}</span>
                    </div>
                    <div>
                      <h4 className="text-text text-xl font-semibold mb-2">{milestone.title}</h4>
                      <p className="text-primary-light">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 grid grid-cols-3 gap-4"
            >
                          <div className="bg-primary-dark rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-text mb-1">6+</div>
              <div className="text-primary-light text-sm">Projects</div>
            </div>
            <div className="bg-primary-dark rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-text mb-1">5+</div>
              <div className="text-primary-light text-sm">Years</div>
            </div>
            <div className="bg-primary-dark rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-text mb-1">20+</div>
              <div className="text-primary-light text-sm">Technologies</div>
            </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience 