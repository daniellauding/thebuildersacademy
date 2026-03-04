import { cn } from "@/lib/utils"
import { TrustBadge } from "./trust-badge"
import { Phone, Mail, MessageCircle } from "lucide-react"

interface FooterProps {
  className?: string
}

const FOOTER_COLUMNS = [
  {
    title: "Courses",
    links: [
      { label: "CSCS Cards", href: "/cscs" },
      { label: "Health & Safety", href: "/health-safety" },
      { label: "Fire Safety", href: "/fire-safety" },
      { label: "First Aid", href: "/first-aid" },
      { label: "All Courses", href: "/courses" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Centre", href: "/help" },
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "/faq" },
      { label: "Refund Policy", href: "/refunds" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "For Employers", href: "/employers" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
]

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("border-t bg-muted", className)}>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                {column.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Get In Touch
            </h3>
            <ul className="mt-3 space-y-3">
              <li>
                <a href="tel:08001234567" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                  <Phone className="size-4" aria-hidden="true" />
                  0800 123 4567
                </a>
              </li>
              <li>
                <a href="mailto:support@buildersacademy.co.uk" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                  <Mail className="size-4" aria-hidden="true" />
                  Email Support
                </a>
              </li>
              <li>
                <button className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Live Chat
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Accreditations */}
        <div className="mt-8 flex flex-wrap items-center gap-3 border-t pt-8">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Accreditations:
          </span>
          <TrustBadge type="cpd" />
          <TrustBadge type="citb" />
          <TrustBadge type="iosh" />
          <TrustBadge type="trustpilot" />
        </div>

        {/* Legal */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} The Builders Academy. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-primary">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary">Terms of Service</a>
            <a href="/cookies" className="hover:text-primary">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
