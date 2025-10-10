'use client'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, Lightbulb, LayoutGrid } from 'lucide-react'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const Section = ({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) => (
    <motion.section variants={itemVariants} className="mb-12">
        <h2 className="flex items-center text-3xl font-bold mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <Icon className="h-7 w-7 mr-3 text-zinc-500" />
            <span>{title}</span>
        </h2>
        {children}
    </motion.section>
);

const ExperienceItem = ({ title, company, duration, location, children }: { title: string; company: string; duration: string; location: string; children?: React.ReactNode }) => (
    <div className="relative pl-8 mb-8 last:mb-0">
        <div className="absolute left-0 top-1 h-full w-px bg-zinc-200 dark:bg-zinc-800"></div>
        <div className="absolute left-[-5px] top-1.5 h-3 w-3 rounded-full bg-zinc-400 dark:bg-zinc-600"></div>
        <h3 className="text-xl font-semibold gradient-text md:inline-block">{title}</h3>
        <p className="text-md text-zinc-600 dark:text-zinc-400">{company}</p>
        <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-500 mt-1">
            <span>{duration}</span>
            <span className="mx-2">•</span>
            <span>{location}</span>
        </div>
        {children && <div className="prose prose-zinc dark:prose-invert mt-2">{children}</div>}
    </div>
);

const EducationItem = ({ degree, university, duration, location }: { degree: string; university: string; duration: string; location: string }) => (
     <div className="relative pl-8 mb-8 last:mb-0">
        <div className="absolute left-0 top-1 h-full w-px bg-zinc-200 dark:bg-zinc-800"></div>
        <div className="absolute left-[-5px] top-1.5 h-3 w-3 rounded-full bg-zinc-400 dark:bg-zinc-600"></div>
        <h3 className="text-xl font-semibold gradient-text md:inline-block">{degree}</h3>
        <p className="text-md text-zinc-600 dark:text-zinc-400">{university}</p>
        <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-500 mt-1">
            <span>{duration}</span>
            <span className="mx-2">•</span>
            <span>{location}</span>
        </div>
    </div>
);

const SkillPill = ({ skill }: { skill: string }) => (
    <div className="px-3 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {skill}
    </div>
);

export default function ExperiencePage() {
  return (
    <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >
        <motion.div variants={itemVariants} className="text-left mb-12">
            <h1 className="font-serif text-5xl md:text-6xl tracking-tight text-zinc-900 dark:text-zinc-100">{`Where I've been and what I've done.`}</h1>
        </motion.div>

        <Section title="Skills" icon={Lightbulb}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-semibold text-lg mb-2">Design</h3>
                    <div className="flex flex-wrap gap-2">
                        <SkillPill skill="Figma" />
                        <SkillPill skill="Prototyping" />
                        <SkillPill skill="Wireframing" />
                        <SkillPill skill="User Research" />
                        <SkillPill skill="Usability Testing" />
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Development</h3>
                    <div className="flex flex-wrap gap-2">
                        <SkillPill skill="HTML" />
                        <SkillPill skill="CSS" />
                        <SkillPill skill="JavaScript" />
                        <SkillPill skill="React" />
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                        <SkillPill skill="Obsidian" />
                        <SkillPill skill="Jira" />
                        <SkillPill skill="Git" />
                        <SkillPill skill="Google Slides" />
                        <SkillPill skill="Google Forms" />
                    </div>
                </div>
            </div>
        </Section>

        <Section title="Experience" icon={Briefcase}>
            <ExperienceItem 
                title="Freelance UX Designer"
                company="Self-Employed"
                duration="2024 — Present"
                location="Remote"
            >
                <p>As a freelance designer, I've had the opportunity to work with a diverse range of clients on various projects. My work typically involves user research, creating wireframes and prototypes, and conducting usability tests to refine designs.</p>
            </ExperienceItem>
            <ExperienceItem 
                title="Guest Experience Associate"
                company="Target Corp."
                duration="2022 — Present"
                location="Tallahassee, FL"
            >
                <p>In this role, I focus on ensuring a positive experience for every guest. My responsibilities include addressing customer needs, resolving issues, and gathering feedback to improve in-store processes. This has given me valuable insights into customer behavior and satisfaction.</p>
            </ExperienceItem>
        </Section>

        <Section title="Education" icon={GraduationCap}>
            <EducationItem 
                degree="M.S. in Information Technology (User-Centered Design)"
                university="Florida State University"
                duration="Aug. 2025 — Dec. 2026"
                location="Tallahassee, FL"
            />
            <EducationItem 
                degree="B.S. in Management Information Systems"
                university="Florida State University"
                duration="Aug. 2023 — May 2025"
                location="Tallahassee, FL"
            />
        </Section>
        
        <Section title="Certifications" icon={Award}>
            <div className="space-y-4">
                <p className="text-lg text-zinc-800 dark:text-zinc-200">
                    {`Google UX Design Professional Certificate`} - <span className="text-zinc-500 dark:text-zinc-400 italic">{`In Progress`}</span>
                </p>
                <p className="text-lg text-zinc-800 dark:text-zinc-200">{`Microsoft Office Specialist: Excel Associate`} - <span className="text-zinc-500 dark:text-zinc-400 italic">{`Nov. 2023`}</span></p>
            </div>
        </Section>

        <Section title="Projects" icon={LayoutGrid}>
            <Link href="/" className="inline-flex items-center rounded-md border border-transparent bg-zinc-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus:ring-offset-zinc-800 no-underline">
                View all of my work here!
            </Link>
        </Section>
    </motion.div>
  )
}
