import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import ParticlesBg from './ParticlesBg'

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
}

const socialLinks = [
  { href: "https://github.com/VatVannaden", icon: FiGithub, label: "GitHub" },
  { href: "mailto:vatvannaden@gmail.com", icon: FiMail, label: "Email" },
  { href: "https://www.linkedin.com/in/vat-vannaden-194321371/", icon: FiLinkedin, label: "LinkedIn" }
];

// Projects data
export const projects: Project[] = [
  {
    id: 1,
    title: 'EstateHub',
    description: 'Modern real estate website built with React, TypeScript, Vite, and Tailwind CSS. Includes responsive design, navigation bar, hero section, and a contact form using EmailJS.',
    image: '/projects/EstateHub.png',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'EmailJS'],
    githubUrl: 'https://github.com/VatVannaden/real-estate',
    liveUrl: 'https://real-estate-tau-rosy.vercel.app',
    category: 'web',
  },
  {
    id: 2,
    title: 'Eventify',
    description: 'An event management/static site project (React + Vite)',
    image: '/projects/Eventify.png',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    githubUrl: 'https://github.com/theankou-coding/eventify',
    liveUrl: 'https://ems-static.vercel.app',
    category: 'web',
  },
  {
    id: 3,
    title: 'Lost and Found (Foundit)',
    description: 'Lost and Found application for RUPP events. Android application built using Android Studio.',
    image: '/projects/Foundit.png',
    technologies: ['Java', 'Android Studio', 'Figma'],
    githubUrl: 'https://github.com/sunkimsrun/Lost_and_Found',
    category: 'mobile',
  },
];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  // Use first 3 projects as featured (rotating display)
  const featuredProjects = projects.slice(0, 3);
  const currentFeatured = featuredProjects[currentFeaturedIndex];

  // Rotate
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentFeaturedIndex((prev) =>
  //       prev === featuredProjects.length - 1 ? 0 : prev + 1
  //     );
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, [featuredProjects.length]);

  // Filter all projects based on selected category
  const filteredProjects = projects.filter(
    (p) => selectedCategory === 'all' || p.category === selectedCategory
  );

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'desktop', name: 'Desktop Apps' },
  ];

  const handlePrevFeatured = () => {
    setCurrentFeaturedIndex((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    );
  };

  const handleNextFeatured = () => {
    setCurrentFeaturedIndex((prev) =>
      prev === featuredProjects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className='min-h-screenv bg-gradient-to-b from-black to-[#020130] text-white py-10 px-4 lg:px-20 h-screen overflow-y-scroll no-scrollbar'>
      <div className='fixed inset-0 pointer-events-none' style={{ zIndex: 0 }}>
    <ParticlesBg id='Background' />
  </div>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-start mt-10 lg:mt-20 mb-16'>
          <h1 className='text-4xl lg:text-5xl font-bold mb-4'>Projects</h1>
          <p className='text-lg text-gray-400'>
            Check out my recent projects and developments
          </p>
        </div>

        {/* Featured Project */}
        <section className='mb-20 relative'>
          <div className='flex items-center justify-between mb-8'>
            <div className='flex items-center'>
              <h2 className='text-2xl lg:text-3xl font-semibold'>
                Featured Project
              </h2>
            </div >
            <div className='flex gap-2 items-center'>
              <button
                onClick={handlePrevFeatured}
                className='px-3 py-1'
              >
                <FiArrowLeft className='w-5 h-5' />
              </button>
              <h4>Navigate</h4>
              <button
                onClick={handleNextFeatured}
                className='px-3 py-1'
              >
                <FiArrowRight className='w-5 h-5' />
              </button>
            </div>
          </div>

          <motion.div

            

            className='bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300'>
            <div className='flex flex-row'>
              <div className='lg:w-1/2 h-96 overflow-hidden rounded-lg'>
                <img
                  src={currentFeatured.image}
                  alt={currentFeatured.title}
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='lg:w-1/2 p-8 lg:p-12'>
                <h3 className='text-2xl lg:text-3xl font-bold mb-4'>
                  {currentFeatured.title}
                </h3>
                <p className='text-gray-400 mb-6 leading-relaxed'>
                  {currentFeatured.description}
                </p>

                <div className='mb-6'>
                  <h4 className='text-sm font-semibold text-blue-400 mb-3'>
                    Technologies
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {currentFeatured.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className='px-3 py-1 bg-gray-800 text-blue-300 rounded-full text-sm border border-gray-700'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='flex gap-4'>
                  <a
                    href={currentFeatured.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors'
                  >
                    <FiGithub className='w-4 h-4' />
                    Code
                  </a>
                  {currentFeatured.liveUrl && (
                    <a
                      href={currentFeatured.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors'
                    >
                      <FiExternalLink className='w-4 h-4' />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Filter Buttons */}
        <section className='mb-12'>
          <div className='flex items-center mb-8'>
            <div className='w-8 h-0.5 bg-blue-600 mr-3'></div>
            <h2 className='text-2xl lg:text-3xl font-semibold'>
              All Projects
            </h2>
          </div>

          <div className='flex items-center gap-4 mb-8'>
            <div className='flex flex-wrap gap-2'>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-colors relative z-10 ${selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10'>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className='bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105'
              >
                <div className='relative overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-48 object-cover transition-transform duration-300 hover:scale-110'
                  />
                </div>

                <div className='p-6'>
                  <h3 className='text-xl font-bold mb-3'>{project.title}</h3>
                  <p className='text-gray-400 text-sm mb-4 leading-relaxed'>
                    {project.description}
                  </p>

                  <div className='mb-4'>
                    <div className='flex flex-wrap gap-1'>
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className='px-2 py-1 bg-gray-800 text-blue-300 rounded text-xs border border-gray-700'
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className='px-2 py-1 text-gray-500 text-xs'>
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={`flex gap-3 ${!project.liveUrl ? 'justify-center' : ''}`}>
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`flex items-center gap-1 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors ${project.liveUrl ? 'flex-1' : 'px-6'
                        } justify-center`}
                    >
                      <FiGithub className='w-4 h-4' />
                      <span className='text-sm'>Code</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex-1 justify-center'
                      >
                        <FiExternalLink className='w-4 h-4' />
                        <span className='text-sm'>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className='text-center py-12'>
              <p className='text-gray-400 text-lg'>
                There is nothing here yet 😭🙏🏿
              </p>
            </div>
          )}
        </section>

        {/* Call to Action / Social Links */}
        <section className='text-center mt-20 py-16'>
          <h3 className='text-2xl lg:text-3xl font-bold mb-4'>
            Want to collaborate?
          </h3>
          <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>
            I'm always interested in working on exciting projects. Let's connect.
          </p>
          {/* Social Icons */}
                  <motion.div
                    className="flex justify-center space-x-6 mt-6 lg:mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                        rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                        className="hover:text-blue-400 transition-colors duration-300 relative z-10"
                        aria-label={social.label}
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Projects;