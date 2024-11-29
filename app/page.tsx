"use client"

import { Hero } from "@/components/sections/hero"
import { FeaturedBeers } from "@/components/sections/featured-beers"
import { VisitCTA } from "@/components/sections/visit-cta"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedBeers />
      <VisitCTA />
    </div>
  )
}