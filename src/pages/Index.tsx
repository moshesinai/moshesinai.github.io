
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import Services from "@/components/Services";
import LeadForm from "@/components/LeadForm";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProperties />
      <Services />
      <LeadForm />
      <Contact />
    </div>
  );
};

export default Index;
