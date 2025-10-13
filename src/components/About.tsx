import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Face from '../assets/face.jpg';
import Spotify from '../assets/icons/spotify.png';
import Manga from '../assets/icons/comic.png';
import Game from '../assets/icons/game.png';
import Movie from '../assets/icons/film-reel.png';
import RUPP from '../assets/icons/rupp_logo.png';
import FirstMay from '../assets/icons/1st_may.png';
import ParticlesBg from './ParticlesBg'

const About = () => {
    const interests = [
        { name: "Music", icon: Spotify },
        { name: "Manga", icon: Manga },
        { name: "Game", icon: Game },
        { name: "Movie", icon: Movie },
    ];

    const navigationItems = [
        { text: 'I n t r o d u c t i o n', href: '#introduction', delay: 0.5 },
        { text: 'S k i l l s', href: '#skills', delay: 0.7 },
        { text: 'E d u c a t i o n', href: '#education', delay: 0.9 },
    ];

    const programmingSkills = [
        { name: "JavaScript", level: "50%" },
        { name: "Python", level: "75%" },
        { name: "Java", level: "80%" },
        { name: "C++", level: "75%" },
        { name: "TypeScript", level: "70%" },
        { name: "PHP", level: "40%" }
    ];

    const frontendTech = ["HTML", "CSS", "Javascript", "React", "Tailwind CSS", "Bootstrap"];
    const backendTech = ["Laravel"];
    const designSkills = [
        { name: "Figma", level: "92%" },
        { name: "Adobe XD", level: "65%" },
        { name: "Sketch", level: "75%" },
        { name: "Photoshop", level: "60%" }
    ];
    const databaseCloudTech = ["MySQL", "Firebase", "Docker", "Git"];

    const personalDetails = [
        { label: "Age:", value: "20" },
        { label: "Birthdate:", value: "28-11-2004" },
        { label: "Phone:", value: "096-926-632-9" },
        { label: "Email:", value: "vatvannaden@gmail.com" },
        { label: "Address:", value: "Street 19MC, Phnom Penh 12352" }
    ];

    const socialLinks = [
        { href: "https://github.com/VatVannaden", icon: FiGithub, label: "GitHub" },
        { href: "mailto:vatvannaden@gmail.com", icon: FiMail, label: "Email" },
        { href: "https://www.linkedin.com/in/vat-vannaden-194321371/", icon: FiLinkedin, label: "LinkedIn" }
    ];


    return (
        <div className="h-screen bg-gradient-to-b from-black to-[#020130] text-white overflow-y-hidden ">
            <div className="flex flex-col lg:flex-row w-full h-screen justify-center py-8 lg:py-20 px-4 lg:px-20 lg:space-x-20 space-y-8 lg:space-y-0">
                <div className='fixed inset-0 pointer-events-none' style={{ zIndex: 0 }}>
                    <ParticlesBg id='Background' />
                </div>
                {/* Left section - Navigation */}
                <section className="flex flex-col justify-start lg:justify-center w-full lg:w-auto lg:min-w-110 space-y-6">
                    <motion.h1
                        className="text-4xl lg:text-5xl font-bold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        ABOUT ME
                    </motion.h1>

                    <motion.p
                        className='text-gray-400 text-sm lg:text-base w-full'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        I am a senior student at Royale University of Phnom Penh
                        <br />
                        in the field of Information Technology Engineering.
                    </motion.p>

                    {/* Navigation */}
                    <nav className="w-fit my-6 lg:my-10 flex flex-col space-y-3 relative z-10">
                        {navigationItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const section = document.querySelector(item.href) as HTMLElement;
                                    const scrollArea = document.querySelector('section.overflow-y-auto') as HTMLElement;

                                    if (section && scrollArea) {
                                        scrollArea.scrollTo({
                                            top: section.offsetTop - 80,
                                            behavior: 'smooth',
                                        });
                                    }
                                }}

                                className="flex items-center text-lg lg:text-2xl font-light hover:text-blue-400 transition-colors" >
                                <span className="w-6 lg:w-8 h-0.5 bg-blue-600 mr-3" />
                                {item.text}
                            </button>
                        ))}
                    </nav>


                    {/* Social Icons */}
                    <motion.div
                        className="flex space-x-6 mt-6 lg:mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                                rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
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

                {/* Right section - Content */}
                <section className="w-full h-auto lg:h-screen overflow-y-auto no-scrollbar space-y-0 pb-10 lg:pb-20">

                    {/* Introduction Section */}
                    <motion.div
                        className="flex flex-col space-y-6 pt-0 lg:pt-10"
                        id='introduction'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {/* Header */}
                        <header className="flex items-center space-x-2 text-xl lg:text-2xl font-bold">
                            <span className="inline-block w-3 h-3 rounded-full bg-white"></span>
                            <span>INTRODUCTION</span>
                        </header>

                        <div className='flex gap-3'>
                            {/* Vertical line */}
                            <div className="border-l-2 border-gray-300 ml-[5px]"></div>

                            <div className="flex-1">
                                {/* Profile Section */}
                                <section className="flex flex-col lg:flex-row p-4 space-y-4 lg:space-y-0 lg:space-x-6">
                                    <div className="w-full lg:w-auto flex justify-center lg:justify-start">
                                        <div className="w-48 h-48 lg:w-56 lg:h-56 overflow-hidden rounded-lg relative z-10">
                                            <img src={Face} alt="Profile" className="w-full h-full object-cover object-top" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4 flex-1">
                                        <h2 className="text-2xl lg:text-3xl font-semibold text-center lg:text-left">VAT VANNADEN</h2>
                                        <p className="font-light text-gray-400 text-center lg:text-left">Developer & UX/UI Designer</p>
                                        <p className="font-light text-gray-400 text-sm lg:text-base leading-relaxed">
                                            I'm a full-stack developer and UX/UI designer who loves turning ideas into
                                            practical, creative solutions. I'm always looking for opportunities to grow and
                                            expand my skills, and I focus on building innovative projects that blend great
                                            design with solid functionality. Let's connect if you're interested in
                                            collaborating or want to learn more about my work.
                                        </p>
                                    </div>
                                </section>

                                {/* Personal Details and Interests */}
                                <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 mt-8'>
                                    {/* Personal Details */}
                                    <section className='p-4 flex-1'>
                                        <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
                                        <div className="space-y-2">
                                            {personalDetails.map((detail, index) => (
                                                <div key={index} className="flex flex-col sm:flex-row text-sm">
                                                    <span className="font-medium text-gray-300 w-20 sm:w-24">{detail.label}</span>
                                                    <span className="text-gray-400">{detail.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Interests */}
                                    <section className='p-4 flex-1'>
                                        <h3 className="text-xl font-semibold mb-4">Interests</h3>
                                        <div className="grid grid-cols-2 gap-3">
                                            {interests.map((item) => (
                                                <motion.div
                                                    key={item.name}
                                                    className="border border-gray-600 rounded-lg flex flex-col items-center p-3 hover:border-blue-500 transition-colors duration-300"
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <img src={item.icon} className="w-6 h-6 mb-2" alt={item.name} />
                                                    <p className="text-sm">{item.name}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div
                        className="flex flex-col space-y-6 pt-6"
                        id='skills'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {/* Header */}
                        <header className="flex items-center space-x-2 text-xl lg:text-2xl font-bold">
                            <span className="inline-block w-3 h-3 rounded-full bg-white"></span>
                            <span>SKILLS</span>
                        </header>

                        <div className='flex gap-3'>
                            {/* Vertical line */}
                            <div className="border-l-2 border-gray-300 ml-[5px]"></div>

                            <div className="flex-1">
                                <section className="p-4 space-y-8">
                                    {/* Programming Languages */}
                                    <div>
                                        <h4 className="text-lg font-medium mb-4 text-blue-400">Programming Languages</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {programmingSkills.map((skill) => (
                                                <div key={skill.name} className="flex flex-col">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-sm font-medium">{skill.name}</span>
                                                        <span className="text-xs text-gray-400">{skill.level}</span>
                                                    </div>
                                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                                        <motion.div
                                                            className="bg-blue-500 h-2 rounded-full"
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: skill.level }}
                                                            transition={{ duration: 1, delay: 0.2 }}
                                                            viewport={{ once: true }}
                                                        ></motion.div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Frameworks & Tools */}
                                    <div>
                                        <h4 className="text-lg font-medium mb-4 text-blue-400">Frameworks & Tools</h4>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <div>
                                                <h5 className="font-medium mb-3">Frontend</h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {frontendTech.map((tech) => (
                                                        <span key={tech} className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-full text-sm transition-colors duration-200">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="font-medium mb-3">Backend</h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {backendTech.map((tech) => (
                                                        <span key={tech} className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-full text-sm transition-colors duration-200">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Design & Database Tools */}
                                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                                        {/* Design Tools */}
                                        <div className="flex-1">
                                            <h4 className="text-lg font-medium mb-4 text-blue-400">Design Tools</h4>
                                            <div className="space-y-3">
                                                {designSkills.map((skill) => (
                                                    <div key={skill.name} className="flex flex-col">
                                                        <div className="flex justify-between items-center mb-1">
                                                            <span className="text-sm font-medium">{skill.name}</span>
                                                            <span className="text-xs text-gray-400">{skill.level}</span>
                                                        </div>
                                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                                            <motion.div
                                                                className="bg-blue-500 h-2 rounded-full"
                                                                initial={{ width: 0 }}
                                                                whileInView={{ width: skill.level }}
                                                                transition={{ duration: 1, delay: 0.3 }}
                                                                viewport={{ once: true }}
                                                            ></motion.div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Database & Cloud */}
                                        <div className="flex-1">
                                            <h4 className="text-lg font-medium mb-4 text-blue-400">Database & Cloud</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {databaseCloudTech.map((tech) => (
                                                    <span key={tech} className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-full text-sm transition-colors duration-200">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education Section */}
                    <motion.div
                        className="flex flex-col space-y-6 pt-6 pb-39"
                        id='education'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {/* Header */}
                        <header className="flex items-center space-x-2 text-xl lg:text-2xl font-bold">
                            <span className="inline-block w-3 h-3 rounded-full bg-white"></span>
                            <span>EDUCATION</span>
                        </header>

                        <div className='flex gap-3'>
                            {/* Vertical line */}
                            <div className="border-l-2 border-gray-300 ml-[5px]"></div>

                            <div className="flex-1">
                                <div className='p-4 space-y-10' >
                                    <div className='flex flex-col lg:flex-row gap-6 items-start'>
                                        <div className="w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0">
                                            <img src={RUPP} alt="RUPP Logo" className='w-full h-full object-contain relative z-10' />
                                        </div>

                                        <div className='flex flex-col gap-3 flex-1'>
                                            <h1 className='text-xl lg:text-2xl font-bold'>Royal University of Phnom Penh</h1>
                                            <h2 className='text-gray-400 text-sm lg:text-base'>
                                                Expected Graduation: <span className='text-white font-medium'>2026</span>
                                            </h2>
                                            <p className='text-gray-300 text-sm lg:text-base leading-relaxed'>
                                                Currently pursuing a Bachelor's degree in Information Technology Engineering, where I've built a strong foundation in software development, front-end design, and user-centered problem solving. I'm passionate about turning ideas into real-world digital solutions that are both functional and visually engaging.
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex flex-col lg:flex-row gap-6 items-start'>
                                        <div className="w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0">
                                            <img src={FirstMay} alt="First May High school" className='w-full h-full object-cover rounded-full relative z-10' />
                                        </div>

                                        <div className='flex flex-col gap-3 flex-1'>
                                            <h1 className='text-xl lg:text-2xl font-bold'>First May High School</h1>
                                            <h2 className='text-gray-400 text-sm lg:text-base'>
                                                Graduated: <span className='text-white font-medium'>2022</span>
                                            </h2>
                                            <p className='text-gray-300 text-sm lg:text-base leading-relaxed'>
                                                Completed high school education with a focus on science and mathematics, which laid the groundwork for my journey into technology and engineering. This experience helped develop my analytical thinking and problem-solving skills that I continue to apply in my current studies.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default About;