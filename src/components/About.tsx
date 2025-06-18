
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Building, TrendingUp, Award } from "lucide-react";

const About = () => {
  const credentials = [
    {
      icon: Building,
      title: "ליווי משקיעי נדל\"ן",
      description: "מלווה משקיעי נדל\"ן במתחמים בעלי פוטנציאל להתחדשות עירונית"
    },
    {
      icon: TrendingUp,
      title: "ניהול פרויקטים",
      description: "מנהל פרויקטים של פינוי בינוי ברחבי הארץ"
    },
    {
      icon: GraduationCap,
      title: "השכלה מקצועית",
      description: "בוגר תואר ראשון במנהל עסקים התמחות ב\"יזמות וחדשנות\""
    },
    {
      icon: Award,
      title: "התמחות נדל\"ן",
      description: "בוגר קורס \"יזמות נדל\"ן\" מכללת פסגות ומשקיע באופן עצמאי בנכסי נדל\"ן"
    }
  ];

  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            אודותיי
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((credential, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <credential.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{credential.title}</h3>
                <p className="text-gray-600 leading-relaxed">{credential.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
