
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-950 pt-16">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 to-slate-50/50 dark:from-slate-950/90 dark:to-slate-950/50 z-10"></div>
                <img
                    src="/hero-bg.png"
                    alt="AI Background"
                    className="w-full h-full object-cover opacity-20 dark:opacity-30"
                />
            </div>

            <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-sm font-semibold text-primary mb-6">
                        Available for Internships
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white leading-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{portfolioData.personalInfo.name}</span>
                    </h1>
                    <div className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 h-16 sm:h-auto">
                        I am a{' '}
                        <TypeAnimation
                            sequence={[
                                'Data Science Enthusiast',
                                2000,
                                'AI & ML Developer',
                                2000,
                                'Python Developer',
                                2000,
                                'RAG Systems Engineer',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg max-w-lg mx-auto md:mx-0">
                        {portfolioData.personalInfo.role.split('|').join(' • ')} based in {portfolioData.personalInfo.location}.
                        Building intelligent systems with Data & AI.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 rounded-full bg-primary hover:bg-secondary text-white font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-primary/25"
                        >
                            View Projects <ArrowRight size={20} />
                        </Link>
                        <a
                            href="#"
                            className="px-8 py-3 rounded-full border-2 border-slate-300 dark:border-slate-700 hover:border-primary text-slate-700 dark:text-white font-semibold transition-all hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center gap-2"
                        >
                            Download Resume <Download size={20} />
                        </a>
                    </div>

                    <div className="mt-12 flex gap-6 justify-center md:justify-start">
                        <SocialLink href={portfolioData.personalInfo.github} icon={<Github size={24} />} />
                        <SocialLink href={portfolioData.personalInfo.linkedin} icon={<Linkedin size={24} />} />
                        <SocialLink href={`mailto:${portfolioData.personalInfo.email}`} icon={<Mail size={24} />} />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 blur-2xl animate-pulse"></div>
                        <img
                            src="/hero-new.png"
                            alt="Aniket Patil"
                            className="rounded-full w-full h-full object-cover object-top border-4 border-white dark:border-slate-800 shadow-2xl relative z-10"
                        />

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl z-20"
                        >
                            <span className="text-2xl">🤖</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                            className="absolute bottom-10 -left-10 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl z-20"
                        >
                            <span className="text-2xl">⚡</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all hover:-translate-y-1"
    >
        {icon}
    </a>
)

export default Hero;
