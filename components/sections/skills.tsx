"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, Settings, Lightbulb, Clock, Brain, Palette } from 'lucide-react'

const skillCategories = [
  {
    title: "Core Skills",
    icon: Code,
    color: "bg-blue-500",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "ReactJS", level: 95 },
      { name: "Next.js", level: 90 },
    ]
  },
  {
    title: "Tools",
    icon: Settings,
    color: "bg-teal-500",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Cursor AI", level: 80 },
      { name: "Git", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ]
  },
  {
    title: "Soft Skills",
    icon: Lightbulb,
    color: "bg-orange-500",
    skills: [
      { name: "Problem Solving", level: 95 },
      { name: "Logic Building", level: 90 },
      { name: "Creativity", level: 85 },
      { name: "Time Management", level: 88 },
    ]
  }
]

const skillIcons = {
  "Problem Solving": Brain,
  "Logic Building": Code,
  "Creativity": Palette,
  "Time Management": Clock,
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical and soft skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          {category.title === "Soft Skills" && skillIcons[skill.name as keyof typeof skillIcons] && (
                            <div className="h-5 w-5">
                              {React.createElement(skillIcons[skill.name as keyof typeof skillIcons], { className: "h-4 w-4 text-muted-foreground" })}
                            </div>
                          )}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className="relative h-2 bg-secondary rounded-full overflow-hidden"
                      >
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["HTML5", "CSS3", "SASS", "Bootstrap", "jQuery", "Node.js", "MongoDB", "Firebase", "Vercel", "Figma"].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge variant="outline" className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}