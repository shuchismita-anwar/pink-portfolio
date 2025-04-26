"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const email = "shuchismita.anwar@gmail.com"
  const linkedin = "https://www.linkedin.com/in/shuchismita-anwar-034759218/"
  const github = "https://github.com/shuchismita-anwar"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(
      () => {
        // You could add a toast notification here if you want
        console.log("Email copied to clipboard")
      },
      (err) => {
        console.error("Could not copy text: ", err)
      },
    )
  }

  return (
    <footer className="border-t border-pink-200 bg-background/80 backdrop-blur-md py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">
              <span className="bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">Quantum</span>
              <span className="text-foreground">ML</span>
            </span>
          </div>

          <div className="flex gap-6">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-pink-500"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-pink-500"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <button
              onClick={copyToClipboard}
              className="text-muted-foreground transition-colors hover:text-pink-500"
              aria-label="Copy email to clipboard"
            >
              <Mail className="h-5 w-5" />
            </button>
          </div>

          <div className="text-sm text-muted-foreground">© {currentYear} Shuchismita Anwar. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
