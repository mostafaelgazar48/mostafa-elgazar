'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Shield, Zap, Settings } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: 'API Development',
      description: 'Design and implement robust RESTful APIs for web and mobile applications with comprehensive documentation.',
      icon: Code,
      features: ['REST APIs', 'Express.js', 'NestJS', 'Swagger']
    },
    {
      title: 'Database Design & Optimization',
      description: 'Design and optimize database schemas, implement data models, and ensure data integrity and performance.',
      icon: Database,
      features: ['PostgreSQL', 'MongoDB', 'Mongoose', 'TypeORM']
    },
    {
      title: 'Microservices Architecture',
      description: 'Build scalable microservices architecture with service discovery and inter-service communication.',
      icon: Cloud,
      features: ['Microservices', 'Event-Driven Design', 'RabbitMQ', 'Docker']
    },
    {
      title: 'CRM Systems',
      description: 'Develop comprehensive CRM systems for efficient content management and workflow automation.',
      icon: Shield,
      features: ['Content Management', 'Workflow Automation', 'User Management', 'Reporting']
    },
    {
      title: 'Real-time Applications',
      description: 'Build real-time applications with live data synchronization, geofencing, and AVL device integration.',
      icon: Zap,
      features: ['Real-time APIs', 'WebSocket', 'Live Tracking', 'Geofencing', 'AVL Integration']
    },
    {
      title: 'DevOps & Deployment',
      description: 'Implement CI/CD pipelines, containerization, and automated deployment strategies.',
      icon: Settings,
      features: ['Docker', 'Git', 'CI/CD', 'Unit Testing']
    },
    {
      title: 'Financial Technology',
      description: 'Develop secure and scalable financial platforms for investment management and digital banking solutions.',
      icon: Shield,
      features: ['Investment APIs', 'Financial Data', 'Real-time Analytics', 'Security Compliance']
    }
  ]

  const integrations = [
    'Node.js', 'Express.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'Mongoose',
    'TypeORM', 'Docker', 'Git', 'Swagger', 'RabbitMQ', 'TypeScript',
    'React.js', 'Redux', 'HTML', 'CSS', 'Bootstrap', 'JavaScript',
    'Geofencing', 'AVL Integration', 'Real-time Tracking', 'Financial APIs', 'Investment Analytics'
  ]

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
          <p className="text-primary-light text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Crafting robust, scalable backend solutions with modern technologies and best practices.
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-center">
            Craft Unforgettable and Impactful Backend Solutions
          </h3>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary-dark rounded-xl p-6 card-hover"
            >
              <div className="flex items-center space-x-3 mb-4">
                <service.icon className="text-primary-light w-8 h-8" />
                <h3 className="text-text text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-primary-light mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="bg-primary text-text px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Integration & Technologies</h3>
          <p className="text-primary-light text-lg mb-8">
            Seamlessly integrate with popular platforms and technologies
          </p>
        </motion.div>

        {/* Integration Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-primary-dark rounded-lg p-4 text-center hover:bg-primary transition-colors duration-300"
            >
              <span className="text-text text-sm font-medium">{integration}</span>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="bg-primary-dark rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-text mb-2">6+</div>
            <div className="text-primary-light">Projects Completed</div>
          </div>
          <div className="bg-primary-dark rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-text mb-2">5+</div>
            <div className="text-primary-light">Years of Experience</div>
          </div>
          <div className="bg-primary-dark rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-text mb-2">20+</div>
            <div className="text-primary-light">Technologies Mastered</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 