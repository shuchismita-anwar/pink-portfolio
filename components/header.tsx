"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()
  const { theme, setTheme } = useTheme()

  const navItems = [
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/70 backdrop-blur-md border-b border-primary/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-bold tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Go to top"
          >
            <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">AI &</span>
            <span className="text-foreground"> Quantum</span>
          </button>
        </div>

        {isMobile ? (
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-primary/10"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-primary/10"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="flex gap-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </button>
              ))}
            </nav>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-primary/10"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        )}

        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute left-0 top-16 z-50 w-full bg-background/95 backdrop-blur-md shadow-lg border-b border-primary/10">
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
