
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Education & Certifications</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-800 dark:text-white">
                            <GraduationCap className="text-primary" size={28} /> Education
                        </h3>
                        <div className="space-y-8">
                            {portfolioData.education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-colors"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-bold text-slate-800 dark:text-white">{edu.degree}</h4>
                                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{edu.year}</span>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 font-medium mb-1">{edu.institution}</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">Score: {edu.score}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications & Achievements Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-800 dark:text-white">
                            <Award className="text-secondary" size={28} /> Certifications & Achievements
                        </h3>
                        <div className="space-y-6">
                            {portfolioData.certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex gap-4 items-start"
                                >
                                    <div className="min-w-[40px] h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                        <Award size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 dark:text-white">{cert.title}</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">{cert.issuer} • {cert.date}</p>
                                    </div>
                                </motion.div>
                            ))}

                            <div className="h-px bg-slate-200 dark:bg-slate-800 my-6"></div>

                            {portfolioData.achievements.map((ach, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    className="flex gap-4 items-start"
                                >
                                    <div className="min-w-[40px] h-10 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-500">
                                        <Award size={20} />
                                    </div>
                                    <p className="font-medium text-slate-700 dark:text-slate-300">{ach}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
