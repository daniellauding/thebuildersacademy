"use client"

import * as React from "react"
import { Navbar } from "@/components/primitives/navbar"
import { Footer } from "@/components/primitives/footer"
import { SearchBar } from "@/components/primitives/search-bar"
import { ProductCard } from "@/components/primitives/product-card"
import { FilterChip } from "@/components/primitives/filter-chip"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { SlidersHorizontal } from "lucide-react"
import { POPULAR_COURSES } from "@/lib/constants"

const PRICE_FILTERS = ["All Prices", "Under £25", "£25–£50", "Over £50"]
const DURATION_FILTERS = ["All Durations", "Under 1 hour", "1–2 hours", "Over 2 hours"]
const ACCREDITATION_FILTERS = ["CPD", "CITB", "IOSH"]

export function CategoryPage() {
  const [activePrice, setActivePrice] = React.useState("All Prices")
  const [activeDuration, setActiveDuration] = React.useState("All Durations")

  return (
    <>
      <Navbar />

      {/* Category Hero */}
      <section className="bg-gradient-to-b from-muted to-background px-4 py-12">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-d6 font-bold">Health & Safety Courses</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            CPD Accredited training for construction professionals
          </p>
          <div className="mt-6">
            <SearchBar variant="category" placeholder="Search Health & Safety courses..." />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wider">Price</h3>
                <div className="flex flex-col gap-2">
                  {PRICE_FILTERS.map((filter) => (
                    <FilterChip
                      key={filter}
                      label={filter}
                      active={activePrice === filter}
                      onToggle={() => setActivePrice(filter)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wider">Duration</h3>
                <div className="flex flex-col gap-2">
                  {DURATION_FILTERS.map((filter) => (
                    <FilterChip
                      key={filter}
                      label={filter}
                      active={activeDuration === filter}
                      onToggle={() => setActiveDuration(filter)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wider">Accreditation</h3>
                <div className="space-y-2">
                  {ACCREDITATION_FILTERS.map((filter) => (
                    <div key={filter} className="flex items-center gap-2">
                      <Checkbox id={`acc-${filter}`} />
                      <Label htmlFor={`acc-${filter}`} className="text-sm font-normal">
                        {filter}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div>
            {/* Sort Bar + Mobile Filter */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing <strong>6</strong> courses
              </p>
              <div className="flex items-center gap-2">
                {/* Mobile filter button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden">
                      <SlidersHorizontal className="size-4" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="bottom" className="h-[80vh] rounded-t-xl">
                    <SheetHeader>
                      <SheetTitle>Filter Courses</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6 space-y-6 overflow-y-auto">
                      <div>
                        <h3 className="mb-3 text-sm font-bold">Price</h3>
                        <div className="flex flex-wrap gap-2">
                          {PRICE_FILTERS.map((filter) => (
                            <FilterChip
                              key={filter}
                              label={filter}
                              active={activePrice === filter}
                              onToggle={() => setActivePrice(filter)}
                            />
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-3 text-sm font-bold">Duration</h3>
                        <div className="flex flex-wrap gap-2">
                          {DURATION_FILTERS.map((filter) => (
                            <FilterChip
                              key={filter}
                              label={filter}
                              active={activeDuration === filter}
                              onToggle={() => setActiveDuration(filter)}
                            />
                          ))}
                        </div>
                      </div>
                      <Button className="w-full" size="lg">Show 6 Results</Button>
                    </div>
                  </SheetContent>
                </Sheet>

                <Select defaultValue="popular">
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {POPULAR_COURSES.map((course) => (
                <ProductCard
                  key={course.id}
                  title={course.title}
                  price={course.price}
                  rating={course.rating}
                  reviewCount={course.reviewCount}
                  duration={course.duration}
                  badges={[...course.badges]}
                />
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">Load More Courses</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
