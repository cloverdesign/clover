"use client"
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion"
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Reviews } from '@/components/reviews'
import { Who } from '@/components/who'
import { Services } from "@/components/services";

export default function Home() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll(
    {
      target: targetRef,
      offset: ["end end", "end start"],
    }
  );
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <main className="lg:space-y-[200px] space-y-[10px]">
      <Hero />
      <Who />
      <Projects />
      <Services />
      <Reviews />
    </main>
  )
}
