
import { Card, CardContent } from "@/components/ui/card";
import { Users, FileText, Search, HandHeart, Home, TrendingUp } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Users,
      title: "פגישת אפיון אישית",
      description: "הבנת התקציב, הרצונות והשאיפות שלך, ותיאום ציפיות מדויק שיאפשר לנו ליצור את התהליך המתאים ביותר עבורך."
    },
    {
      icon: FileText,
      title: "בניית תכנית עסקית",
      description: "תכנית השקעה מותאמת אישית, בהתבסס על ההון עצמי, יכולת ההחזר והמינוף, לצד גיוס מימון בתנאים אטרקטיביים."
    },
    {
      icon: Search,
      title: "איתור הזדמנויות",
      description: "איתור נכסים עם פוטנציאל גבוה לעליית ערך, לצד ביצוע מו\"מ על המחיר - בין אם מדובר בהתחדשות עירונית, אזור מתפתח או רכישת נכס מתחת לשווי השוק."
    },
    {
      icon: HandHeart,
      title: "ליווי מלא בהשגת המימון והעסקה",
      description: "ליווי צמוד בכל שלב - מבדיקות משפטיות, כלכליות ותכנוניות ועד להשלמת העסקה, תוך שיתוף פעולה עם כל אנשי המקצוע הנדרשים."
    },
    {
      icon: Home,
      title: "אכלוס הנכס ומיקסום השכירות",
      description: "מציאת שוכרים איכותיים שמבטיחים שכירות יציבה ורווחית."
    },
    {
      icon: TrendingUp,
      title: "מימוש רווחים",
      description: "מכירת הנכס בהתאם לתכנית העסקית שלך - בין אם להגדלת ההון העצמי או לבניית פורטפוליו של נכסים מניבים עם תשואה גבוהה."
    }
  ];

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            איך מתבצע התהליך?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-right">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
