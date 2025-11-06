"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Code, Calendar } from "lucide-react";
import picture from "../../images/picture.jpg";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and my current skills
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-teal-500/20 flex items-center justify-center text-8xl font-bold text-muted-foreground/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm" />
              {/* <span className="relative z-10">A</span> */}
              <img
                src={picture.src}
                alt="Profile Picture"
                className="relative w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              viewport={{ once: true }}
            >
              <Code className="h-8 w-8" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                I'm a passionate Software Engineer based in Bahawalpur, Pakistan
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Software Engineer based in Bahawalpur, Pakistan, with
                expertise in ReactJS, Next.js, TypeScript, Tailwind CSS, and
                JavaScript. Skilled in building user-friendly, efficient web
                applications with strong problem-solving and logic-building
                abilities.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-4 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Bahawalpur, Pakistan
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-teal-500">
                <CardContent className="p-4 flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-teal-500" />
                  <div>
                    <p className="font-medium">Experience</p>
                    <p className="text-sm text-muted-foreground">1.5 Years</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="pt-4">
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                working on side projects, or contributing to open-source
                initiatives. I believe in continuous learning and staying
                up-to-date with the latest industry trends.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
