
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-white dark:bg-slate-900 transition-colors">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Professional Experience</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line */}
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-700 top-0"></div>

                            <div className={`md:flex items-center justify-between mb-8 group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="hidden md:block w-5/12"></div>

                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white dark:bg-slate-900 border-4 border-primary rounded-full z-10 flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 bg-primary rounded-full group-hover:scale-125 transition-transform"></div>
                                </div>

                                <div className="md:w-5/12">
                                    <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow">
                                        <div className="flex items-center gap-2 mb-2 text-primary">
                                            <Briefcase size={18} />
                                            <h3 className="font-bold text-lg">{exp.company}</h3>
                                        </div>
                                        <div className="flex items-center gap-2 mb-4 text-sm text-slate-500 dark:text-slate-400">
                                            <Calendar size={14} />
                                            <span>{exp.duration}</span>
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">{exp.role}</h4>
                                        <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.techStack.map((tech) => (
                                                <span key={tech} className="px-3 py-1 bg-white/50 dark:bg-black/20 text-xs font-medium text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-600">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
