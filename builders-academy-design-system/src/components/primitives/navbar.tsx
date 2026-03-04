"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { SearchBar } from "./search-bar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, ShoppingCart, User } from "lucide-react"

interface NavItem {
  label: string
  href: string
  highlight?: boolean
}

interface NavbarProps {
  className?: string
}

const NAV_ITEMS: NavItem[] = [
  { label: "CSCS Cards", href: "/cscs" },
  { label: "Health & Safety", href: "/health-safety" },
  { label: "Fire Safety", href: "/fire-safety" },
  { label: "First Aid", href: "/first-aid" },
  { label: "For Employers", href: "/employers", highlight: true },
]

export function Navbar({ className }: NavbarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80",
        className
      )}
    >
      {/* Top bar */}
      <div className="border-b bg-primary px-4 py-1.5 text-xs text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span className="inline-flex items-center gap-1">
            <Phone className="size-3" aria-hidden="true" />
            0800 123 4567
          </span>
          <span>Same-Day Results | CPD Accredited</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-bold text-primary text-lg whitespace-nowrap">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-white text-sm font-bold" aria-hidden="true">
            BA
          </span>
          <span className="hidden sm:inline">Builders Academy</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary",
                item.highlight && "text-secondary font-semibold"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Search + Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <SearchBar variant="header" className="w-56" />
          <Button variant="ghost" size="icon">
            <User className="size-4" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="size-4" />
            <span className="sr-only">Cart</span>
            <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-white">
              2
            </span>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="size-5" />
            <span className="sr-only">Cart</span>
            <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-white">
              2
            </span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile navigation">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex h-14 items-center rounded-lg px-4 text-base font-medium transition-colors hover:bg-muted",
                      item.highlight && "text-secondary font-semibold"
                    )}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-4 border-t pt-4">
                  <SearchBar variant="category" />
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <Button className="w-full" size="lg">Sign In</Button>
                  <Button variant="outline" className="w-full" size="lg">Create Account</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
