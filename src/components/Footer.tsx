
import { portfolioData } from '../data/portfolio';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-900 py-8 border-t border-slate-200 dark:border-slate-800 transition-colors">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <p className="text-slate-600 dark:text-slate-400">
                        © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6">
                    <FooterLink href={portfolioData.personalInfo.github} icon={<Github size={20} />} />
                    <FooterLink href={portfolioData.personalInfo.linkedin} icon={<Linkedin size={20} />} />
                    <FooterLink href={`mailto:${portfolioData.personalInfo.email}`} icon={<Mail size={20} />} />
                </div>
            </div>
        </footer>
    );
};

const FooterLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-500 dark:text-slate-500 hover:text-primary dark:hover:text-primary transition-colors"
    >
        {icon}
    </a>
);

export default Footer;
