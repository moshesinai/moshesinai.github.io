
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, TrendingUp } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "FLIP Investment Opportunity",
    price: "High ROI Potential",
    location: "Prime Urban Location",
    beds: 3,
    baths: 2,
    sqft: "1,500",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Investment",
    description: "Quick sale opportunity with renovation potential within 18 months"
  },
  {
    id: 2,
    title: "Cashflow Positive Rental",
    price: "Monthly Income",
    location: "Established Neighborhood",
    beds: 4,
    baths: 3,
    sqft: "2,200",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Rental Income",
    description: "Stable rental income with potential for value appreciation"
  },
  {
    id: 3,
    title: "Development Potential",
    price: "Future Growth",
    location: "Expanding District",
    beds: 2,
    baths: 1,
    sqft: "1,200",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Development",
    description: "Property with zoning potential for future expansion"
  }
];

const FeaturedProperties = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Investment Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover profitable real estate investments with proven returns and growth potential
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-amber-500 text-white hover:bg-amber-600">
                    {property.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <TrendingUp className="h-6 w-6 text-green-500 bg-white rounded-full p-1" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{property.title}</h3>
                  <span className="text-lg font-bold text-amber-600">{property.price}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{property.description}</p>
                
                <div className="flex justify-between text-sm text-gray-500 border-t pt-4">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-blue-50 p-8 rounded-lg max-w-4xl mx-virtual">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding the 300 Rule</h3>
            <p className="text-gray-700 leading-relaxed">
              The 300 rule is designed to create an opinion and knowledge regarding investment properties. 
              How can you know the total amount that should be in general search? Calculate: if your monthly expenses 
              amount to ₪20,000, then your calculation is: 300*20,000 = ₪6,000,000. 
              When we reach the total amount required to receive a return that enables overall search.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
