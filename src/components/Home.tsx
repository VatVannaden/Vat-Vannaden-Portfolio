import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';


const Home = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-black to-[#020130] flex xl-flex-row flex-col-reverse items-center justify-center relative overflow-hidden">
      {/* Background Spline */}
      <div className="absolute bottom-[-5%] scale-120 z-1 sm:h-full sm:w-full h-full w-full">
        <Spline scene="https://prod.spline.design/ZS9QKnRC4D1fPmGJ/scene.splinecode" />
      </div>

      <div className="flex flex-col text-center px-4 max-w-xl z-10 sm:text-left">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{ fontFamily: "var(--font-primary)" }}
        >
          Vat Vannaden<span className="text-blue-500">.</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="text-lg md:text-2xl font-semibold text-gray-300 mb-6"
          style={{ fontFamily: "var(--font-primary)" }}
        >
          Developer & UI/UX Designer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="text-gray-400 mb-8"
          style={{ fontFamily: "var(--font-secondary)" }}
        >
          I’m a full-stack developer and UI/UX designer who loves turning ideas into practical, creative solutions. I’m always looking for opportunities to grow and expand my skills, and I focus on building innovative projects that blend great design with solid functionality. Let’s connect if you’re interested in collaborating or want to learn more about my work.
        </motion.p>

        <div className="flex flex-col sm:items-start items-center sm:justify-start justify-center w-full">
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 15,
              delay: 1,
              duration: 1,
            }}
            href="#"
            className="w-1/3 text-center border border-gray-400 px-6 py-3 text-gray-300 hover:bg-white hover:text-black transition duration-300 justi items-center"
            style={{ fontFamily: "var(--font-primary)" }}
          >
            View Full Resume
          </motion.a>

          {/* Social Icons */}
          <motion.div className="flex space-x-6 mt-10">
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              href="https://github.com/VatVannaden"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="w-6 h-6 hover:text-blue-600 transition duration-300" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              href="mailto:vatvannaden@gmail.com"
            >
              <FiMail className="w-6 h-6 hover:text-blue-600 transition duration-300" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              href="https://www.linkedin.com/in/vat-vannaden-194321371/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className="w-6 h-6 hover:text-blue-600 transition duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Page number overlay */}
      <div className="absolute bottom-6 right-6 text-gray-800 text-8xl font-bold opacity-10 select-none">
        01
      </div>
    </section>
  );
};

export default Home;
