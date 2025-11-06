"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Trophy } from "lucide-react";
import edu from "../../images/Islamia-uni.jpg";

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and achievements in software engineering
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500 rounded-lg group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    Bachelor of Software Engineering
                  </CardTitle>
                  <p className="text-lg font-medium text-muted-foreground mt-1">
                    Islamia University, Bahawalpur
                  </p>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="mb-2">
                    In Progress
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Trophy className="h-4 w-4" />
                    <span className="font-semibold text-blue-600">GPA 3.6</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>2023 – 2027</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Bahawalpur, Pakistan</span>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing a Bachelor's degree in Software Engineering
                  with a focus on modern software development practices,
                  algorithms, and system design. Maintaining a strong academic
                  performance while gaining practical experience through
                  internships and personal projects.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Relevant Coursework</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Data Structures & Algorithms",
                        "Web Development",
                        "Database Management Systems",
                        "Software Engineering Principles",
                        "Object-Oriented Programming",
                        "Computer Networks",
                      ].map((course, index) => (
                        <motion.li
                          key={course}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          {course}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">
                      Academic Achievements
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Maintaining 3.6 GPA",
                        "Dean's List (Multiple Semesters)",
                        "Active in Programming Competitions",
                        "Member of Computer Science Society",
                        "Contributing to University Tech Projects",
                      ].map((achievement, index) => (
                        <motion.li
                          key={achievement}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + 0.3,
                          }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Education Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond formal education, I actively pursue online courses,
              certifications, and attend tech workshops to stay current with the
              latest industry trends and technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
