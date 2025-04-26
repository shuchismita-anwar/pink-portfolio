import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export default function Education() {
  const education = [
    // {
    //   degree: "Ph.D. in Quantum Computing",
    //   institution: "Massachusetts Institute of Technology",
    //   period: "2018 - 2022",
    //   description:
    //     "Focused on quantum machine learning algorithms and their applications in complex pattern recognition tasks. Thesis: 'Quantum-Enhanced Neural Networks for High-Dimensional Data Analysis'.",
    //   icon: <GraduationCap className="h-10 w-10 text-primary" />,
    // },
    // {
    //   degree: "M.S. in Computer Science",
    //   institution: "Stanford University",
    //   period: "2016 - 2018",
    //   description:
    //     "Specialized in artificial intelligence and machine learning. Research focused on deep learning architectures for computer vision applications.",
    //   icon: <BookOpen className="h-10 w-10 text-primary" />,
    // },
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "Brac University, Bangladesh",
      period: "2020 - 2024",
      description:
        "Highest Distinction | Dean’s List | Vice Chancellor’s List",
      icon: <Award className="h-10 w-10 text-primary" />,
    },
  ]

  // const certifications = [
  //   {
  //     name: "IBM Quantum Computing Certification",
  //     issuer: "IBM",
  //     year: 2021,
  //   },
  //   {
  //     name: "Deep Learning Specialization",
  //     issuer: "Coursera (Andrew Ng)",
  //     year: 2020,
  //   },
  //   {
  //     name: "TensorFlow Developer Certificate",
  //     issuer: "Google",
  //     year: 2019,
  //   },
  // ]

  return (
    <section id="education" className="py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Education</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          My academic background 
          {/* and professional certifications */}
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="mb-12 space-y-8">
          {education.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 md:flex-row">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/30">
                {item.icon}
              </div>
              <Card className="flex-1 border border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <CardTitle>{item.degree}</CardTitle>
                    <CardDescription className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
                      {item.period}
                    </CardDescription>
                  </div>
                  <CardDescription className="text-base font-medium">{item.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* <div> */}
          {/* <h3 className="mb-6 text-center text-xl font-semibold">Certifications</h3> */}
          {/* <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="flex flex-col justify-between border border-primary/20 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <CardDescription>{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-muted-foreground">
                    Issued: <span className="text-primary">{cert.year}</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div> */}
        {/* </div> */}
      </div>
    </section>
  )
}
