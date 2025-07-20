import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  variant?: "blue" | "purple";
  className?: string;
}

export function ProductCard({ 
  title, 
  subtitle, 
  description, 
  image, 
  variant = "blue",
  className 
}: ProductCardProps) {
  const gradientClass = variant === "blue" ? "bg-gradient-blue" : "bg-gradient-purple";
  
  return (
    <Card className={cn(
      "p-8 rounded-3xl border-0 text-white relative overflow-hidden",
      gradientClass,
      className
    )}>
      <div className="relative z-10">
        {subtitle && (
          <p className="text-sm font-medium mb-2 opacity-90">{subtitle}</p>
        )}
        <h3 className="text-2xl font-bold mb-4 leading-tight">{title}</h3>
        <p className="text-base leading-relaxed mb-6 opacity-90">{description}</p>
        
        {image && (
          <div className="mt-6">
            <img 
              src={image} 
              alt={title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    </Card>
  );
}