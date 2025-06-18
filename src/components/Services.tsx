
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, DollarSign, Users, Award, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Personal Property Meetings",
    description: "Meeting potential clients at their property to understand their needs and assess building characteristics, aspirations, and exact densification matching with local plans"
  },
  {
    icon: Home,
    title: "Property Development Planning",
    description: "Real estate investment planning based on independent assessment, capable of financing side by side with attractive conditions in order to maximize profits and achieve optimal outcomes"
  },
  {
    icon: DollarSign,
    title: "Opportunities & Maximizing Potential",
    description: "Identifying properties with potential for high returns - fitting solutions for improving life quality alongside profitable investments that match your budget and requirements"
  },
  {
    icon: TrendingUp,
    title: "FLIP Transactions",
    description: "Quick turnaround profitable investments - buy, renovate, and sell within 18 months for maximum returns"
  },
  {
    icon: Award,
    title: "Investment Analysis",
    description: "Comprehensive market research and cashflow analysis for maximum investment potential"
  },
  {
    icon: Users,
    title: "Why Choose Professional Investors?",
    description: "We find quality investment properties that professionals don't reveal to the general market, generating stable rental income and long-term profit"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Execute the Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional real estate investment consulting focused on maximizing returns and opportunities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
