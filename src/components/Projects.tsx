
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const filters = ['All', 'Python', 'React.js', 'AI/ML', 'Full Stack'];

    const filteredProjects = portfolioData.projects.filter(project => {
        if (filter === 'All') return true;
        if (filter === 'AI/ML') return project.techStack.some(t => ['Gemini', 'LangChain', 'HuggingFace'].some(api => t.includes(api)));
        if (filter === 'Full Stack') return project.techStack.includes('React.js') && (project.techStack.includes('Node.js') || project.techStack.includes('Flask'));
        return project.techStack.includes(filter);
    });

    return (
        <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Featured Projects</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === f
                                ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
                                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <motion.div layout className="grid md:grid-cols-2 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.title}
                                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all group"
                            >
                                <div className="h-48 bg-gray-200 dark:bg-gray-800 relative overflow-hidden group">
                                    <img
                                        src={project.techStack.includes('AI') || project.techStack.some(t => t.includes('Python')) ? "/project-ai.png" : "/project-web.png"}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20" title="View Code">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20" title="Live Demo">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.techStack.map((tech) => (
                                            <span key={tech} className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
