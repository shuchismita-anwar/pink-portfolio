"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Cpu, Network, Heart } from "lucide-react"

export default function Skills() {
  const [activeTab, setActiveTab] = useState("programming")

  const skillCategories = [
    {
      id: "programming",
      name: "Programming",
      icon: <Code className="h-5 w-5" />,
      skills: [
        {
          title: "Programming Languages",
          items: ["Python", "C", "C++", "Java", "JavaScript (with strong understanding of OOP)"],
        },
        {
          title: "Web Technologies",
          items: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Nest.js", "Next.js", "Tailwind CSS"],
        },
        {
          title: "Database Systems",
          items: ["MySQL", "MongoDB", "SQL"],
        },
        {
          title: "DevOps & Version Control",
          items: ["Git", "GitHub", "GitLab"],
        },
      ],
    },
    {
      id: "ai",
      name: "AI & ML",
      icon: <Brain className="h-5 w-5" />,
      skills: [
        {
          title: "Data Science & Machine Learning",
          items: ["TensorFlow", "PyTorch", "Keras", "scikit-learn", "NumPy", "Pandas"],
        },
        {
          title: "Specialized Area",
          items: ["Quantum Machine Learning", "Image Processing", "Natural Language Processing"],
        },
        {
          title: "Advanced Machine Learning Techniques",
          items: [
            "Reinforcement Learning",
            "Transfer Learning",
            "Meta-Learning",
            "Generative Adversarial Networks",
            "Transformer Models",
          ],
        },
        {
          title: "Computer Vision Frameworks & Tools",
          items: ["OpenCV", "YOLO", "Fast R-CNN"],
        },
        {
          title: "Computer Vision Techniques",
          items: ["Image Segmentation", "Object Detection", "Image Recognition"],
        },
        {
          title: "Natural Language Processing",
          items: ["BERT", "GPT", "Word2Vec", "Transformer Models", "Quantum NLP"],
        },
      ],
    },
    {
      id: "quantum",
      name: "Quantum",
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        {
          title: "Quantum Computing",
          items: ["Pennylane", "Qiskit", "Quantum Algorithms", "Quantum Circuits", "Quantum Gates"],
        },
        {
          title: "Quantum Applications",
          items: ["Quantum Machine Learning", "Quantum Simulation", "Quantum Optimization", "Quantum Error Correction"],
        },
      ],
    },
    {
      id: "tools",
      name: "Tools",
      icon: <Network className="h-5 w-5" />,
      skills: [
        {
          title: "APIs and Integration",
          items: ["RESTful APIs", "JSON", "XML"],
        },
        {
          title: "Cloud Technologies",
          items: ["Docker", "Kubernetes"],
        },
        {
          title: "Hardware Programming & Embedded Systems",
          items: ["Raspberry Pi", "Arduino"],
        },
        {
          title: "Other Tools & Technologies",
          items: ["Visual Studio Code", "PyCharm", "Jupyter Notebooks", "Bash", "LaTeX"],
        },
        {
          title: "Operating Systems",
          items: ["Linux (Ubuntu)", "Windows"],
        },
      ],
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  }

  // Decorative elements
  const CoquetteDecorations = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
      setIsMounted(true)
    }, [])

    if (!isMounted) {
      return <div className="absolute inset-0 overflow-hidden pointer-events-none" />
    }

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating hearts */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-pink-300"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              y: [null, "-15%"],
              opacity: [0, 0.7, 0],
              scale: [0, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              delay: i * 1.2,
            }}
          >
            <Heart className="h-3 w-3 fill-pink-300" />
          </motion.div>
        ))}

        {/* Decorative bows */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`bow-${i}`}
            className="absolute"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: 0,
              rotate: Math.random() * 30 - 15,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              rotate: [null, Math.random() * 10 - 5],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              delay: i * 2,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C12 2 14 6 14 8C14 10 12 11 12 11C12 11 10 10 10 8C10 6 12 2 12 2Z"
                fill="#FDA4AF"
                stroke="#FDA4AF"
              />
              <path
                d="M12 11C12 11 16 13 18 13C20 13 22 11 22 11C22 11 20 15 18 15C16 15 12 11 12 11Z"
                fill="#FDA4AF"
                stroke="#FDA4AF"
              />
              <path
                d="M12 11C12 11 8 13 6 13C4 13 2 11 2 11C2 11 4 15 6 15C8 15 12 11 12 11Z"
                fill="#FDA4AF"
                stroke="#FDA4AF"
              />
            </svg>
          </motion.div>
        ))}
      </div>
    )
  }

  // Bow decoration component
  const Bow = ({ className = "" }) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 2C12 2 14 6 14 8C14 10 12 11 12 11C12 11 10 10 10 8C10 6 12 2 12 2Z" fill="#FDA4AF" />
      <path d="M12 11C12 11 16 13 18 13C20 13 22 11 22 11C22 11 20 15 18 15C16 15 12 11 12 11Z" fill="#FDA4AF" />
      <path d="M12 11C12 11 8 13 6 13C4 13 2 11 2 11C2 11 4 15 6 15C8 15 12 11 12 11Z" fill="#FDA4AF" />
    </svg>
  )

  return (
    <section id="skills" className="py-20 relative">
      <div className="mb-12 text-center relative">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="inline-block"
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl text-pink-500 relative">
            Skills & Technologies
            <motion.div
              className="absolute -top-4 -right-6"
              animate={{
                rotate: [-5, 5, -5],
                y: [0, -2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              <Bow className="h-8 w-8" />
            </motion.div>
          </h2>
        </motion.div>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          My technical expertise spans across AI, quantum computing, and software development
        </p>
      </div>

      <div className="relative">
        <CoquetteDecorations />

        <Tabs defaultValue="programming" value={activeTab} onValueChange={setActiveTab} className="mx-auto max-w-4xl">
          <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-4 bg-background/50 backdrop-blur-sm border border-pink-200 rounded-full p-1">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 data-[state=active]:bg-pink-100 data-[state=active]:text-pink-500 rounded-full"
              >
                {category.icon}
                <span className="hidden sm:inline">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-4 md:grid-cols-2"
              >
                {category.skills.map((skillGroup, groupIndex) => (
                  <motion.div
                    key={skillGroup.title}
                    variants={itemVariants}
                    whileHover={{
                      y: -3,
                      transition: { type: "spring", stiffness: 200, damping: 10 },
                    }}
                  >
                    <Card className="border border-pink-200 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm overflow-hidden h-full hover:shadow-md hover:shadow-pink-200/50 transition-all duration-300 rounded-2xl">
                      <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-pink-200"></div>
                      <CardContent className="p-5 relative">
                        {/* Cute corner decoration */}
                        <div className="absolute -top-1 -right-1">
                          <Bow className="h-6 w-6" />
                        </div>

                        <h4 className="font-medium text-pink-500 mb-4 text-center relative">
                          {skillGroup.title}
                          <motion.div
                            className="absolute -top-3 -left-2"
                            animate={{
                              rotate: [0, 10, 0, -10, 0],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "loop",
                              delay: groupIndex * 0.5,
                            }}
                          >
                            <Heart className="h-4 w-4 fill-pink-300" />
                          </motion.div>
                        </h4>

                        <div className="flex flex-wrap gap-2 justify-center">
                          {skillGroup.items.map((skill, i) => (
                            <motion.span
                              key={skill}
                              className="inline-block px-3 py-1 rounded-full text-xs bg-pink-50 text-pink-600 border border-pink-200 hover:bg-pink-100 transition-colors duration-300"
                              whileHover={{
                                scale: 1.05,
                                transition: { type: "spring", stiffness: 300, damping: 10 },
                              }}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.03 + groupIndex * 0.1 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>

                        {/* Bottom decoration */}
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "loop",
                              delay: groupIndex * 0.3,
                            }}
                          >
                            <Heart className="h-3 w-3 fill-pink-200" />
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Bottom decorative elements */}
      <div className="relative h-12 mt-8">
        <motion.div
          className="absolute left-1/4 -translate-x-1/2"
          animate={{
            y: [0, -5, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          <Bow className="h-8 w-8" />
        </motion.div>
        <motion.div
          className="absolute right-1/4 translate-x-1/2"
          animate={{
            y: [0, -5, 0],
            rotate: [5, -5, 5],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: 1,
          }}
        >
          <Heart className="h-6 w-6 fill-pink-300" />
        </motion.div>
      </div>
    </section>
  )
}
