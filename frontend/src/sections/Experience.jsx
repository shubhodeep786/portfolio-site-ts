import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { RESUME } from '@/data/resume';
import { SectionHeader } from '@/components/SectionHeader';
import { ProjectModal } from '@/components/ProjectModal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const EASE = [0.2, 0.8, 0.2, 1];

const COMPANIES = (() => {
  const map = new Map();
  RESUME.experience.forEach((entry) => {
    if (!map.has(entry.company)) {
      map.set(entry.company, { company: entry.company, location: entry.location, roles: [] });
    }
    map.get(entry.company).roles.push(entry);
  });
  return Array.from(map.values());
})();

function CompanyBlock({ company, index }) {
  const [modalProject, setModalProject] = useState(null);
  const projects = company.roles.flatMap((role) =>
    role.projects.map((project) => ({ ...project, role: role.role, period: role.period }))
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: EASE, delay: index * 0.1 }}
      className="mb-10 last:mb-0"
    >
      <div className="surface-card rounded-card mb-4 flex items-center gap-4 p-6">
        <span className="icon-badge">
          <Building2 className="h-5 w-5 text-ink-900" aria-hidden="true" />
        </span>
        <div>
          <p className="font-display text-lg font-semibold text-ink-900">{company.company}</p>
          <p className="font-mono text-xs text-ink-500">{company.location}</p>
        </div>
      </div>

      <Accordion type="single" collapsible defaultValue={projects[0]?.slug} className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <AccordionItem
            key={project.slug}
            value={project.slug}
            data-testid={`experience-item-${project.slug}`}
            className="surface-card rounded-card overflow-hidden border-none px-5"
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="flex w-full items-center justify-between gap-4 text-left">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-ink-300">{String(i + 1).padStart(2, '0')}.</span>
                  <div>
                    <p className="font-display text-base font-semibold text-ink-900">{project.name}</p>
                    <p className="font-mono text-xs text-ink-500">
                      {project.role} · {project.period}
                    </p>
                  </div>
                </div>
                <span className="glass-chip rounded-pill hidden px-3 py-1 font-mono text-[11px] text-ink-700 sm:inline-block">
                  {project.tag}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2 pl-9">
                {project.stack.map((tech) => (
                  <span key={tech} className="glass-chip rounded-pill px-2.5 py-1 font-mono text-[11px] text-ink-700">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="mt-4 flex flex-col gap-2 pl-9">
                {project.highlights.map((point, hi) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: EASE, delay: hi * 0.06 }}
                    className="text-sm leading-relaxed text-ink-700"
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setModalProject(project)}
                className="focus-neon link-underline ml-9 mt-4 inline-flex items-center gap-1 font-mono text-xs text-ink-900"
              >
                Read case study
              </button>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <ProjectModal project={modalProject} open={Boolean(modalProject)} onClose={() => setModalProject(null)} coverIndex={index} />
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36 lg:py-44" data-testid="section-experience">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="03 - Experience"
          title="Work Experience"
          description="Where I've built, and what shipped while I was there."
        />

        {COMPANIES.map((company, index) => (
          <CompanyBlock key={company.company} company={company} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
