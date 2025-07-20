import { SocialButton } from "@/components/SocialButton";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-lg font-medium text-muted-foreground mb-4">
            Rizky Sutanto
          </h1>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            I Build Products That{" "}
            <span className="block">Generate Revenue & Deliver Value</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Built Caly AI 0 to 1 Solo | Head of B2B Product @ B2B SaaS (1B+ IDR ARR)
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <SocialButton variant="linkedin" href="#">
              LinkedIn
            </SocialButton>
            <SocialButton variant="twitter" href="#">
              X / Twitter
            </SocialButton>
            <SocialButton variant="email" href="#">
              Email
            </SocialButton>
            <SocialButton variant="whatsapp" href="#">
              WhatsApp
            </SocialButton>
            <SocialButton variant="resume" href="#">
              Resume
            </SocialButton>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <ProductCard
              subtitle="Built Solo from 0 to 1"
              title="Schedule Anything In Seconds by Chat"
              description="Caly AI runs on Telegram & WhatsApp. It books meetings, sets reminders, and updates your Calendar. No UI. No apps. Just chat."
              image="/lovable-uploads/88f2b331-bd64-4411-9c83-73b27ff6970b.png"
              variant="blue"
            />
            
            <ProductCard
              subtitle="Scaled ATS to Full Stack HRMS + ESS"
              title="Your All In One HR Solution"
              description="Everything from recruitment, employee management, shifts, reimbursement, payroll, overtime, to tax report."
              image="/lovable-uploads/88f2b331-bd64-4411-9c83-73b27ff6970b.png"
              variant="purple"
            />
          </div>
        </div>
      </section>

      {/* Professional Summary Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Professional Summary</h3>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Product & Project Manager with 6 years of experience, currently Head of B2B Product at Jobseeker 
              Company. Lead end-to-end product strategy and execution for B2B HRMS platforms generating 71% of 
              company revenue (IDR 1B+ ARR). Delivered end-to-end SaaS product solutions for enterprise clients 
              including Super Indo, Paramount Land, and FTI, driving 10K+ (IDR 28K+ ARR, 93% on-time rate). Scaled core product from ATS to full HRMS + ESS, driving 10% ARR growth.
            </p>
            
            <p>
              Built and launched CalyAI (calyai.xyz) solo on weekends — an AI scheduling assistant that lets users 
              manage calendars by chat. Integrated with Google Calendar, Google Meet, and Gemini LLM, handling 
              external invites, natural language, scheduling, and automated meeting links.
            </p>
          </div>
          
          <div className="mt-8">
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Connect for Collaboration</h3>
          <p className="text-muted-foreground mb-8">
            I'm open to global product roles, freelance work, or product collaborations.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <SocialButton variant="linkedin" href="#">
              LinkedIn
            </SocialButton>
            <SocialButton variant="whatsapp" href="#">
              WhatsApp
            </SocialButton>
            <SocialButton variant="email" href="#">
              Email
            </SocialButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
