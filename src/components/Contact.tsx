import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import ParticlesBg from './ParticlesBg'

const socialLinks = [
  { href: "https://github.com/VatVannaden", icon: FiGithub, label: "GitHub" },
  { href: "mailto:vatvannaden@gmail.com", icon: FiMail, label: "Email" },
  { href: "https://www.linkedin.com/in/vat-vannaden-194321371/", icon: FiLinkedin, label: "LinkedIn" }
];

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_upyn189',
          'template_i9oyuf3',
          form.current,
          'vYEOVJ3RqP71JVAtR'
        )
        .then(
          () => {
            toast.success("Message sent successfully!");
            form.current?.reset();
          },
          () => {
            toast.error("Failed to send message.");
          }
        );
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-black to-[#020130] flex flex-col items-center justify-center ">
      <div className='fixed inset-0 pointer-events-none' style={{ zIndex: 0 }}>
    <ParticlesBg id='Background' />
  </div>
      {/* Header and Icons */}
      <div className="text-center mt-10 lg:mt-20">
        <h1 className="text-4xl lg:text-5xl font-bold">CONTACT</h1>
        <p className="mt-2 text-lg text-gray-600">Reach out & collaborate with me</p>

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
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-1/2 max-w-xl px-4 mt-10"
      >
        <form ref={form} onSubmit={sendEmail} className="text-gray-600">
          <div className="flex flex-wrap gap-4">
            <div className="w-full text-left">
              Your Name
              <input
                className="w-full border border-gray-300 rounded py-2 px-4 mt-2 relative z-10"
                type="text"
                name="Name"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="w-full text-left">
              Your Email
              <input
                className="w-full border border-gray-300 rounded py-2 px-4 mt-2 relative z-10"
                type="email"
                name="Email"
                placeholder="Enter Your Email"
                required
              />
            </div>
          </div>
          <div className="my-6 text-left">
            Message
            <textarea
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-30 resize-none relative z-10"
              name="Message"
              placeholder="Enter Message"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-12 mb-10 rounded hover:bg-blue-700 transition relative z-10"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
