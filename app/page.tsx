import Header from "@/components/header"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Research from "@/components/research"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background via-background/90 to-background">
      <ParticleBackground />
      <Header />
      <main className="container relative z-10 mx-auto px-4 py-8">
        <Hero />
        <Skills />
        <Projects />
        <Research />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
