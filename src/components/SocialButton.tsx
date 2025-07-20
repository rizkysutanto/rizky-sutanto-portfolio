import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SocialButtonProps {
  children: React.ReactNode;
  variant?: "linkedin" | "twitter" | "email" | "whatsapp" | "resume";
  href?: string;
  className?: string;
}

const variantStyles = {
  linkedin: "bg-blue-600 hover:bg-blue-700 text-white",
  twitter: "bg-white hover:bg-gray-100 text-black border border-gray-300",
  email: "bg-red-600 hover:bg-red-700 text-white",
  whatsapp: "bg-green-600 hover:bg-green-700 text-white",
  resume: "bg-white hover:bg-gray-100 text-black border border-gray-300"
};

export function SocialButton({ children, variant = "linkedin", href, className }: SocialButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        "px-6 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105",
        variantStyles[variant],
        className
      )}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
}