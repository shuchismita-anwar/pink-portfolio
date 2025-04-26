import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function Research() {
  const publications = [
    {
      title: "Hybrid Quantum Convolutional Neural Network Multi-Class Classification with Discarded Qubit Optimization",
      // journal: "Journal of Quantum Machine Learning",
      year: 2024,
      abstract:
        "This ongoing research focuses on optimizing quantum resources for enhanced accuracy and computational efficiency in classification tasks. By implementing adaptive scaling and qubit discard mechanisms, the model aims to improve classification accuracy for complex medical images, such as those found in the MedMNIST dataset. The research examines hybrid architectures that combine classical and quantum components, exploring benefits in speed and resource efficiency, and seeks to establish benchmarks for quantum-enhanced image classification.",
      link: "#",
      tags: ["Quantum ML", "CNN", "Compter Vision"],
    },
    {
      title: "Medical Report Generation and Diagnosis using Multimodal Data and Large Language Models",
      // journal: "Quantum Information Processing",
      year: 2025,
      abstract:
        "This research focuses on generating medical reports by synthesizing multimodal data, including patient history, physician notes, and imaging data (e.g., X-rays, MRI scans). Using large language models with integrated image processing, the system aims to enhance diagnostic accuracy and offer data-driven treatment suggestions. The goal is to create an AI-powered assistant capable of aiding medical professionals by automatically producing detailed, contextually accurate reports, which may assist in early diagnosis and provide recommendations based on recognized patterns in historical data.",
      link: "#",
      tags: ["Multimodal", "Disease Classification", "Report Generation"],
    },
    // {
    //   title: "Quantum Reinforcement Learning for Autonomous Systems",
    //   journal: "IEEE Transactions on Quantum Engineering",
    //   year: 2021,
    //   abstract:
    //     "This research explores the application of quantum computing to reinforcement learning algorithms, demonstrating enhanced exploration capabilities and faster convergence in complex decision-making environments.",
    //   link: "#",
    //   tags: ["Reinforcement Learning", "Quantum Computing", "Autonomous Systems"],
    // },
  ]

  return (
    <section id="research" className="py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Research</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          My contributions to the academic community in quantum computing and artificial intelligence
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {publications.map((pub, index) => (
          <Card
            key={index}
            className="border border-primary/20 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {pub.year}
                </div>
              </div>
              <CardTitle className="line-clamp-2">{pub.title}</CardTitle>
              <CardDescription>{pub.journal}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground line-clamp-4">{pub.abstract}</p>
              <div className="flex flex-wrap gap-2">
                {pub.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-primary/30 bg-primary/5 text-primary hover:bg-primary/10"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full border-primary/30 hover:bg-primary/10" asChild>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Read Paper
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
