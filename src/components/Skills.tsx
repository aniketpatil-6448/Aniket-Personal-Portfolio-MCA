
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const skillIcons: Record<string, string> = {
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "NumPy": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    "Pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    "Matplotlib": "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
    "Seaborn": "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
    "LangChain": "https://seeklogo.com/images/L/langchain-logo-D0BF9CA695-seeklogo.com.png",
    "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "HTML5/CSS3": "https://skillicons.dev/icons?i=html,css",
    "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "Git & GitHub": "https://skillicons.dev/icons?i=git,github",
    "Jupyter Notebook": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                        Languages & Technologies
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {portfolioData.skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-primary/50 transition-all group flex flex-col items-center justify-center gap-4 hover:-translate-y-2 cursor-default"
                        >
                            <div className="h-16 w-16 flex items-center justify-center">
                                {skill.name === "HTML5/CSS3" || skill.name === "Git & GitHub" ? (
                                    <img src={skillIcons[skill.name]} alt={skill.name} className="h-12" />
                                ) : (
                                    <img src={skillIcons[skill.name] || `https://skillicons.dev/icons?i=${skill.name.toLowerCase()}`} alt={skill.name} className="h-14 w-14 object-contain group-hover:scale-110 transition-transform duration-300" onError={(e) => { (e.target as HTMLImageElement).src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" }} />
                                )}
                            </div>
                            <span className="text-slate-700 dark:text-slate-300 font-bold text-center group-hover:text-primary transition-colors">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
