"use client"

import { SmoothScroll } from '@/components/smooth-scroll'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { SkillsSection } from '@/components/sections/skills'
import { ExperienceSection } from '@/components/sections/experience'
import { ProjectsSection } from '@/components/sections/projects'
import { EducationSection } from '@/components/sections/education'
import { ContactSection } from '@/components/sections/contact'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
        <Toaster />
      </div>
    </SmoothScroll>
  )
}