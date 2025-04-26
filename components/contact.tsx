"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Send, Check, Copy } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const emailRef = useRef(null)
  const email = "shuchismita.anwar@gmail.com"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(
      () => {
        setIsCopied(true)
        toast({
          title: "Email copied to clipboard!",
          description: email,
        })

        // Reset the copied state after 2 seconds
        setTimeout(() => {
          setIsCopied(false)
        }, 2000)
      },
      (err) => {
        console.error("Could not copy text: ", err)
        toast({
          title: "Failed to copy",
          description: "Please try again",
          variant: "destructive",
        })
      },
    )
  }

  return (
    <section id="contact" className="py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl text-pink-500 relative">Contact Me</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>

      <div className="mx-auto max-w-2xl">
        <Card className="border border-pink-200 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm overflow-hidden rounded-2xl">
          <CardHeader>
            <CardTitle className="text-pink-500">Get in Touch</CardTitle>
            <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-pink-200 bg-background/50 focus:border-pink-300 focus:ring-pink-300"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-pink-200 bg-background/50 focus:border-pink-300 focus:ring-pink-300"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-pink-200 bg-background/50 focus:border-pink-300 focus:ring-pink-300"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border-pink-200 bg-background/50 focus:border-pink-300 focus:ring-pink-300"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
              {isSubmitted && (
                <div className="rounded-md bg-green-50 p-4 dark:bg-green-900/20">
                  <p className="text-center text-sm font-medium text-green-800 dark:text-green-300">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2">
            <Mail className="h-5 w-5 text-pink-500" />
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 text-muted-foreground hover:text-pink-500 transition-colors group"
              aria-label="Copy email to clipboard"
              ref={emailRef}
            >
              <span>{email}</span>
              {isCopied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
