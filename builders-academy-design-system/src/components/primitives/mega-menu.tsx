"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface MegaMenuItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  badge?: string;
}

export function MegaMenuItem({
  icon: Icon,
  title,
  description,
  href,
  badge,
}: MegaMenuItemProps) {
  return (
    <Link href={href}>
      <Card className="group cursor-pointer hover:shadow-md transition-all border-slate-200 h-full">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                  {title}
                </h4>
                {badge && (
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    {badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

interface MegaMenuSectionProps {
  title: string;
  items: MegaMenuItemProps[];
}

export function MegaMenuSection({ title, items }: MegaMenuSectionProps) {
  return (
    <div>
      <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3 px-1">
        {title}
      </h3>
      <div className="space-y-2">
        {items.map((item) => (
          <MegaMenuItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

interface MegaMenuProps {
  sections: MegaMenuSectionProps[];
  footer?: {
    text: string;
    href: string;
  };
}

export function MegaMenu({ sections, footer }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger */}
      <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
        Courses
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-full pt-2 z-50 w-screen max-w-4xl">
          <div className="bg-white rounded-lg shadow-xl border border-slate-200 p-6">
            <div className="grid grid-cols-3 gap-6">
              {sections.map((section) => (
                <MegaMenuSection key={section.title} {...section} />
              ))}
            </div>

            {footer && (
              <div className="mt-6 pt-4 border-t">
                <Link
                  href={footer.href}
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                >
                  {footer.text}
                  <span>→</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
