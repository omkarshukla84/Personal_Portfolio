"use client"
import type React from "react"
import { useEffect, useRef, useState, useCallback } from "react"

interface Pixel {
  id: number
  x: number
  y: number
  opacity: number
  age: number
  color: string
}

const COLORS = ["#FF0000", "#00AA00", "#009DDC", "#FBD000", "#000000"] // Mario Colors!
const PIXEL_SIZE = 12
const TRAIL_LENGTH = 20
const FADE_SPEED = 0.04

export function PixelCursorTrail() {
//   const containerRef = useRef<HTMLDivElement>(null)
  const [pixels, setPixels] = useState<Pixel[]>([])
  const pixelIdRef = useRef(0)
  const lastPositionRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number | null>(null)

  const createPixel = useCallback((x: number, y: number) => {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    return {
      id: pixelIdRef.current++,
      x,
      y,
      opacity: 1,
      age: 0,
      color: randomColor
    }
  }, [])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY

      const dx = x - lastPositionRef.current.x
      const dy = y - lastPositionRef.current.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance > PIXEL_SIZE) {
        const newPixel = createPixel(x, y)
        setPixels((prev) => [...prev.slice(-TRAIL_LENGTH), newPixel])
        lastPositionRef.current = { x, y }
      }
    },
    [createPixel],
  )

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    
    const animate = () => {
      setPixels((prev) =>
        prev
          .map((pixel) => ({
            ...pixel,
            opacity: pixel.opacity - FADE_SPEED,
            age: pixel.age + 1,
          }))
          .filter((pixel) => pixel.opacity > 0),
      )
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [handleMouseMove])

  return (
    <div
      className="fixed inset-0 w-screen h-screen pointer-events-none z-[9999] overflow-hidden"
    >
      {pixels.map((pixel) => {
        // Calculate size based on age - older pixels are smaller
        const sizeMultiplier = Math.max(0.3, 1 - pixel.age / 100)
        const currentSize = PIXEL_SIZE * sizeMultiplier

        return (
          <div
            key={pixel.id}
            className="absolute"
            style={{
              left: pixel.x - currentSize / 2,
              top: pixel.y - currentSize / 2,
              width: currentSize,
              height: currentSize,
              opacity: pixel.opacity,
              backgroundColor: pixel.color,
              transition: "width 0.1s ease-out, height 0.1s ease-out",
            }}
          />
        )
      })}
    </div>
  )
}
