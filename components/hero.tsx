"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin } from "lucide-react"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "AI & Quantum Machine Learning Researcher"
  const typingSpeed = 100

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    }
  }, [typedText])

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20 text-center">
      <div className="mb-6 cute-glow rounded-full p-2">
        <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          <span className="text-foreground">Shuchismita</span>{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Anwar
          </span>
        </h1>
      </div>

      <div className="mb-6 h-8 overflow-hidden">
        <p className="text-lg font-medium text-muted-foreground sm:text-xl">
          {typedText}
          <span className="ml-1 inline-block h-5 w-0.5 animate-blink bg-primary"></span>
        </p>
      </div>

      <p className="mb-8 max-w-2xl text-muted-foreground">
        Exploring the intersection of quantum computing and machine learning to solve complex problems. Specializing in
        computer vision, neural networks, and quantum algorithms.
      </p>

      <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
        <Button
          onClick={scrollToContact}
          className="btn-cute gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 animate-bounce"
        >
          Contact Me
        </Button>
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="icon"
            aria-label="GitHub"
            className="rounded-full border-primary/30 hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/shuchismita-anwar" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="LinkedIn"
            className="rounded-full border-primary/30 hover:bg-primary/10"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/shuchismita-anwar-034759218/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            const skillsSection = document.querySelector("#skills")
            if (skillsSection) {
              skillsSection.scrollIntoView({ behavior: "smooth" })
            }
          }}
          aria-label="Scroll down"
          className="rounded-full hover:bg-primary/10"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
