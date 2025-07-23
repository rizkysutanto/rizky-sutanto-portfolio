import { SocialButton } from "@/components/SocialButton";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <section className="pt-20 pb-16 px-6 transition-all duration-500 hover:bg-white/5 hover:shadow-2xl hover:shadow-primary/10 rounded-2xl mx-4 slide-in-from-top">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-lg font-medium text-muted-foreground mb-4 slide-in-from-left slide-in-delay-1">
            Rizky Sutanto
          </h1>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight slide-in-from-left slide-in-delay-2">
            I Build Products That{" "}
            <span className="block">Generate Revenue & Deliver Value</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto slide-in-from-left slide-in-delay-3">
            Built Caly AI 0 to 1 Solo | Head of B2B Product @ B2B SaaS (1B+ IDR ARR)
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <SocialButton variant="linkedin" href="https://www.linkedin.com/in/rizky-sutanto/" className="slide-in-from-bottom slide-in-delay-4">
              LinkedIn
            </SocialButton>
            <SocialButton variant="twitter" href="https://x.com/rizkysutanto_" className="slide-in-from-bottom slide-in-delay-5">
              X / Twitter
            </SocialButton>
            <SocialButton variant="email" href="mailto:work.rizkysutanto@gmail.com" className="slide-in-from-bottom slide-in-delay-6">
              Email
            </SocialButton>
            <SocialButton variant="whatsapp" href="https://api.whatsapp.com/send/?phone=%2B628998656730&text&type=phone_number&app_absent=0" className="slide-in-from-bottom slide-in-delay-4">
              WhatsApp
            </SocialButton>
            <SocialButton variant="resume" href="https://drive.google.com/file/d/1kexcJgkcsXF8cos9_bvqu-tMuDKQShoO/view?usp=share_link" className="slide-in-from-bottom slide-in-delay-5">
              Resume
            </SocialButton>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-16 px-6 transition-all duration-700 hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent rounded-2xl mx-4 group slide-in-from-left slide-in-delay-2">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Caly AI Image */}
            <div className="w-full transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 slide-in-from-left slide-in-delay-3">
              <a href="https://calyai.xyz" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/calyai.png" 
                  alt="Caly AI - Schedule Anything In Seconds by Chat" 
                  className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 cursor-pointer"
                />
              </a>
            </div>
            
            {/* Jobseeker Software Image */}
            <div className="w-full transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 slide-in-from-right slide-in-delay-4">
              <a href="https://jobseeker.software/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/js.png" 
                  alt="Jobseeker HRMS - Your All In One HR Solution" 
                  className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary Section */}
      <section className="py-16 px-6 transition-all duration-600 hover:bg-white/5 hover:shadow-xl hover:shadow-primary/5 rounded-2xl mx-4 group slide-in-from-right slide-in-delay-3">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 transition-all duration-300 group-hover:text-primary slide-in-from-left slide-in-delay-4">Professional Summary</h3>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed transition-all duration-500 group-hover:text-muted-foreground/90">
            <p className="transform transition-all duration-500 hover:translate-x-2 hover:text-foreground/80 slide-in-from-left slide-in-delay-5">
              Product & Project Manager with 6 years of experience, currently Head of B2B Product at Jobseeker 
              Company. Lead end-to-end product strategy and execution for B2B HRMS platforms generating 71% of 
              company revenue (IDR 1B+ ARR). Delivered end-to-end SaaS project solutions for enterprise clients including Super Indo, Paramount Land, and FIT HUB (IDR 800M+ ARR, 87.5% on-time rate). Scaled core product from ATS to full HRMS + ESS, driving 10% ARR growth.
            </p>
            
            <p className="transform transition-all duration-500 hover:translate-x-2 hover:text-foreground/80 slide-in-from-left slide-in-delay-6">
              Built and launched CalyAI (calyai.xyz) solo on weekends — an AI scheduling assistant that lets users 
              manage calendars by chat. Integrated with Google Calendar, Google Meet, and Gemini LLM, handling 
              external invites, natural language, scheduling, and automated meeting links.
            </p>
          </div>
          
          <div className="mt-8 transform transition-all duration-500 hover:scale-105 slide-in-from-bottom slide-in-delay-6">
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              onClick={() => window.open('https://drive.google.com/file/d/1kexcJgkcsXF8cos9_bvqu-tMuDKQShoO/view?usp=share_link', '_blank')}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16 px-6 transition-all duration-600 hover:bg-white/5 hover:shadow-xl hover:shadow-primary/5 rounded-2xl mx-4 group slide-in-from-bottom slide-in-delay-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 transition-all duration-300 group-hover:text-primary slide-in-from-bottom slide-in-delay-5">Connect for Collaboration</h3>
          <p className="text-muted-foreground mb-8 transition-all duration-500 group-hover:text-foreground/80 slide-in-from-bottom slide-in-delay-6">
            I'm open to global product roles, freelance work, or product collaborations.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 transform transition-all duration-500 group-hover:scale-105">
            <SocialButton variant="linkedin" href="https://www.linkedin.com/in/rizky-sutanto/" className="slide-in-from-left slide-in-delay-4">
              LinkedIn
            </SocialButton>
            <SocialButton variant="whatsapp" href="https://api.whatsapp.com/send/?phone=%2B628998656730&text&type=phone_number&app_absent=0" className="slide-in-from-bottom slide-in-delay-5">
              WhatsApp
            </SocialButton>
            <SocialButton variant="email" href="mailto:work.rizkysutanto@gmail.com" className="slide-in-from-right slide-in-delay-6">
              Email
            </SocialButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
