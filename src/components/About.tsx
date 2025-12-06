
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Brain, Code, Database, Rocket } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">About Me</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <div className="h-96 w-full">
                                <img
                                    src="/about-final.jpg"
                                    alt="About Me"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                            I'm {portfolioData.personalInfo.name}, a passionate <span className="text-primary">Data AI Developer</span>
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                            {portfolioData.personalInfo.summary}
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                            My focus lies in building intelligent systems that leverage Data Analytics and Artificial Intelligence to solve real-world problems.
                            I am particularly interested in RAG systems, Generative AI, and full-stack development.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <HighlightCard icon={<Brain className="text-primary" />} title="Artificial Intelligence" />
                            <HighlightCard icon={<Database className="text-secondary" />} title="Data Analytics" />
                            <HighlightCard icon={<Code className="text-green-500" />} title="Full Stack Dev" />
                            <HighlightCard icon={<Rocket className="text-purple-500" />} title="Problem Solving" />
                        </div>
                    </motion.div>
                </div>

                {/* Placement Coordinator Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="p-4 bg-primary/10 rounded-full text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Placement Coordinator</h4>
                            <p className="text-slate-600 dark:text-slate-300">
                                At Indira University, I coordinate placement activities, bridging communication between students and recruiters.
                                This role honed my leadership, communication, and management skills.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

const HighlightCard = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
        {icon}
        <span className="font-semibold text-slate-700 dark:text-slate-200 text-sm">{title}</span>
    </div>
);

export default About;
