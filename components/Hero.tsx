'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/mostafaelgazar48', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mostafa-elgazar-710077150/', label: 'LinkedIn' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-green-500 to-blue-600 rounded-full blur-3xl"
        />
        
        {/* Additional floating particles */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-400 rounded-full blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-purple-400 rounded-full blur-sm"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6"
            >
              <span className="text-white drop-shadow-lg">Backend</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
                Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 lg:mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              Experienced back-end developer with over 5 years of hands-on experience in creating robust solutions using Node.js, PostgreSQL, and MongoDB. 
              Strong problem-solving skills and passion for software development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.a 
                href="/mostafa-elgazar.pdf"
                download="Mostafa-Elgazar-CV.pdf"
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.92 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:from-blue-700 hover:to-purple-700 cursor-pointer text-base sm:text-lg transform hover:-translate-y-1"
              >
                <Download size={20} className="sm:w-6 sm:h-6" />
                Download CV
              </motion.a>
              <motion.button 
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.92 }}
                className="border-2 border-purple-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-purple-500/20 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
              >
                <Mail size={20} className="sm:w-6 sm:h-6" />
                Hire Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center lg:justify-start gap-4 sm:gap-5 mt-8 lg:mt-10"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.85 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full flex items-center justify-center text-white hover:text-blue-400 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg, #1f2937 0%, #374151 100%)`
                  }}
                >
                  <social.icon size={20} className="sm:w-6 sm:h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative">
              {/* Main Profile Container */}
              <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-104 lg:h-104">
                {/* Outer Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                
                {/* Main Circle */}
                <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-full flex items-center justify-center shadow-2xl">
                  {/* Inner Glow */}
                  <div className="absolute inset-4 bg-gradient-to-br from-gray-800 to-gray-600 rounded-full opacity-80"></div>
                  
                  {/* Profile Image Container */}
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-black rounded-full flex items-center justify-center overflow-hidden shadow-inner">
                    {/* Image with Border Glow */}
                    <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-88 lg:h-88 rounded-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-sm"></div>
                      <Image
                        src="/me.jpeg"
                        alt="Mostafa Elgazar"
                        width={320}
                        height={320}
                        className="relative w-full h-full object-cover rounded-full border-2 sm:border-4 border-gray-800 shadow-2xl"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-10 -right-10 sm:-top-14 sm:-right-14 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-xs font-bold">JS</span>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-10 -left-10 sm:-bottom-14 sm:-left-14 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-xs font-bold">Nodejs</span>
              </motion.div>
              
              <motion.div
                animate={{ 
                  x: [0, 10, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-1/2 -right-12 sm:-right-18 w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-xs font-bold">DB</span>
              </motion.div>
              
              {/* Additional Backend Skills */}
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -top-12 -left-12 w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-xs font-bold">Express</span>
              </motion.div>
              
              <motion.div
                animate={{ 
                  x: [0, -8, 0],
                  rotate: [0, 8, 0]
                }}
                transition={{ 
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="absolute top-1/4 -left-16 w-11 h-11 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-xs font-bold">MongoDB</span>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 8, 0],
                  rotate: [0, -8, 0]
                }}
                transition={{ 
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.5
                }}
                className="absolute bottom-1/4 -right-16 w-11 h-11 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-xs font-bold">PostgreSQL</span>
              </motion.div>
              
              <motion.div
                animate={{ 
                  x: [0, 8, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8
                }}
                className="absolute top-3/4 -right-14 w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-xs font-bold">Redis</span>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, -6, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2
                }}
                className="absolute -bottom-12 -right-12 w-11 h-11 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-xs font-bold">Docker</span>
              </motion.div>
              
              <motion.div
                animate={{ 
                  x: [0, -6, 0],
                  rotate: [0, 6, 0]
                }}
                transition={{ 
                  duration: 3.9,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.8
                }}
                className="absolute top-1/3 -left-14 w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-xs font-bold">AWS</span>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 6, 0],
                  rotate: [0, -6, 0]
                }}
                transition={{ 
                  duration: 4.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.8
                }}
                className="absolute bottom-1/3 -left-12 w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-xs font-bold">GraphQL</span>
              </motion.div>
              
              
              <motion.div
                animate={{ 
                  y: [0, -4, 0],
                  rotate: [0, -4, 0]
                }}
                transition={{ 
                  duration: 4.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3.2
                }}
                className="absolute bottom-1/6 -left-14 w-9 h-9 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-xs font-bold">REST</span>
              </motion.div>
              
              <motion.div
                animate={{ 
                  x: [0, 4, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.7
                }}
                className="absolute top-1/5 -right-20 w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-xs font-bold">Geofencing</span>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 5, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 4.0,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.3
                }}
                className="absolute bottom-1/4 -right-18 w-9 h-9 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-xs font-bold">FinTech</span>
              </motion.div>
              
              {/* Particle Effects */}
              <div className="absolute top-0 left-0 w-full h-full">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-8 right-8 w-1 h-1 bg-purple-400 rounded-full"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{ 
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-green-400 rounded-full"
                />
              </div>
              
              {/* Name and Title with Enhanced Styling */}
              <motion.div // make this div in the center mobile  sm 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-24 sm:-bottom-28  left-1/8 transform -translate-x-1/2 text-center w-full px-4 flex flex-col items-center"
              >
                <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-2 drop-shadow-lg text-center w-full">
                  Mostafa Elgazar
                </h3>
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-sm sm:text-md font-semibold text-center w-full">
                  Senior Backend Developer
                </div>
                <div className="flex justify-center space-x-2 mt-2 sm:mt-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-pulse delay-300"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse delay-600"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 