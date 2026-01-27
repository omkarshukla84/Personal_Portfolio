"use client"
import { useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export default function SmoothScroller() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    lenis.on('scroll', ScrollTrigger.update)

    const update = (time: number) => {
        // lenis.raf(time * 1000) gives validation errors in some envs if time is delta
        // GSAP ticker gives delta time in seconds, lenis wants ms
        lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)
    
    // Disable lag smoothing to prevent jumpy scrolling during heavy processing
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(update)
    }
  }, [])

  return null
}
