"use client";

import { profile } from "@/data/profile";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  const qualities = [
    {
      title: "Problem Solver",
      description:
        "I approach challenges analytically, breaking down complex problems into manageable solutions.",
    },
    {
      title: "Clean Code Advocate",
      description:
        "I'm passionate about writing maintainable, well-documented, and efficient code.",
    },
    {
      title: "Continuous Learner",
      description:
        "I stay updated with the latest technologies and best practices in web development.",
    },
    {
      title: "Team Collaborator",
      description:
        "I work effectively in teams, communicating ideas clearly and contributing to shared goals.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">{profile.about}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {qualities.map((quality, index) => (
            <motion.div
              key={quality.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{quality.title}</h3>
                  <p className="text-muted-foreground">{quality.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <Button asChild>
            <Link href={profile.resume} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}