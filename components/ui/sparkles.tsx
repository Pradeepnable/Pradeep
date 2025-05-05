"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const SparklesCore = ({
  id,
  background,
  minSize,
  maxSize,
  particleDensity,
  className,
  particleColor,
}: {
  id: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}) => {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number }>>([]);

  useEffect(() => {
    const createParticles = () => {
      const density = particleDensity || 50;
      const newParticles = [];
      
      for (let i = 0; i < density; i++) {
        newParticles.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * ((maxSize || 2) - (minSize || 0.5)) + (minSize || 0.5)
        });
      }
      
      setParticles(newParticles);
    };

    createParticles();
  }, [minSize, maxSize, particleDensity]);

  return (
    <div
      id={id}
      className={className}
      style={{
        background: background || "transparent",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          animate={{
            x: [
              `${particle.x}%`,
              `${particle.x + (Math.random() * 10 - 5)}%`
            ],
            y: [
              `${particle.y}%`,
              `${particle.y + (Math.random() * 10 - 5)}%`
            ]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            position: "absolute",
            width: particle.size,
            height: particle.size,
            borderRadius: "50%",
            backgroundColor: particleColor || "#ffffff",
            opacity: 0.2
          }}
        />
      ))}
    </div>
  );
};