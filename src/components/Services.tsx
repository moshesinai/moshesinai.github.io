
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, DollarSign, Users, Award, Headphones } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Property Search",
    description: "Expert guidance to find your perfect property match with personalized search criteria"
  },
  {
    icon: DollarSign,
    title: "Market Analysis",
    description: "Comprehensive market insights and pricing strategies to maximize your investment"
  },
  {
    icon: Home,
    title: "Property Management",
    description: "Full-service property management for investors and rental property owners"
  },
  {
    icon: Users,
    title: "Buyer Representation",
    description: "Dedicated representation throughout your entire home buying journey"
  },
  {
    icon: Award,
    title: "Luxury Properties",
    description: "Specialized expertise in high-end and luxury real estate transactions"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock availability for all your real estate needs and questions"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to meet your unique needs
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
