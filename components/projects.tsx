"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowLeft, ArrowRight } from "lucide-react"

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0)
  const projectsPerPage = 3

  const projects = [
    {
      title: "Quantum Neural Network Framework",
      description:
        "A framework for implementing and training quantum neural networks for image classification tasks, combining PyTorch and Qiskit.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Quantum ML", "PyTorch", "Qiskit", "Computer Vision"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Medical Image Analysis with AI",
      description:
        "Deep learning system for automated diagnosis of medical conditions from X-ray and MRI images, achieving 94% accuracy.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["TensorFlow", "Computer Vision", "Healthcare", "CNN"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Quantum Optimization Solver",
      description:
        "Implementation of quantum algorithms for solving complex optimization problems in logistics and supply chain management.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Quantum Computing", "Optimization", "Python", "QUBO"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Conversational AI Assistant",
      description:
        "Natural language processing system capable of understanding context and maintaining coherent conversations across multiple domains.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["NLP", "Transformers", "BERT", "React"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Quantum Machine Learning Library",
      description:
        "Open-source library providing quantum versions of classical machine learning algorithms with improved performance for specific problem classes.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Quantum ML", "Python", "Open Source", "Documentation"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Real-time Object Detection System",
      description:
        "Edge-deployable computer vision system for real-time object detection and tracking using optimized neural network architectures.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Computer Vision", "YOLO", "Edge Computing", "TensorFlow Lite"],
      links: {
        demo: "#",
        github: "#",
      },
    },
  ]

  const totalPages = Math.ceil(projects.length / projectsPerPage)
  const currentProjects = projects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage)

  return (
    <section id="projects" className="py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Showcasing my work at the intersection of quantum computing and artificial intelligence
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentProjects.map((project, index) => (
          <Card key={index} className="card-cute overflow-hidden border border-primary/20 bg-card/50 backdrop-blur-sm">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-center">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 rounded-full"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="rounded-full border-primary/30 hover:bg-primary/10"
              >
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button
                size="sm"
                asChild
                className="btn-cute bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
              >
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="rounded-full border-primary/30 hover:bg-primary/10 disabled:opacity-50"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {currentPage + 1} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
            disabled={currentPage === totalPages - 1}
            className="rounded-full border-primary/30 hover:bg-primary/10 disabled:opacity-50"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </section>
  )
}
