"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
  variant?: "hero" | "header" | "category"
  className?: string
}

const VARIANT_CLASSES = {
  hero: "h-14 pl-12 pr-4 text-lg rounded-full shadow-level-2",
  header: "h-10 pl-10 pr-4 text-sm rounded-full",
  category: "h-12 pl-11 pr-4 text-base rounded-full shadow-level-1",
}

const ICON_CLASSES = {
  hero: "left-4 size-5",
  header: "left-3 size-4",
  category: "left-3.5 size-4",
}

export function SearchBar({
  placeholder = "Search courses...",
  onSearch,
  variant = "hero",
  className,
}: SearchBarProps) {
  const [query, setQuery] = React.useState("")

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(query)
    }
  }

  return (
    <div className={cn("relative w-full max-w-xl mx-auto", className)}>
      <Search
        className={cn(
          "absolute top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none",
          ICON_CLASSES[variant]
        )}
        aria-hidden="true"
      />
      <Input
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className={cn(
          "border-border bg-white focus-visible:border-primary focus-visible:ring-primary/20",
          VARIANT_CLASSES[variant]
        )}
        aria-label="Search courses"
      />
    </div>
  )
}
