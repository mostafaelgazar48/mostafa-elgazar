'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Server, Shield, Zap } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'JavaScript/Node.js', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 80 },
        { name: 'Python', level: 70 },
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 95 },
        { name: 'Mongoose', level: 85 },
        { name: 'TypeORM', level: 80 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Git', level: 90 },
        { name: 'CI/CD', level: 80 },
        { name: 'Swagger', level: 85 },
      ]
    },
    {
      title: 'Backend Technologies',
      icon: Server,
      skills: [
        { name: 'REST APIs', level: 95 },
        { name: 'Express.js', level: 90 },
        { name: 'NestJS', level: 85 },
        { name: 'Microservices', level: 80 },
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      skills: [
        { name: 'JWT Authentication', level: 85 },
        { name: 'Authorization', level: 80 },
        { name: 'API Security', level: 85 },
        { name: 'Unit Testing', level: 80 },
      ]
    },
    {
      title: 'Performance',
      icon: Zap,
      skills: [
        { name: 'Database Optimization', level: 90 },
        { name: 'Event-Driven Design', level: 85 },
        { name: 'RabbitMQ', level: 80 },
        { name: 'Code Reviews', level: 85 },
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h2>
          <p className="text-primary-light text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive expertise in backend development technologies, from programming languages 
            to cloud infrastructure and security best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary-dark rounded-xl p-6 card-hover"
            >
              <div className="flex items-center space-x-3 mb-6">
                <category.icon className="text-primary-light w-6 h-6" />
                <h3 className="text-text text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-text text-sm font-medium">{skill.name}</span>
                      <span className="text-primary-light text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-primary rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-light to-text h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Additional Skills</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
            {[
              'Git', 'Swagger', 'Docker', 'Agile', 'Scrum', 'TDD',
              'React.js', 'Redux', 'Bootstrap', 'HTML', 'CSS', 'JavaScript',
              'TypeScript', 'Express.js', 'NestJS', 'MongoDB', 'PostgreSQL', 'Mongoose',
              'TypeORM', 'REST APIs', 'Microservices', 'Event-Driven Design', 'RabbitMQ', 'Unit Testing'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-primary-dark rounded-lg p-3 text-center hover:bg-primary transition-colors duration-300"
              >
                <span className="text-text text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 