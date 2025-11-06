"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ExternalLink,
  Github,
  Chrome,
  ChevronRight,
  Zap,
  Target,
  Users,
  BarChart3,
} from "lucide-react";

const projects = [
  {
    title: "LinkedIn Automation Extension",
    description:
      "Chrome extension that automates LinkedIn connection requests with smart targeting and personalized messaging.",
    longDescription:
      "A sophisticated Chrome extension designed to streamline LinkedIn networking by automating connection requests. Features include smart user targeting, personalized message templates, connection limit management, and detailed analytics tracking.",
    icon: Users,
    color: "bg-blue-500",
    technologies: ["JavaScript", "Chrome API", "HTML/CSS", "LinkedIn API"],
    features: [
      "Automated connection requests",
      "Smart user targeting",
      "Personalized messaging",
      "Analytics dashboard",
      "Rate limiting protection",
    ],
    category: "Chrome Extension",
  },
  {
    title: "eBay Bidding Extension",
    description:
      "Automated eBay auction bidding system with customizable price ranges and smart bidding strategies.",
    longDescription:
      "An intelligent Chrome extension that automates eBay auction bidding with advanced features like price range setting, last-second bidding, bid history tracking, and multiple auction management.",
    icon: Target,
    color: "bg-green-500",
    technologies: ["JavaScript", "Chrome API", "eBay API", "Local Storage"],
    features: [
      "Automated bidding system",
      "Price range configuration",
      "Last-second bidding",
      "Bid history tracking",
      "Multiple auction support",
    ],
    category: "Chrome Extension",
  },
  {
    title: "Bolt.new Reference Extension",
    description:
      "Enhances prompt-to-website generation by providing visual references and screenshots for better context.",
    longDescription:
      "A powerful Chrome extension that enhances the Bolt.new experience by capturing screenshots, providing visual references, and improving prompt-to-website generation with contextual information and design inspirations.",
    icon: Zap,
    color: "bg-orange-500",
    technologies: ["JavaScript", "Chrome API", "Screenshot API", "UI/UX"],
    features: [
      "Screenshot capture",
      "Visual reference library",
      "Context-aware prompting",
      "Design inspiration gallery",
      "Enhanced user experience",
    ],
    category: "Chrome Extension",
  },
  {
    title: "Linkified - LinkedIn Automation",
    description:
      "Advanced LinkedIn automation tool with candidate filtering, messaging, and data extraction capabilities.",
    longDescription:
      "A comprehensive LinkedIn automation solution featuring advanced candidate filtering, automated messaging campaigns, data extraction and export, connection management, and detailed analytics for recruitment and networking professionals.",
    icon: BarChart3,
    color: "bg-purple-500",
    technologies: ["JavaScript", "Chrome API", "Data Processing", "CSV Export"],
    features: [
      "Advanced candidate filtering",
      "Automated messaging campaigns",
      "Data extraction & export",
      "Connection management",
      "Comprehensive analytics",
    ],
    category: "Chrome Extension",
  },
  {
    title: "Friend Convert - Facebook Chrome Extension",
    description:
      "Advanced Facebook automation tool with friend filtering, messaging, and data extraction capabilities.",
    longDescription:
      "A comprehensive Facebook automation solution featuring advanced friend filtering, automated messaging campaigns, data extraction and export, connection management, and detailed analytics for recruitment and networking professionals.",
    icon: ExternalLink,
    color: "bg-purple-500",
    technologies: [
      "JavaScript",
      "Chrome API",
      "Facebook API",
      "Data Processing",
      "CSV Export",
    ],
    features: [
      "Advanced friend filtering",
      "Automated messaging campaigns",
      "Data extraction & export",
      "Connection management",
      "Comprehensive analytics",
    ],
    category: "Chrome Extension",
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in Chrome extensions and web automation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer border-l-4 border-l-transparent hover:border-l-primary">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`p-3 ${project.color} rounded-lg group-hover:scale-110 transition-transform`}
                    >
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs mb-2">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group/btn"
                        >
                          View Details
                          <ChevronRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`p-2 ${project.color} rounded-lg`}>
                              <project.icon className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <DialogTitle className="text-xl">
                                {project.title}
                              </DialogTitle>
                              <Badge variant="outline" className="text-xs mt-1">
                                {project.category}
                              </Badge>
                            </div>
                          </div>
                          <DialogDescription className="text-base leading-relaxed">
                            {project.longDescription}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold mb-3">Key Features</h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center gap-2 text-sm text-muted-foreground"
                                >
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="p-2"
                        title="View on Chrome Store"
                      >
                        <Chrome className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="p-2"
                        title="View Source"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "15+", label: "Projects Completed" },
            { value: "2", label: "Years Experience" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "24/7", label: "Availability" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
