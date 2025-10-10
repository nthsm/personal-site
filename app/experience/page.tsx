'use client'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, Lightbulb } from 'lucide-react'

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
        {/* FIX: Removed 'not-prose' */}
        <h2 className="flex items-center text-3xl font-bold mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <Icon className="h-7 w-7 mr-3 text-zinc-500" />
            <span className="gradient-text">{title}</span>
        </h2>
        {children}
    </motion.section>
);

const ExperienceItem = ({ title, company, duration, location }: { title: string; company: string; duration: string; location: string }) => (
    <div className="relative pl-8 mb-8 last:mb-0">
        <div className="absolute left-0 top-1 h-full w-px bg-zinc-200 dark:bg-zinc-800"></div>
        <div className="absolute left-[-5px] top-1.5 h-3 w-3 rounded-full bg-zinc-400 dark:bg-zinc-600"></div>
        {/* FIX: Removed 'not-prose' */}
        <h3 className="text-xl font-semibold gradient-text">{title}</h3>
        <p className="text-md text-zinc-600 dark:text-zinc-400">{company}</p>
        <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-500 mt-1">
            <span>{duration}</span>
            <span className="mx-2">•</span>
            <span>{location}</span>
        </div>
    </div>
);

const EducationItem = ({ degree, university, duration, location }: { degree: string; university: string; duration: string; location: string }) => (
     <div className="relative pl-8 mb-8 last:mb-0">
        <div className="absolute left-0 top-1 h-full w-px bg-zinc-200 dark:bg-zinc-800"></div>
        <div className="absolute left-[-5px] top-1.5 h-3 w-3 rounded-full bg-zinc-400 dark:bg-zinc-600"></div>
        {/* FIX: Removed 'not-prose' */}
        <h3 className="text-xl font-semibold gradient-text">{degree}</h3>
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
        className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-lg"
    >
        <motion.div variants={itemVariants} className="text-center mb-12">
            {/* FIX: Removed 'not-prose' */}
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-2 gradient-text leading-normal">{`Nathan Smith`}</h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">{`UX Designer with a passion for building intuitive, seamless, and user-centered products.`}</p>
        </motion.div>

        <Section title="Skills" icon={Lightbulb}>
            <div className="flex flex-wrap gap-2">
                <SkillPill skill="Figma" />
                <SkillPill skill="Prototyping" />
                <SkillPill skill="Wireframes" />
            </div>
        </Section>

        <Section title="Experience" icon={Briefcase}>
            <ExperienceItem 
                title="UX Intern"
                company="FSU IT Services"
                duration="2026 — Present"
                location="Tallahassee, FL"
            />
            <ExperienceItem 
                title="Freelance UX Designer"
                company="Self-Employed"
                duration="2024 — Present"
                location="Remote"
            />
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
                <p className="text-lg text-zinc-800 dark:text-zinc-200">{`Google UX Design Professional Certificate`} - <span className="text-zinc-500 dark:text-zinc-400 italic">{`In Progress`}</span></p>
                <p className="text-lg text-zinc-800 dark:text-zinc-200">{`Microsoft Office Specialist: Excel Associate`} - <span className="text-zinc-500 dark:text-zinc-400 italic">{`Nov. 2023`}</span></p>
            </div>
        </Section>
    </motion.div>
  )
}
