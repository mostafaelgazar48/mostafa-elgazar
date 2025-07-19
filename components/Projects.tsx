'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Database, Server, Shield, Zap } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Geofencing Shipment Tracking System',
      description: 'Developed a dynamic and scalable geofencing service for automated shipment tracking. Hosted services for fetching real-time data from AVL devices and reflecting actions over shipments, making the system highly dynamic and scalable with advanced geolocation capabilities.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Geofencing', 'AVL Integration', 'Real-time Tracking', 'Microservices'],
      image: '/geofencing-system.jpg',
      github: 'https://github.com/mostafaelgazar48/geofencing-tracking',
      live: 'https://geofencing-tracking.com',
      category: 'Advanced Logistics'
    },
    {
      title: 'Digital Investment Platform',
      description: 'Developed a comprehensive digital investment platform enabling customers to make informed investments and secure better financial futures. Built seamless digital solutions with high-quality, consistent, and diversified investment options.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Investment APIs', 'Financial Data', 'Real-time Analytics', 'Security'],
      image: '/investment-platform.jpg',
      github: 'https://github.com/mostafaelgazar48/investment-platform',
      live: 'https://investment-platform.com',
      category: 'Financial Technology'
    },
    {
      title: 'Madar Logistics App',
      description: 'Developed backend services for a logistics management system, focusing on real-time tracking, cost optimization, and route planning. Implemented microservices architecture for scalability and performance improvement.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Microservices', 'REST APIs'],
      image: '/logistics-app.jpg',
      github: 'https://github.com/mostafaelgazar48/madar-logistics',
      live: 'https://madar-logistics.com',
      category: 'Logistics Management'
    },
    {
      title: 'E-commerce Website',
      description: 'Designed and developed an e-commerce website with full integration for shopping cart functionality, order processing, and payment systems.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'Payment Integration', 'REST APIs'],
      image: '/ecommerce.jpg',
      github: 'https://github.com/mostafaelgazar48/ecommerce-website',
      live: 'https://ecommerce-demo.com',
      category: 'E-commerce'
    },
    {
      title: 'Food Ordering App',
      description: 'Contributed to building APIs for a food ordering app, handling user orders and real-time delivery tracking. Designed and developed an admin dashboard for managing restaurant data, orders, and customer interactions.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Real-time APIs', 'Admin Dashboard', 'REST APIs'],
      image: '/food-app.jpg',
      github: 'https://github.com/mostafaelgazar48/food-ordering-app',
      live: 'https://food-app-demo.com',
      category: 'Food Delivery'
    },
    {
      title: 'Weather Forecasting System',
      description: 'IoT-based project responsible for predicting weather for the coming 3 days with 94% accuracy and providing data for current weather. Graduation project with high accuracy prediction.',
      technologies: ['IoT', 'Python', 'Machine Learning', 'Data Analysis', 'Weather APIs', 'Prediction Models'],
      image: '/weather-system.jpg',
      github: 'https://github.com/mostafaelgazar48/weather-forecasting',
      live: 'https://weather-demo.com',
      category: 'IoT & ML'
    },
    {
      title: 'CRM System',
      description: 'Built and maintained a comprehensive CRM system for efficient content management and workflow automation for internal teams.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'CRM', 'Workflow Automation', 'REST APIs'],
      image: '/crm-system.jpg',
      github: 'https://github.com/mostafaelgazar48/crm-system',
      live: 'https://crm-demo.com',
      category: 'Business Systems'
    },
    {
      title: 'Real-time Content Collaboration',
      description: 'Developed APIs for mobile applications focused on real-time content collaboration and editing, enhancing user experience and application responsiveness.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Real-time APIs', 'WebSocket', 'REST APIs'],
      image: '/collaboration.jpg',
      github: 'https://github.com/mostafaelgazar48/content-collaboration',
      live: 'https://collaboration-demo.com',
      category: 'Real-time Systems'
    }
  ]

  const categories = [
    'All', 'Advanced Logistics', 'Financial Technology', 'Logistics Management', 'E-commerce', 'Food Delivery', 
    'IoT & ML', 'Business Systems', 'Real-time Systems'
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects</h2>
          <p className="text-primary-light text-lg md:text-xl max-w-3xl mx-auto mb-8">
            User-centered development approach enhances productivity and drives revenue growth.
          </p>
          <h3 className="text-2xl md:text-3xl font-bold">
            User-centered Development Approach
          </h3>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              className="bg-primary-dark text-text px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary hover:text-background text-sm sm:text-base"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary-dark rounded-xl overflow-hidden card-hover"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <div className="text-center">
                  <Database className="w-12 h-12 text-primary-light mx-auto mb-2" />
                  <span className="text-text font-medium">{project.category}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-text text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-primary-light mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary text-text px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
               
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-primary text-lg px-8 py-4">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 