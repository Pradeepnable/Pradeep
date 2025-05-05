"use client";

import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "@/components/ui/text-reveal-card";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { SparklesCore } from "@/components/ui/sparkles";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center relative pt-20"
    >
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#8B5CF6"
        />
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center z-10">
        <div className="rounded-[22px] p-4 sm:p-10 ">
          <div className="hero-content">
            <TextRevealCard
              text="Welcome to my portfolio"
              revealText="Explore my work"
              className="w-full"
            >
              <TextRevealCardTitle>
                Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                <TypeAnimation
                  sequence={[
                    profile.title,
                    1000,
                    'React Developer',
                    1000,
                    'Node.js Expert',
                    1000,
                    profile.title,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-white text-2xl md:text-3xl font-medium"
                />
              </TextRevealCardDescription>
            </TextRevealCard>

            <p className="hero-content text-lg max-w-2xl mx-auto mb-8 mt-4">
              {profile.tagline}
            </p>
          </div>

          <div className="hero-content flex flex-wrap justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
            >
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gradient-border hover:text-primary transition-colors duration-300"
            >
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>

          <div className="hero-content flex justify-center space-x-6">
            {[
              { href: profile.github, icon: Github, label: "GitHub" },
              { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: profile.twitter, icon: Twitter, label: "Twitter" },
              { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="w-6 h-6" />
                  <span className="sr-only">{label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}