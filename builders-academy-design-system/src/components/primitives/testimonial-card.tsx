import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  image?: string;
  stats?: { label: string; value: string; subtext?: string }[];
  badge?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  image,
  stats,
  badge,
}: TestimonialCardProps) {
  return (
    <Card className="relative overflow-hidden">
      {badge && (
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="bg-background">
            {badge}
          </Badge>
        </div>
      )}
      
      <CardContent className="p-8">
        <div className="space-y-6">
          {/* Quote */}
          <blockquote className="text-lg leading-relaxed text-foreground">
            "{quote}"
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center gap-4">
            {image ? (
              <img
                src={image}
                alt={author}
                className="h-12 w-12 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">
                {author.charAt(0)}
              </div>
            )}
            <div>
              <p className="font-semibold text-foreground">{author}</p>
              <p className="text-sm text-muted-foreground">
                {role}
                {company && <span> at {company}</span>}
              </p>
            </div>
          </div>

          {/* Stats (optional) */}
          {stats && stats.length > 0 && (
            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                  {stat.subtext && (
                    <div className="text-xs text-muted-foreground/60">
                      {stat.subtext}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
