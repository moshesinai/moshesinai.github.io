
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import InvestmentTypes from "@/components/InvestmentTypes";
import WhyGuide from "@/components/WhyGuide";
import FinancialFreedom from "@/components/FinancialFreedom";
import Rule300 from "@/components/Rule300";
import LeadForm from "@/components/LeadForm";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Process />
      <InvestmentTypes />
      <WhyGuide />
      <FinancialFreedom />
      <Rule300 />
      <LeadForm />
      <Contact />
    </div>
  );
};

export default Index;
