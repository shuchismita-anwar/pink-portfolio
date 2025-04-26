"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Colors based on theme - more vibrant and cute colors
    const getColors = () => {
      return theme === "dark"
        ? {
            primary: "#f472b6", // Pink
            secondary: "#a78bfa", // Purple
            tertiary: "#60a5fa", // Blue
            accent: "#34d399", // Green
            background: "#0f172a",
            grid: "rgba(244, 114, 182, 0.15)",
            wire: "rgba(167, 139, 250, 0.5)",
            glow: "rgba(244, 114, 182, 0.8)",
            qubit: "#fcd34d", // Yellow
          }
        : {
            primary: "#ec4899", // Pink
            secondary: "#8b5cf6", // Purple
            tertiary: "#3b82f6", // Blue
            accent: "#10b981", // Green
            background: "#f8fafc",
            grid: "rgba(236, 72, 153, 0.1)",
            wire: "rgba(139, 92, 246, 0.3)",
            glow: "rgba(236, 72, 153, 0.6)",
            qubit: "#f59e0b", // Yellow
          }
    }

    let colors = getColors()

    // Cute Quantum Circuit class
    class CuteQuantumCircuit {
      gridSize: number
      wires: CuteWire[]
      gates: CuteGate[]
      qubits: CuteQubit[]
      stars: Star[]
      bubbles: Bubble[]

      constructor() {
        this.gridSize = 100
        this.wires = []
        this.gates = []
        this.qubits = []
        this.stars = []
        this.bubbles = []

        this.initCircuit()
      }

      initCircuit() {
        // Create horizontal wires (quantum channels)
        const wireCount = Math.floor(canvas.height / this.gridSize) - 1
        for (let i = 1; i <= wireCount; i++) {
          const y = i * this.gridSize
          this.wires.push(new CuteWire(0, y, canvas.width, y))
        }

        // Create gates on the wires
        for (let i = 0; i < this.wires.length; i++) {
          const wire = this.wires[i]
          const gateCount = Math.floor(Math.random() * 3) + 2 // 2-4 gates per wire

          for (let j = 0; j < gateCount; j++) {
            const x = (j + 1) * (canvas.width / (gateCount + 1))
            const gateType = Math.floor(Math.random() * 4) // 0-3 different gate types
            this.gates.push(new CuteGate(x, wire.y1, gateType))
          }
        }

        // Create qubits that will travel along the wires
        for (let i = 0; i < this.wires.length; i++) {
          const wire = this.wires[i]
          const qubitCount = Math.floor(Math.random() * 2) + 1 // 1-2 qubits per wire

          for (let j = 0; j < qubitCount; j++) {
            this.qubits.push(new CuteQubit(wire))
          }
        }

        // Create decorative stars
        const starCount = 50
        for (let i = 0; i < starCount; i++) {
          this.stars.push(new Star())
        }

        // Create decorative bubbles
        const bubbleCount = 20
        for (let i = 0; i < bubbleCount; i++) {
          this.bubbles.push(new Bubble())
        }
      }

      update(time: number) {
        // Update qubits
        this.qubits.forEach((qubit) => qubit.update(time, this.gates))

        // Update gates
        this.gates.forEach((gate) => gate.update(time))

        // Update stars
        this.stars.forEach((star) => star.update(time))

        // Update bubbles
        this.bubbles.forEach((bubble) => bubble.update())
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw cute grid
        this.drawGrid(ctx)

        // Draw bubbles (behind)
        this.bubbles.forEach((bubble) => bubble.draw(ctx))

        // Draw wires
        this.wires.forEach((wire) => wire.draw(ctx))

        // Draw gates
        this.gates.forEach((gate) => gate.draw(ctx))

        // Draw qubits
        this.qubits.forEach((qubit) => qubit.draw(ctx))

        // Draw stars (on top)
        this.stars.forEach((star) => star.draw(ctx))
      }

      drawGrid(ctx: CanvasRenderingContext2D) {
        // Draw a cute grid with rounded corners and pastel colors
        const horizLines = Math.ceil(canvas.height / this.gridSize) + 1
        const vertLines = Math.ceil(canvas.width / this.gridSize) + 1

        ctx.strokeStyle = colors.grid
        ctx.lineWidth = 2

        // Horizontal wavy lines
        for (let i = 0; i < horizLines; i++) {
          const y = i * this.gridSize
          ctx.beginPath()

          for (let x = 0; x < canvas.width; x += 5) {
            // Create cute wavy lines
            const waveHeight = Math.sin(x * 0.01 + time * 0.5) * 5
            const yPos = y + waveHeight

            if (x === 0) {
              ctx.moveTo(x, yPos)
            } else {
              ctx.lineTo(x, yPos)
            }
          }

          ctx.stroke()
        }

        // Vertical wavy lines
        for (let i = 0; i < vertLines; i++) {
          const x = i * this.gridSize
          ctx.beginPath()

          for (let y = 0; y < canvas.height; y += 5) {
            // Create cute wavy lines
            const waveWidth = Math.sin(y * 0.01 + time * 0.5) * 5
            const xPos = x + waveWidth

            if (y === 0) {
              ctx.moveTo(xPos, y)
            } else {
              ctx.lineTo(xPos, y)
            }
          }

          ctx.stroke()
        }
      }
    }

    // Cute Wire class
    class CuteWire {
      x1: number
      y1: number
      x2: number
      y2: number
      pulsePhase: number
      amplitude: number

      constructor(x1: number, y1: number, x2: number, y2: number) {
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
        this.pulsePhase = Math.random() * Math.PI * 2
        this.amplitude = 3 + Math.random() * 3 // Cute wavy amplitude
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw a cute wavy wire
        ctx.strokeStyle = colors.wire
        ctx.lineWidth = 3
        ctx.lineCap = "round"
        ctx.lineJoin = "round"

        ctx.beginPath()

        // Draw wavy line
        for (let x = this.x1; x <= this.x2; x += 5) {
          const progress = (x - this.x1) / (this.x2 - this.x1)
          const y = this.y1 + Math.sin(progress * 10 + time * 2) * this.amplitude

          if (x === this.x1) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()

        // Draw energy pulse along the wire
        const pulseCount = 3
        const wireLength = this.x2 - this.x1

        for (let i = 0; i < pulseCount; i++) {
          const phase = (time * 0.3 + this.pulsePhase + i / pulseCount) % 1
          const x = this.x1 + phase * wireLength
          const progress = phase
          const y = this.y1 + Math.sin(progress * 10 + time * 2) * this.amplitude

          // Draw heart-shaped pulse
          ctx.save()
          const pulseSize = 8 + Math.sin(time * 3 + i) * 2

          // Heart shape
          ctx.fillStyle = colors.glow
          ctx.translate(x, y)
          ctx.scale(0.5, 0.5)
          ctx.beginPath()
          ctx.moveTo(0, 0)
          ctx.bezierCurveTo(-10, -10, -20, 0, 0, 20)
          ctx.bezierCurveTo(20, 0, 10, -10, 0, 0)
          ctx.fill()
          ctx.restore()
        }
      }
    }

    // Cute Gate class
    class CuteGate {
      x: number
      y: number
      type: number
      size: number
      rotation: number
      pulseTime: number
      active: boolean
      bounceOffset: number
      bounceSpeed: number
      eyeState: number // 0: normal, 1: happy, 2: surprised
      eyeTimer: number

      constructor(x: number, y: number, type: number) {
        this.x = x
        this.y = y
        this.type = type
        this.size = 25
        this.rotation = 0
        this.pulseTime = 0
        this.active = false
        this.bounceOffset = 0
        this.bounceSpeed = 0.05 + Math.random() * 0.05
        this.eyeState = 0
        this.eyeTimer = 0
      }

      update(time: number) {
        // Cute bouncy animation
        this.bounceOffset = Math.sin(time * this.bounceSpeed * 5) * 3

        // Decrease pulse time if active
        if (this.active) {
          this.pulseTime += 0.05
          this.eyeState = 1 // Happy eyes when active
          this.eyeTimer = 2 // Keep happy for 2 seconds

          if (this.pulseTime >= 1) {
            this.active = false
          }
        } else {
          this.pulseTime = Math.max(0, this.pulseTime - 0.05)

          // Update eye state
          if (this.eyeTimer > 0) {
            this.eyeTimer -= 0.05
            if (this.eyeTimer <= 0) {
              this.eyeState = 0 // Back to normal eyes
            }
          }

          // Occasionally blink or change expression
          if (Math.random() < 0.005) {
            this.eyeState = Math.floor(Math.random() * 3)
            this.eyeTimer = 0.5 + Math.random() * 1
          }
        }
      }

      activate() {
        this.active = true
        this.pulseTime = 0
        this.eyeState = 2 // Surprised eyes when first activated
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save()
        ctx.translate(this.x, this.y + this.bounceOffset)

        // Draw gate glow when active
        if (this.pulseTime > 0) {
          const glowSize = this.size * (1 + this.pulseTime * 0.5)
          ctx.fillStyle = colors.glow
          ctx.globalAlpha = 0.5 * (1 - this.pulseTime)
          ctx.beginPath()
          ctx.arc(0, 0, glowSize, 0, Math.PI * 2)
          ctx.fill()
        }

        // Draw cute gate based on type
        ctx.globalAlpha = 1
        ctx.lineWidth = 3
        ctx.lineCap = "round"
        ctx.lineJoin = "round"

        const gateColors = [colors.primary, colors.secondary, colors.tertiary, colors.accent]
        const gateColor = gateColors[this.type]

        // Draw gate body
        ctx.fillStyle = gateColor
        ctx.strokeStyle = theme === "dark" ? "#ffffff" : "#000000"

        switch (this.type) {
          case 0: // Square gate with rounded corners
            this.drawRoundedRect(ctx, -this.size / 2, -this.size / 2, this.size, this.size, 8)
            break

          case 1: // Circle gate
            ctx.beginPath()
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2)
            ctx.fill()
            ctx.stroke()
            break

          case 2: // Star gate
            this.drawStar(ctx, 0, 0, 5, this.size / 2, this.size / 4)
            break

          case 3: // Heart gate
            this.drawHeart(ctx, 0, 0, this.size / 2)
            break
        }

        // Draw cute face
        this.drawCuteFace(ctx)

        ctx.restore()
      }

      drawRoundedRect(
        ctx: CanvasRenderingContext2D,
        x: number,
        y: number,
        width: number,
        height: number,
        radius: number,
      ) {
        ctx.beginPath()
        ctx.moveTo(x + radius, y)
        ctx.lineTo(x + width - radius, y)
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
        ctx.lineTo(x + width, y + height - radius)
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
        ctx.lineTo(x + radius, y + height)
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
        ctx.lineTo(x, y + radius)
        ctx.quadraticCurveTo(x, y, x + radius, y)
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
      }

      drawStar(
        ctx: CanvasRenderingContext2D,
        cx: number,
        cy: number,
        spikes: number,
        outerRadius: number,
        innerRadius: number,
      ) {
        let rot = (Math.PI / 2) * 3
        let x = cx
        let y = cy
        const step = Math.PI / spikes

        ctx.beginPath()
        ctx.moveTo(cx, cy - outerRadius)

        for (let i = 0; i < spikes; i++) {
          x = cx + Math.cos(rot) * outerRadius
          y = cy + Math.sin(rot) * outerRadius
          ctx.lineTo(x, y)
          rot += step

          x = cx + Math.cos(rot) * innerRadius
          y = cy + Math.sin(rot) * innerRadius
          ctx.lineTo(x, y)
          rot += step
        }

        ctx.lineTo(cx, cy - outerRadius)
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
      }

      drawHeart(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.bezierCurveTo(x - size, y - size, x - size * 2, y, x, y + size)
        ctx.bezierCurveTo(x + size * 2, y, x + size, y - size, x, y)
        ctx.fill()
        ctx.stroke()
      }

      drawCuteFace(ctx: CanvasRenderingContext2D) {
        const eyeSpacing = this.size * 0.3
        const eyeY = -this.size * 0.1
        const eyeSize = this.size * 0.15

        // Draw eyes based on state
        ctx.fillStyle = theme === "dark" ? "#ffffff" : "#000000"

        switch (this.eyeState) {
          case 0: // Normal eyes
            ctx.beginPath()
            ctx.arc(-eyeSpacing, eyeY, eyeSize, 0, Math.PI * 2)
            ctx.arc(eyeSpacing, eyeY, eyeSize, 0, Math.PI * 2)
            ctx.fill()
            break

          case 1: // Happy eyes (upside-down U)
            ctx.lineWidth = 2
            ctx.beginPath()
            ctx.arc(-eyeSpacing, eyeY, eyeSize, Math.PI, Math.PI * 2, true)
            ctx.stroke()

            ctx.beginPath()
            ctx.arc(eyeSpacing, eyeY, eyeSize, Math.PI, Math.PI * 2, true)
            ctx.stroke()
            break

          case 2: // Surprised eyes
            ctx.beginPath()
            ctx.arc(-eyeSpacing, eyeY, eyeSize * 1.2, 0, Math.PI * 2)
            ctx.arc(eyeSpacing, eyeY, eyeSize * 1.2, 0, Math.PI * 2)
            ctx.fill()
            break
        }

        // Draw mouth
        const mouthY = this.size * 0.2

        if (this.active || this.eyeState === 1) {
          // Happy mouth
          ctx.beginPath()
          ctx.arc(0, mouthY - 2, this.size * 0.25, 0, Math.PI)
          ctx.stroke()
        } else if (this.eyeState === 2) {
          // Surprised mouth
          ctx.beginPath()
          ctx.arc(0, mouthY, eyeSize, 0, Math.PI * 2)
          ctx.fill()
        } else {
          // Normal mouth
          ctx.beginPath()
          ctx.arc(0, mouthY, this.size * 0.15, 0, Math.PI)
          ctx.stroke()
        }
      }
    }

    // Cute Qubit class
    class CuteQubit {
      wire: CuteWire
      x: number
      y: number
      size: number
      speed: number
      phase: number
      spin: number
      color: string
      trailPoints: { x: number; y: number; alpha: number }[]
      bounceOffset: number
      bounceSpeed: number

      constructor(wire: CuteWire) {
        this.wire = wire
        this.x = wire.x1
        this.y = wire.y1
        this.size = 8 + Math.random() * 4
        this.speed = 0.8 + Math.random() * 1.2
        this.phase = Math.random() * Math.PI * 2
        this.spin = Math.random() * 0.1 + 0.05
        this.color = colors.qubit
        this.trailPoints = []
        this.bounceOffset = 0
        this.bounceSpeed = 0.1 + Math.random() * 0.1
      }

      update(time: number, gates: CuteGate[]) {
        // Store previous position for trail
        if (this.trailPoints.length > 10) {
          this.trailPoints.pop()
        }

        this.trailPoints.unshift({
          x: this.x,
          y: this.y,
          alpha: 1,
        })

        // Update trail point alphas
        this.trailPoints.forEach((point, i) => {
          point.alpha = 1 - i / this.trailPoints.length
        })

        // Move along the wire with cute bouncy motion
        this.x += this.speed

        // Calculate y position based on wire's wave
        const progress = (this.x - this.wire.x1) / (this.wire.x2 - this.wire.x1)
        this.y = this.wire.y1 + Math.sin(progress * 10 + time * 2) * this.wire.amplitude

        // Add cute bouncy motion
        this.bounceOffset = Math.sin(time * this.bounceSpeed * 10) * 3

        // Reset position if reached the end
        if (this.x > this.wire.x2) {
          this.x = this.wire.x1
          this.trailPoints = []
        }

        // Check for collision with gates
        gates.forEach((gate) => {
          const distance = Math.abs(this.x - gate.x)
          if (distance < 10 && Math.abs(this.y - gate.y) < 15 && !gate.active) {
            gate.activate()

            // Change qubit properties based on gate type
            switch (gate.type) {
              case 0: // Square gate - change size
                this.size = 8 + Math.random() * 4
                break
              case 1: // Circle gate - change speed
                this.speed = 0.8 + Math.random() * 1.2
                break
              case 2: // Star gate - change color
                const colors = ["#f472b6", "#a78bfa", "#60a5fa", "#34d399", "#fcd34d"]
                this.color = colors[Math.floor(Math.random() * colors.length)]
                break
              case 3: // Heart gate - change spin
                this.spin = -this.spin
                break
            }
          }
        })

        // Update phase
        this.phase += this.spin
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw trail
        this.trailPoints.forEach((point, i) => {
          ctx.fillStyle = `rgba(${this.hexToRgb(this.color)}, ${point.alpha * 0.5})`
          ctx.beginPath()
          ctx.arc(point.x, point.y, this.size * (1 - i / this.trailPoints.length) * 0.8, 0, Math.PI * 2)
          ctx.fill()
        })

        ctx.save()
        ctx.translate(this.x, this.y + this.bounceOffset)

        // Draw cute qubit (star shape)
        ctx.fillStyle = this.color
        ctx.strokeStyle = theme === "dark" ? "#ffffff" : "#000000"
        ctx.lineWidth = 2

        // Draw star shape
        this.drawStar(ctx, 0, 0, 5, this.size, this.size / 2)

        // Draw cute face on qubit
        this.drawCuteFace(ctx)

        ctx.restore()
      }

      drawStar(
        ctx: CanvasRenderingContext2D,
        cx: number,
        cy: number,
        spikes: number,
        outerRadius: number,
        innerRadius: number,
      ) {
        let rot = (Math.PI / 2) * 3
        let x = cx
        let y = cy
        const step = Math.PI / spikes

        ctx.beginPath()
        ctx.moveTo(cx, cy - outerRadius)

        for (let i = 0; i < spikes; i++) {
          x = cx + Math.cos(rot) * outerRadius
          y = cy + Math.sin(rot) * outerRadius
          ctx.lineTo(x, y)
          rot += step

          x = cx + Math.cos(rot) * innerRadius
          y = cy + Math.sin(rot) * innerRadius
          ctx.lineTo(x, y)
          rot += step
        }

        ctx.lineTo(cx, cy - outerRadius)
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
      }

      drawCuteFace(ctx: CanvasRenderingContext2D) {
        const eyeSpacing = this.size * 0.3
        const eyeY = -this.size * 0.1
        const eyeSize = this.size * 0.15

        // Draw eyes
        ctx.fillStyle = theme === "dark" ? "#ffffff" : "#000000"
        ctx.beginPath()
        ctx.arc(-eyeSpacing, eyeY, eyeSize, 0, Math.PI * 2)
        ctx.arc(eyeSpacing, eyeY, eyeSize, 0, Math.PI * 2)
        ctx.fill()

        // Draw smile
        ctx.beginPath()
        ctx.arc(0, this.size * 0.2, this.size * 0.2, 0, Math.PI)
        ctx.stroke()
      }

      hexToRgb(hex: string): string {
        // Remove # if present
        hex = hex.replace("#", "")

        // Parse the hex values
        const r = Number.parseInt(hex.substring(0, 2), 16)
        const g = Number.parseInt(hex.substring(2, 4), 16)
        const b = Number.parseInt(hex.substring(4, 6), 16)

        return `${r}, ${g}, ${b}`
      }
    }

    // Decorative Star class
    class Star {
      x: number
      y: number
      size: number
      color: string
      twinkleSpeed: number
      twinklePhase: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = 1 + Math.random() * 3

        const colors = ["#f472b6", "#a78bfa", "#60a5fa", "#34d399", "#fcd34d"]
        this.color = colors[Math.floor(Math.random() * colors.length)]

        this.twinkleSpeed = 0.05 + Math.random() * 0.1
        this.twinklePhase = Math.random() * Math.PI * 2
      }

      update(time: number) {
        this.twinklePhase += this.twinkleSpeed
      }

      draw(ctx: CanvasRenderingContext2D) {
        const twinkle = 0.3 + Math.abs(Math.sin(this.twinklePhase)) * 0.7

        ctx.save()
        ctx.translate(this.x, this.y)

        // Draw twinkling star
        ctx.fillStyle = this.color
        ctx.globalAlpha = twinkle

        // Draw star shape
        ctx.beginPath()
        for (let i = 0; i < 5; i++) {
          const angle = (i * Math.PI * 2) / 5 - Math.PI / 2
          const length = this.size * (i % 2 === 0 ? 1 : 0.5)

          const x = Math.cos(angle) * length
          const y = Math.sin(angle) * length

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.closePath()
        ctx.fill()

        ctx.restore()
      }
    }

    // Decorative Bubble class
    class Bubble {
      x: number
      y: number
      size: number
      speed: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height + Math.random() * 100
        this.size = 10 + Math.random() * 30
        this.speed = 0.2 + Math.random() * 0.5

        const colors = ["#f472b6", "#a78bfa", "#60a5fa", "#34d399", "#fcd34d"]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.y -= this.speed

        // Reset if off screen
        if (this.y < -this.size) {
          this.y = canvas.height + this.size
          this.x = Math.random() * canvas.width
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save()

        // Draw bubble
        ctx.globalAlpha = 0.2
        ctx.fillStyle = this.color
        ctx.strokeStyle = this.color
        ctx.lineWidth = 1

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()

        // Draw highlight
        ctx.globalAlpha = 0.5
        ctx.beginPath()
        ctx.arc(this.x - this.size * 0.3, this.y - this.size * 0.3, this.size * 0.2, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()
      }
    }

    // Create cute quantum circuit
    const circuit = new CuteQuantumCircuit()

    // Animation loop
    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update colors if theme changes
      colors = getColors()

      // Update and draw quantum circuit
      circuit.update(time)
      circuit.draw(ctx)

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" style={{ opacity: 0.5 }} />
}
